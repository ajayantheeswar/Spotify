<template>
	<div v-if="mounted" class="flex flex-col pt-8 items-center mb-20 space-y-4">
		<div class="">
			<svg
				class="inline-block mr-2 h-12 fill-black"
				viewBox="0 0 63 20"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="xMidYMin meet"
			>
				<g fill-rule="evenodd" class="svelte-1gcdbl9">
					<path
						d="M61.842 9.506a1.02 1.02 0 0 1-1.023-1.024c0-.562.453-1.03 1.029-1.03a1.02 1.02 0 0 1 1.023 1.024 1.03 1.03 0 0 1-1.029 1.03m.006-1.952a.915.915 0 0 0-.922.928c0 .51.394.921.916.921a.916.916 0 0 0 .922-.927.908.908 0 0 0-.916-.922m.226 1.027l.29.406h-.244l-.26-.372h-.225v.372h-.204V7.912h.48c.249 0 .413.128.413.343 0 .176-.102.284-.25.326m-.172-.485h-.267v.34h.267c.133 0 .212-.065.212-.17 0-.11-.08-.17-.212-.17m-12.804-3.52a1.043 1.043 0 1 0-.001 2.086 1.043 1.043 0 0 0 0-2.087m.72 2.89h-1.454a.107.107 0 0 0-.106.107v6.346c0 .06.047.107.106.107h1.455a.107.107 0 0 0 .107-.107V7.572a.107.107 0 0 0-.107-.107m3.233.006v-.2c0-.592.227-.856.736-.856.303 0 .546.06.82.152a.106.106 0 0 0 .14-.102V5.24a.107.107 0 0 0-.076-.102 3.993 3.993 0 0 0-1.21-.174c-1.343 0-2.053.757-2.053 2.188v.308h-.699a.107.107 0 0 0-.107.106v1.257c0 .059.048.107.107.107h.699v4.99c0 .058.047.106.106.106h1.455a.107.107 0 0 0 .106-.107v-4.99h1.358l2.081 4.99c-.236.523-.468.628-.785.628-.257 0-.527-.077-.803-.228a.109.109 0 0 0-.084-.008.106.106 0 0 0-.063.058l-.493 1.081a.106.106 0 0 0 .045.138c.515.279.98.398 1.554.398 1.074 0 1.668-.5 2.191-1.847L60.6 7.617a.106.106 0 0 0-.099-.146h-1.514a.107.107 0 0 0-.1.072l-1.552 4.431-1.7-4.434a.106.106 0 0 0-.099-.069h-2.485m-5.577-.006h-1.6V5.828a.106.106 0 0 0-.107-.106h-1.455a.107.107 0 0 0-.106.106v1.637h-.7a.106.106 0 0 0-.106.107v1.25c0 .059.048.107.106.107h.7v3.234c0 1.308.65 1.97 1.934 1.97.522 0 .954-.107 1.362-.338a.106.106 0 0 0 .054-.093v-1.19a.106.106 0 0 0-.154-.096c-.28.141-.551.206-.854.206-.467 0-.675-.211-.675-.686V8.929h1.6a.106.106 0 0 0 .107-.107v-1.25a.106.106 0 0 0-.106-.107m-7.671-.133c-1.96 0-3.497 1.51-3.497 3.437 0 1.907 1.526 3.4 3.473 3.4 1.967 0 3.508-1.504 3.508-3.424 0-1.914-1.53-3.413-3.484-3.413m0 5.362c-1.043 0-1.83-.838-1.83-1.95 0-1.115.76-1.924 1.806-1.924 1.05 0 1.84.838 1.84 1.95 0 1.115-.763 1.924-1.816 1.924m-7.014-5.362c-.82 0-1.492.323-2.046.984v-.744a.107.107 0 0 0-.106-.107h-1.455a.107.107 0 0 0-.106.107v8.27c0 .058.048.106.106.106h1.455a.107.107 0 0 0 .106-.106v-2.61c.555.621 1.227.925 2.046.925 1.522 0 3.063-1.172 3.063-3.412s-1.54-3.413-3.063-3.413m1.372 3.413c0 1.14-.703 1.937-1.709 1.937-.995 0-1.745-.833-1.745-1.937s.75-1.937 1.745-1.937c.99 0 1.71.814 1.71 1.937m-8.437-1.81c-1.624-.388-1.913-.66-1.913-1.231 0-.54.508-.903 1.264-.903.732 0 1.459.275 2.22.843a.107.107 0 0 0 .15-.023l.794-1.119a.107.107 0 0 0-.02-.144c-.906-.728-1.927-1.081-3.12-1.081-1.755 0-2.98 1.052-2.98 2.559 0 1.615 1.057 2.187 2.884 2.628 1.554.358 1.817.658 1.817 1.195 0 .594-.53.963-1.385.963-.948 0-1.721-.32-2.587-1.068a.11.11 0 0 0-.078-.026.105.105 0 0 0-.073.038l-.89 1.058a.105.105 0 0 0 .011.148 5.303 5.303 0 0 0 3.581 1.373c1.89 0 3.112-1.033 3.112-2.631 0-1.351-.807-2.098-2.787-2.58M9.507.305a9.41 9.41 0 1 0 0 18.82 9.41 9.41 0 0 0 0-18.82m4.316 13.572a.586.586 0 0 1-.807.195c-2.21-1.35-4.99-1.655-8.266-.907a.586.586 0 1 1-.261-1.143c3.584-.82 6.659-.467 9.139 1.049.276.169.363.53.195.806m1.15-2.562a.734.734 0 0 1-1.008.242c-2.529-1.555-6.385-2.005-9.377-1.097a.735.735 0 0 1-.426-1.404c3.418-1.037 7.666-.534 10.57 1.25a.734.734 0 0 1 .242 1.01m.1-2.669C12.04 6.846 7.036 6.68 4.141 7.56a.88.88 0 1 1-.511-1.684c3.323-1.01 8.849-.814 12.34 1.258a.88.88 0 0 1-.898 1.514"
					/>
				</g>
			</svg>
		</div>
		<h2 class="text-xl md:text-3xl font-bold text-center ">
			Sign up for free to start listening.
		</h2>
		<button
			class="text-white bg-facebookBlue p-2 px-10 md:px-20 rounded-r-full rounded-l-full focus:outline-none"
		>
			Sign Up With FaceBook
		</button>
		<div class="flex space-x-4 pt-4">
			<p class="border-t-2 w-20"></p>
			<p class="">or</p>
			<p class="border-t-2 w-20"></p>
		</div>
		<h1 class="text-xl font-bold">Sign Up with Email</h1>
		<div
			v-show="error"
			class="border-2 p-2 rounded flex justify-center bg-red-300 border-red-500 capitalize"
			style="width:400px;"
		>
			<p style="color:red;">{{ error  }}</p>
		</div>
		<form
			@submit.prevent="signUpsubmit"
			class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 lg:w-1/3 xl:w-1/4 flex flex-col"
		>
			<div class="mb-4">
				<label
					class="block text-gray-700 text-sm font-bold mb-2"
					for="username"
				>
					What's your email?
				</label>
				<input
					v-model="email.value"
					@blur="email.touched = true"
					:class="[
						'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
						!isEmailValid(email.value) && email.touched ? 'out' : '',
					]"
					id="username"
					type="text"
					placeholder="Enter your Email"
				/>
			</div>
			<div class="mb-4">
				<label
					class="block text-gray-700 text-sm font-bold mb-2"
					for="username"
				>
					Confirm your email
				</label>
				<input
					v-model="confirmEmail.value"
					@blur="confirmEmail.touched = true"
					:class="[
						'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
						email.value !== confirmEmail.value && confirmEmail.touched
							? 'out'
							: '',
					]"
					id="username"
					type="text"
					placeholder="Enter your Email again"
				/>
			</div>
			<div class="mb-4">
				<label
					class="block text-gray-700 text-sm font-bold mb-2"
					for="username"
				>
					Create a password
				</label>
				<input
					v-model="password.value"
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="username"
					type="password"
					placeholder="Create a password"
				/>
			</div>
			<div class="mb-4">
				<label
					class="block text-gray-700 text-sm font-bold mb-2"
					for="username"
				>
					What should we call you?
				</label>
				<input
					v-model="username.value"
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="username"
					type="text"
					placeholder="Enter a Profile Name"
				/>
			</div>
			<div class="flex flex-wrap -mx-3 mb-2">
				<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-city"
					>
						Date
					</label>
					<div class="relative">
						<select
							class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-state"
						>
							<option v-for="i in 31" :key="i" :value="i">{{ i }}</option>
						</select>
						<div
							class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
						>
							<svg
								class="fill-current h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path
									d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-state"
					>
						Month
					</label>
					<div class="relative">
						<select
							class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-state"
						>
							<option v-for="i in 12" :key="i" :value="i">{{ i }}</option>
						</select>
						<div
							class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
						>
							<svg
								class="fill-current h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path
									d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div class="w-full md:w-1/3 px-3 mb-6">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-state"
					>
						Year
					</label>
					<div class="relative">
						<select
							class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-state"
						>
							<option v-for="i in years" :key="i" :value="i">{{ i }}</option>
						</select>
						<div
							class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
						>
							<svg
								class="fill-current h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path
									d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div class="w-full px-3 mb-6">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-state"
					>
						What's your gender?
					</label>
					<div class="flex justify-evenly">
						<div class="relative space-x-2">
							<input
								v-model="gender.value"
								id="male"
								value="Female"
								type="radio"
								placeholder="Username"
							/>
							<label for="male">Female</label>
						</div>
						<div class="relative space-x-2">
							<input
								v-model="gender.value"
								id="female"
								value="Male"
								type="radio"
								placeholder="Username"
							/>
							<label for="female">Male</label>
						</div>
						<div class="relative space-x-2">
							<input
								v-model="gender.value"
								id="notg"
								value="Not - Intrested"
								type="radio"
								placeholder="Username"
							/>
							<label for="notg">Not - Intrested</label>
						</div>
					</div>
				</div>
			</div>
			<div class="space-x-5 flex items-start">
				<input class="mt-2" id="tand" type="checkbox" />
				<label for="tand" class="text-sm"
					>Share my registration data with Spotify's content providers for
					marketing purposes.</label
				>
			</div>
			<button
				class="transition duration-300 ease-in-out inline-block hover:bg-black hover:text-white self-center focus:outline-none text-black rounded-r-full rounded-l-full p-2 px-8 mt-4 shadow-md"
			>
				Submit
			</button>
		</form>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import isEmail from "validator/lib/isEmail";

