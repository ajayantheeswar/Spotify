<template>
    <div class="w-full">
        <h1 class="text-3xl font-bold mb-6 lg:text-4xl">Account Overview</h1>
        <div class="mb-10 lg:mb-16">
            <h2 class="text-2xl font-bold pd-5">Profile</h2>
            <section class="w-full">
                <table class="w-full">
                    <tbody class="w-full">
                        <tr class="border-b border-gray-200">
                            <td class="w-1/2 pb-2 pt-3 text-lightgrey1">Username</td>
                            <td class="w-1/2 text-right md:text-left">{{'31ebm3elyrakxwmcs6n57oiuk2yu'}}</td>
                        </tr>
                         <tr class="border-b border-gray-200">
                            <td class="w-1/2 pb-2 pt-3 text-lightgrey1">Email</td>
                            <td class="w-1/2 text-right md:text-left">{{'ajaysiva2000@gmail.com'}}</td>
                        </tr>
                         <tr class="border-b border-gray-200">
                            <td class="w-1/2 pb-2 pt-3 text-lightgrey1">Date of birth</td>
                            <td class="w-1/2 text-right md:text-left">{{'June 26, 2000'}}</td>
                        </tr>
                         <tr class="border-b border-gray-200">
                            <td class="w-1/2 pb-2 pt-3 text-lightgrey1">Country</td>
                            <td class="w-1/2 text-right md:text-left">{{'India'}}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <router-link to='edit-profile' class="inline-block p-3 mt-4 pr-10 pl-10 border-2 border-black rounded-full hover:bg-black hover:text-white transition ease-in-out duration-200 scale-out">Edit Profile</router-link>
        </div>
        <div class="mb-10 lg:mb-16">
             <h2 class="text-2xl font-bold pd-3">Your plan</h2>
             <section class="mt-3">
                 <div class="bg-ground plan flex flex-col justify-center p-5 text-4xl font-bold">
                     <h1 class="text-white">{{'Spotify Free'}}</h1>
                 </div>
                 <div class="border p-5">
                     <p class="border-b pb-5">{{'Play any song, any time, with ads.'}}</p>
                     <h1 class="p-3 pl-0 font-bold">Free</h1>
                 </div>
             </section>
             <router-link to='edit-profile' class="inline-block p-3 mt-4 pr-10 pl-10 border-2 border-black rounded-full hover:text-white hover:bg-black transition ease-in-out duration-200 scale-out">Join Premium</router-link>
        </div>
    </div>    
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style lang="postcss" scoped>
    .bg-ground {
        background: linear-gradient(-180deg, rgb(182, 43, 190) 0%, rgb(150, 34, 185) 100%);
    }

    .plan {
        height: 200px;
    }

    .scale-out{
        transform : scale(1);
    }
    .scale-out:hover {
        transform : scale(1.05);
    }
</style>