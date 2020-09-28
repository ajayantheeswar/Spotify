import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Profile from "@/views/Profile/Profile.vue";
import homePage from "@/components/HomePage/homeAd.vue";

import signin from "@/views/SignIn/SignIn.vue";
import signup from "@/views/SignUp/SignUp.vue";
import * as ProfileCompents from "@/components/Profile/index";
import Player from "@/views/Player/Player.vue";

import * as PlayerComponents from "@/components/Player/index";
import Album from "@/views/Album/Album.vue";

import playlist from "@/views/Playlist/Playlist.vue";

import store from "../store/index";

import admin from "@/views/Admin/Admin.vue";
import * as AdminComponents from "@/components/Admin/index";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: "/account",
		component: Profile,
		children: [
			{ path: "account-overview", component: ProfileCompents.AccountOverview },
			{ path: "edit-profile", component: ProfileCompents.EditProfile },
			{ path: "change-password", component: ProfileCompents.ChangePassword },
			{ path: "recover-playlists", component: signin },
			{ path: "", redirect: "account-overview" },
		],
		meta: {
			requiresAuth: true,
			role: "user",
		},
	},
	{
		path: "/player",
		component: Player,
		children: [
			{ path: "", component: PlayerComponents.Home, props: true },
			{ path: "library", component: PlayerComponents.Library, props: true },
			{ path: "search", component: PlayerComponents.Search, props: true },
			{ path: "album/:albumID", component: Album },
			{ path: "playlist/:playlistID", component: playlist },
		],
	},
	{ path: "/signin", component: signin, name: "Login" },
	{ path: "/signup", component: signup, name: "SignUp" },
	{
		path: "/admin",
		component: admin,
		children: [
			{
				path: "album",
				component: AdminComponents.Album,
				props: true,
				children: [
					{
						path: "create-album",
						component: AdminComponents.CreateAlbum,
						props: true,
					},
					{
						path : "",
						redirect: "create-album"
					}
				],
			},
			{
				path : "",
				redirect: "album"
			}
		],
	},
	{ path: "/", component: homePage },
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (store.getters.isAuthenticated) {
			next();
			return;
		}
		next("/signin");
	} else {
		next();
	}
});

export default router;
