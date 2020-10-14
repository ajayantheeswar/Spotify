<template>
    <div class="flex items-center space-x-6 cursor-pointer album-details" @click="clicked">
        <div class="relative" style="width:55px;">
            <img style="min-width:55px;" class="inline-block" :src="track.image_url" />
            <div v-if="isPlaying" style="width:55px;" class="absolute z-10 bottom-0 left-0 opacity-25">
                <video autoplay loop muted inline src="@/assets/now_playing.mp4" />
            </div>
        </div>
        <div class="song-artist text-xs space-y-1" style="max-width:200px">
            <p class="text-sm truncate">{{ track.track_name }}</p>
            <div v-if="!isQueue" class="text-lightgrey1">
                <p v-for="artist in track.track_artist" :key="artist.id">{{ artist.artist.artist_name }}</p>
            </div>
            <div v-else class="text-lightgrey1">
                <p class="artist-names">{{ getArtistList }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: ['track','isQueue','isPlaying'],
    computed : {
        getArtistList () {
            const artistList = this.$props.track.track_artist.map((artist: any) => {
                return artist.artist.artist_name
            })
            return artistList.join(' , ')
        }
    },
    methods : {
        clicked() {
            this.$emit('clicked',this.$props.track.id)
        }
    }
})
</script>


<style lang="postcss" scoped>
    .artist-names{
        overflow-x: hidden;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width:200px;
    }

    .album-details{
        min-width : 250px;
    }
</style>