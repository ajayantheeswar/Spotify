<template>
	<div class="min-h-screen relative backgroud-body">
		<Navbar></Navbar>
		<div class="mx-auto lg:w-7/12 md:w-3/5 relative">
			<div
				class="items-center flex flex-col md:flex-row text-white bg-black xl:pt-10 md:pr-5 md:pt-5 backgroud-dep"
			>
				<div
					class="md:pt-10 lg:pt-20 md:p-5 md:block flex flex-col items-center p-5 text-center"
				>
					<div class="md:hidden relative w-full header-navigation pb-3">
						<input
							type="checkbox"
							hidden
							id="title-nav"
							v-model="navbarChecked"
						/>
						<label
							for="title-nav"
							v-if="currentIndex !== -1"
							class="bg-white w-full text-black space-x-2 flex items-center p-2 rounded-lg"
							><span class="inline-block h-5 w-5 align-middle"
								><img :src="linkList[currentIndex].img" alt="s"/></span
							><span>{{ linkList[currentIndex].name }}</span></label
						>
						<div
							class="bg-white text-black flex-col rounded-lg w-full absolute pt-2 hidden"
						>
							<router-link
								v-for="lin in linkList"
								:key="lin.name"
								class="flex items-center space-x-3 p-3 pl-5"
								:to="lin.to"
								active-class="nav-ring-active"
								><span class="inline-block h-5 w-5 align-middle"
									><img :src="lin.img" alt="s"/></span
								><span>{{ lin.name }}</span></router-link
							>
						</div>
					</div>
					<h1 class="text-xl md:text-3xl mb-2 md:mb-10">
						Music without limits
					</h1>
					<p>
						Premium lets you listen anytime, even offline. No restrictions. No
						ads.
					</p>
					<button class="bg-spgreen p-2 pr-10 pl-10 text-xl rounded-full m-10">
						Get Premium
					</button>
				</div>
				<div class="w-1/2 items-end align-bottom">
					<img src="@/assets/iphone-ddd9e69.png" class="block" alt="we" />
				</div>
			</div>
			<div class="w-full flex bg-white">
				<div class="hidden lg:flex flex-col p-2 bg-greyblack100 w-1/4">
					<!-- nav-menu -->
					<div class="self-center pt-6 pb-6">
						<div v-if="imageUrl === ''" class="rounded-full bg-gray-700 p-3">
							<img
								src="@/assets/profiledef.svg"
								class="fill-white block w-5"
								alt="profile"
							/>
						</div>
						<div v-else class="rounded-full bg-gray-700 p-3">
							<img :src="imageUrl" class="fill-white block w-5" alt="profile" />
						</div>
					</div>
					<router-link
						class="text-white flex p-3 m-2 border-l-4 border-greyblack100 hover:border-spgreen c"
						active-class="active"
						to="account-overview"
						>Account Overview</router-link
					>
					<router-link
						class="text-white p-3 m-2 border-l-4 border-greyblack100 hover:border-spgreen c"
						active-class="active"
						to="edit-profile"
						>Edit profile</router-link
					>
					<router-link
						class="text-white p-3 m-2 border-l-4 border-greyblack100 hover:border-spgreen c"
						active-class="active"
						to="change-password"
						>Change Password</router-link
					>
					<router-link
						class="text-white p-3 m-2 border-l-4 border-greyblack100 hover:border-spgreen c"
						active-class="active"
						to="recover-playlists"
						>Recover playlists</router-link
					>
				</div>
				<div class="p-4 lg:p-6 w-full lg:w-3/4">
					<router-view />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/views/Navbar/Navbar.vue";
export default Vue.extend({
	data() {
		return {
			imageUrl: "",
			linkList: [
				{
					name: "Account Overview",
					to: "/account-overview",
					img: require("@/assets/home.svg"),
				},
				{
					name: "Edit Profile",
					to: "/edit-profile",
					img: require("@/assets/edit.svg"),
				},
				{
					name: "Change Password",
					to: "/change-password",
					img: require("@/assets/pass.svg"),
				},
				{
					name: "Recover Playlists",
					to: "/recover-playlists",
					img: require("@/assets/recplaylist.svg"),
				},
			],
			currentIndex: -1,
			navbarChecked: false,
		};
	},

	components: {
		Navbar,
	},

	watch: {
		$route(to, from) {
			console.log(this.navbarChecked);
			this.currentIndex = this.linkList.findIndex((val) => val.to === to.path);
			this.navbarChecked = false;
		},
	},

	mounted() {
		const currentRoute = this.$router.currentRoute.path;
		this.currentIndex = this.linkList.findIndex(
			(val) => val.to === currentRoute
		);
	},
});
</script>

<style lang="postcss" scoped>
.backgroud-body {
	background-image: linear-gradient(#212c39, #121e3d 50%, #000);
	background-repeat: no-repeat;
}

.backgroud-dep {
	background-image: linear-gradient(to bottom, #121e3d 0%, #000 100%);
	background-repeat: no-repeat;
}

.active {
	@apply text-greyblack200 border-spgreen;
}

#title-nav:checked ~ div {
	display: flex;
}
.nav-ring-active {
	@apply bg-gray-200;
}
</style>
