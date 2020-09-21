<template>
	<div class="w-full">
		<h1 class="text-3xl font-bold mb-6 lg:text-4xl">Change Password</h1>
		<form
			@submit.prevent="saveProfile"
			class="border p-5 lg:w-1/2 mx-auto rounded shadow-lg"
		>
			<div class="mb-5">
				<label class="block">Old Password</label>
				<input
					id="email"
					class="block border w-full p-2 pl-5 pr-5 rounded mt-2 input-field"
					v-model="email"
                    type='password'
				/>
			</div>
			<div class="mb-5">
				<label class="block">New Password</label>
				<input
					id="email"
					class="block border w-full p-2 pl-5 pr-5 rounded mt-2 input-field"
					v-model="email"
                    type='password'
				/>
			</div>
			<div class="mb-5">
				<label class="block">confirm New Password</label>
				<input
					id="email"
					class="block border w-full p-2 pl-5 pr-5 rounded mt-2 input-field"
					v-model="email"
                    type='password'
				/>
			</div>

			<hr />
			<div class="p-2 pt-4 flex justify-center">
				<button
					class="bg-spgreen tex-white p-2 pr-8 pl-8 rounded-full text-white"
				>
					Change Password
				</button>
			</div>
		</form>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	data() {
		return {
			email: "ajaysiva2000@gmail.com",
			year: "",
			gender: "",
		};
	},
	methods: {
		saveProfile() {
			console.log("edit profile");
		},
	},
	computed: {
		years: function() {
			const ans: Array<number> = [];
			const year = new Date().getFullYear();
			for (let i = 1950; i <= year; i++) {
				ans.push(i);
			}
			return ans;
		},
	}
	
});
</script>

<style lang="postcss" scoped>
.bg-ground {
	background: linear-gradient(
		-180deg,
		rgb(182, 43, 190) 0%,
		rgb(150, 34, 185) 100%
	);
}

.plan {
	height: 200px;
}

.scale-out {
	transform: scale(1);
}
.scale-out:hover {
	transform: scale(1.05);
}

.input-field[disabled="disabled"] {
	background: rgb(248, 248, 248);
	color: rgb(127, 127, 127);
}
</style>
