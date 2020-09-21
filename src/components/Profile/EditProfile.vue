<template>
	<div class="w-full">
		<h1 class="text-3xl font-bold mb-6 lg:text-4xl">Edit profile</h1>
		<form @submit.prevent="saveProfile">
			<div class="mt-5 mb-5">
				<label class="block">Email</label>
				<input
					id="email"
					class="block border w-full p-2 pl-5 pr-5 rounded mt-2 input-field"
					v-model="email"
					:disabled="true"
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
							class="block appearance-none w-full input-field bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-state"
							:disabled="true"
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
							class="block appearance-none w-full input-field bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-state"
							:disabled="true"
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
							class="block appearance-none w-full input-field bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-state"
							:disabled="true"
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
			</div>
			<div class="w-full px-3 mb-6">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					for="grid-state"
				>
					Year
				</label>
				<div class="relative">
					<select
						class="block appearance-none w-full input-field bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-state"
						:disabled="true"
					>
						<option value="Male">{{ "Male" }}</option>
						<option value="Female">{{ "Female" }}</option>
						<option value="Not Satisfied">{{ "Not Satisfied" }}</option>
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
            <hr>
            <div class="p-2 pt-4 flex justify-end pr-10">
                <button class="bg-spgreen tex-white p-2 pr-8 pl-8 rounded-full text-white">Save Changes</button>
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
            gender :''
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
