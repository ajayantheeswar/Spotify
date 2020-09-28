<template>
    <div class="p-4 border rounded-lg relative">
        <p class="x-mark font-bold rounded-full cursor-pointer" @click="Xclicked">X</p>
        <div class="flex items-center">
            <h2 class="font-bold text-2xl capitalize">{{TrackFile.trackName}}</h2>
        </div>
        <div class="flex items-end">
            <SelectComponent @input="currentArtist=$event" :valueList="artistList" keyName="artist_name"/>
            <button class="p-2 font-bold pr-4 pl-4 rounded bg-spgreen" @click.prevent="addArtist">Add</button>
            <ul class="flex m-4 space-x-4 ">
                <p v-for="(artist,index) in currentList" :key="index" @click.prevent="removeSong(index)">{{ artist }}</p>
            </ul>
        </div>
        <div class="mt-5">
            <SelectComponent @input="TrackFile.gerne=$event.id" labelName="gerne" :valueList="gerneList" keyName="gerne_name" />
        </div>
        
    </div>
          
</template>

<script lang="ts">
import Vue from 'vue'
import SelectComponent from '../selectComponent/SelectComponent.vue'
export default Vue.extend({

    data() {
        return {
            currentArtist : this.artistList.length > 0 ? this.artistList[0] : null,
            currentGerne : this.gerneList.length > 0 ? this.gerneList[0] : null,
            currentList:  this.TrackFile.artists.filter((track: any) => track[this.keyName])
        }
    },

    props:['TrackFile','artistList','keyName','trackClick','gerneList','index'],
    components : {
        SelectComponent
    },
    computed: {
       
    },
    methods :{
        removeSong(index: number){
            this.TrackFile.artists = this.TrackFile.artists.filter((t: any , i: number) => i !== index)
            this.currentList = this.currentList.filter((t: any , i: number) => i !== index)
        },
        addArtist() {
            this.TrackFile.artists.push(this.currentArtist.id)
            this.currentList.push(this.currentArtist[this.keyName])
        },
        Xclicked() {
            this.trackClick(this.TrackFile.trackName)
        }
    },
    mounted() {
        this.TrackFile.gerne = this.gerneList.length > 0 ? this.gerneList[0].id : null
       
    }, 

})
</script>

<style lang="postcss" scoped>
    .x-mark{
        position: absolute;
        left : 100%;
        bottom : 100%
    }
</style>