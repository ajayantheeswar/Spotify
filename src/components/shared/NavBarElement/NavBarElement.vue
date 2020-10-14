<template>
    <div class="bg-black sticky top-0 left-0 w-full p-3 pr-5 pl-5 text-xl font-bold z-10 flex justify-end items-center">
            <router-link
						v-if="!isAuth"
						class="mx-5 my-px lg:text-lg hover:text-spgreen"
						to="/signup"
						>Sign Up</router-link
					>
					<router-link
					v-if="!isAuth"
						class="mx-5 my-px lg:text-lg hover:text-spgreen"
						to="/signin"
						>Sign In</router-link
					>
					<div v-if="isAuth" 
						class="pr-2 pl-4 flex lg:items-center relative profile items-start space-x-4">
						<div v-if="imageUrl === ''" class="rounded-full bg-gray-700 p-3">
							<img  src="@/assets/profiledef.svg" class="fill-white block w-5" alt='profile' />
						</div>
						<div v-else class="rounded-full bg-gray-700 p-3">
							<img  :src="imageUrl" class="fill-white block w-5" alt='profile' />
						</div>
						<div class="hidden lg:block text-white test-xl">
							<p>{{ email }}</p>
						</div>
						<div class="lg:absolute flex flex-col lg:text-black lg:bg-white p-2 pr-5 lg:pl-5 rounded profile-drop-down bg-black focus:text-spotify">
							<div class="hidden arrow-up lg:block"></div>
							<router-link class="hover:text-spgreen" to='/account'>Account</router-link>
							<p class="hover:text-spgreen" to='/logout' @click="logout">logout</p>
						</div>
					</div>
        </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
		return {
			imageUrl : ''
		}
	},
	computed : {
		isAuth : function() {
			const result = this.$store.getters.isAuthenticated
			return result
		},
		email : function() {
			if(!this.isAuth) return null
			const result = this.$store.getters.getEmail
			return result
		}
    },
    methods : {
		logout() {
            this.$store.dispatch('logout');
        }
	}
})
</script>

<style lang="postcss" scoped>

.profile-drop-down {
	display: none;
	top : 125%;
	right : 0%;
}

.profile:hover > .profile-drop-down {
	display: flex;
}

.arrow-up {
  position: absolute;
  width: 0; 
  height: 0; 
  border-left: 1rem solid transparent;
  border-right: 1rem solid transparent;
  border-bottom: 1rem solid white;
  right : 7%;
  transform: translateY(-115%);
}
</style>