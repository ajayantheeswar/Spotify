import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Profile from "@/views/Profile/Profile.vue";
import homePage from "@/components/HomePage/homeAd.vue";

import signin from "@/views/SignIn/SignIn.vue";
import signup from "@/views/SignUp/SignUp.vue";
import * as ProfileCompents from "@/components/Profile/index";

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
			{ path: "" , redirect: 'account-overview'}
		],
	},
	{ path: "/signin", component: signin },
	{ path: "/signup", component: signup },
	{ path: "/", component: homePage },
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
