<template>
	<div class="w-full">
		<div v-if="user" class="w-full">
			<h1 class="text-3xl font-bold mb-6 lg:text-4xl">Edit profile</h1>
			<form @submit.prevent="saveProfile">
				<div class="mt-5 mb-5">
					<label class="block">Email</label>
					<input
						id="email"
						:class="[ !isEmailValid ? 'border-red-500 border-2 outline-none' : 'border','block w-full p-2 pl-5 pr-5 rounded mt-2 input-field']"
						v-model="user.email"
						:disabled="!editable"
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
								v-model="user.day"
								:disabled="!editable"
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
								v-model="user.month"
								:disabled="!editable"
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
								v-model="user.year"
								:disabled="!editable"
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
						Gender
					</label>
					<div class="relative">
						<select
							class="block appearance-none w-full input-field bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-state"
							v-model="user.gender"
							:disabled="!editable"
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
					<button 
						:disabled="!editable"
						class="bg-spgreen tex-white p-2 pr-8 pl-8 rounded-full text-white input-field">Save Changes</button>
				</div>
			</form>
		</div>
		<div v-else-if="!error">
            <spinner />
        </div>
        <div v-else>
            <div class="mx-auto border border-black rounded p-2 pr-5 pl-5">
                <p class="text-red-500">{{ error }}</p>
            </div>
        </div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Spinner from '@/components/shared/Spinner/Spinner.vue'
import * as profileService from '../../services/profile.service';
import isEmail from "validator/lib/isEmail";

export default Vue.extend({
	data() {
		return {
			user : null ,
			error : null,
			message : null,
			loading : false,
			editable : false
		};
	},
	methods: {
		saveProfile() {
			const updatedProfile = this.getCredientialData()
			console.log(updatedProfile)
			this.loading = true;
			profileService.updateProfile(updatedProfile)
				.then(({data}: any) => {
					this.loading = false;
					this.user = {
						email : data.email,
						gender : data.gender,
						day : data.dob.split('/')[1],
						month : data.dob.split('/')[0],
						year : data.dob.split('/')[2],
					} as any;
					this.loading = false,
					this.editable = data.editable
				})
				.catch(err => {
					console.log(err)
				})
		},
		getUpdatedData () {
			this.loading = true
            profileService.getProfile()
                .then(({data}) => {
                    this.user = {
						email : data.email,
						gender : data.gender,
						day : data.dob.split('/')[1],
						month : data.dob.split('/')[0],
						year : data.dob.split('/')[2],
					} as any;
					this.$store.dispatch('changeUserEmail',{email : data.email})
					this.loading = false,
					this.editable = data.editable
                })
                .catch(err=> {
                    if(err.response){
                        this.error = err.response.data.error;
                    }else{
                        this.error = err.message;
                    }
                })
		},
		getCredientialData (): any{
			const date = new Date()
			const user = this.user as any
			date.setFullYear(+user.year,+user.month-1,+user.day)
			return {
				email : user.email,
				dob : date.toISOString(),
				gender : user.gender
			}
		}
	},
	computed: {
		years: function() {
			const ans: Array<number> = [];
			const year = new Date().getFullYear();
			for (let i = 1971; i <= year; i++) {
				ans.push(i);
			}
			return ans;
		},
		isEmailValid() {
			if(!this.user) return false
			const user =  this.user as any
			return isEmail(user.email);
		},
	},
	components : {
        Spinner
	},
	mounted() {
		this.getUpdatedData()
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
