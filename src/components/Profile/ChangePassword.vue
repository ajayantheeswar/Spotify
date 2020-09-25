<template>
	<div class="w-full">
		<div v-if="mounted" class="w-full">
			<h1 class="text-3xl font-bold mb-6 lg:text-4xl">Change Password</h1>
			<div v-if="message" class="border border-green-600 p-2 pr-3 pl-3 bg-green-200 mb-4">
				<p class="text-green-700 font-sm">{{ message }}</p>
			</div>
			<div v-if="error" class="border border-red-600 p-2 pr-3 pl-3 bg-red-200">
				<p class="bg-red-700 font-sm">{{ message }}</p>
			</div>
			<form
				@submit.prevent="saveProfile"
				class="border p-5 lg:w-1/2 mx-auto rounded-lg shadow-lg"
			>
				<div class="mb-5">
					<label class="block">Old Password</label>
					<input
						id="email"
						class="block border w-full p-2 pl-5 pr-5 rounded mt-2 input-field input-field"
						v-model="oldPassword.value"
						@input="oldPassword.touched = true"
						:disabled="!allowed"
						type='password'
					/>
				</div>
				<div class="mb-5">
					<label class="block">New Password</label>
					<input
						id="email"
						class="block border w-full p-2 pl-5 pr-5 rounded mt-2 input-field input-field"
						v-model="newPassword.value"
						@input="newPassword.touched = true"
						type='password'
					/>
				</div>
				<div class="mb-5">
					<label class="block">confirm New Password</label>
					<input
						id="email"
						:class="[newPasswordConfirm.touched && newPassword.value !== newPasswordConfirm.value ? 'border border-red-500' : 'border','block border w-full p-2 pl-5 pr-5 rounded mt-2 input-field input-field']"
						v-model="newPasswordConfirm.value"
						@input="newPasswordConfirm.touched = true"
						type='password'
						:disabled="!allowed"
					/>
				</div>

				<hr />
				<div class="p-2 pt-4 flex justify-center">
					<button
						class="bg-spgreen tex-white p-2 pr-8 pl-8 rounded-full text-white input-field"
						:disabled="newPassword.value !== newPasswordConfirm.value || !allowed"
					>
						Change Password
					</button>
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
import * as profileService from '@/services/profile.service';

import Spinner from '@/components/shared/Spinner/Spinner.vue';

export default Vue.extend({
	components : {
		Spinner
	},
	data() {
		return {
			oldPassword :{
				value : '',
				touched : false
			},
			newPassword :{
				value : '',
				touched : false
			},
			newPasswordConfirm : {
				value : '',
				touched : false
			},
			loading : false,
			error : null,
			message : null,
			mounted : false,
			allowed : false
		};
	},
	methods: {
		saveProfile() {
			if(this.newPassword.value === this.newPasswordConfirm.value){
				this.loading = true
				profileService.changePassword({
					oldPassword : this.oldPassword.value,
					newPassword : this.newPasswordConfirm.value
				})
				.then(({data}: any) => {
					this.loading = false;
					this.error = null;
					this.message = data.message
				})
				.catch((err) => {
					this.message = null;
					this.loading = false;
					if(err.response){
                        this.error = err.response.data.error;
                    }else{
                        this.error = err.message;
                    }
				})
			}else{
				this.error = "check confirm password !" as any
			}
			
		},

		checkPasswordchangePrivilage(cb: any) {
			profileService.checkPasswordchangePrivilage()
				.then(({data}: any) => {
					this.loading = false;
					this.error = null;
					this.allowed = data.allowed
					cb()
				})
				.catch((err) => {
					this.message = null;
					this.loading = false
					if(err.response){
                        this.error = err.response.data.error;
                    }else{
                        this.error = err.message;
					}
					cb()
				})
		}
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
	},
	mounted(){
		this.checkPasswordchangePrivilage(() => {
			this.mounted = true;
			console.log('mounted',this.mounted)
		})
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