export default Vue.extend({
	data() {
		return {
			email: {
				touched: false,
				value: "",
			},
			confirmEmail: {
				touched: false,
				value: "",
			},
			password: {
				touched: false,
				value: "",
			},
			gender: {
				touched: false,
				value: "Female",
			},
			username: {
				touched: false,
				value: "",
			},
			day: {
				touched: false,
				value: "",
			},
			month : {
				touched: false,
				value: "",
			},
			year : {
				touched: false,
				value: "",
			},
			mounted : false
		};
	},

	computed: {
		years: function() {
            const ans: Array<number> = [];
            const year = new Date().getFullYear()
			for (let i = 1950; i <= year; i++) {
				ans.push(i);
			}
			return ans;
		},

		error () {
			return this.$store.getters.getError;
		},
		isAuth: function () {
			return this.$store.getters.isAuthenticated
		}
	},
	watch : {
		isAuth (changed){
			if(changed) this.$router.push('/account')
		}
	},

	methods: {
		signUpsubmit() {
			if(this.email.value !== '' || 
			this.password.value !== '' || 
			this.username.value !== '' || 
			this.day.value !== '' ||
			this.month.value !== '' ||  
			this.year.value !== '' ||
			this.gender.value !== ''){
				const credientials = this.getCredientialData();
				console.log('deter')
				this.$store.dispatch('signUpWithEmail',
					credientials
				)
			}

		},
		isEmailValid(value: string) {
			return isEmail(value);
		},
		getCredientialData () {
			const date = new Date()
			date.setFullYear(+this.year.value,+this.month.value-1,+this.day.value)
			return {
				name : this.username.value,
				password: this.password.value,
				email : this.email.value,
				dob : date.toISOString(),
				gender : this.gender.value
			}
		}
	},
	mounted() {
		const auth = this.$store.getters.isAuthenticated;
		if(auth) this.$router.push('/account')
		else this.mounted = true
	}
});
</script>

<style lang="postcss" scoped>
.out {
	@apply shadow-outline;
	box-shadow: 0 0 3px red;
}
</style>
