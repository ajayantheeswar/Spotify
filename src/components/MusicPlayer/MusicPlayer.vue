<template>
    <div v-show="srcList" class="w-full h-full m-0 bg-black flex items-space justify-between p-2 pl-8 pr-10 relative">
        <AlbumDetails v-if="srcList" :track="srcList[currentPlayingIndex]"  />
        <div class="flex flex-col items-center">
            <div class="flex space-x-4 items-center">
                <p class="time-duration">{{ fElapsedTime }}</p>
                <div class="relative progress">
                    <div class="overflow-hidden h-1 text-xs flex rounded bg-gray-200 cursor-pointer" @click="seekTrack">
                        <div ref="progressChild" :style=" {width: elapsedPercentage+'%'}" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-spgreen1"></div>
                    </div>
                </div>
                <p class="time-duration">{{ fTotalTime }}</p>   
            </div>
            <div class="flex items-center space-x-6 mt-2">
                <div @click="loop = !loop" class="cursor-pointer">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        :class="[!loop ? 'fill-white' : 'fill-green']" height="15px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                        <g>
                        <g>
                        <g>
                        <path d="M396.523,404.991l-113.137-69.999c-9.392-5.811-21.72-2.91-27.531,6.485c-5.812,9.393-2.908,21.719,6.484,27.53
                        l53.323,32.992H80c-22.056,0-40-17.944-40-40V106.002c0-11.046-8.954-20-20-20s-20,8.954-20,20v255.997
                        c0,44.112,35.888,79.999,80,79.999h235.663L262.34,474.99c-9.393,5.811-12.296,18.138-6.484,27.53
                        c5.84,9.439,18.177,12.271,27.531,6.485l113.137-69.999C409.249,431.135,409.026,412.725,396.523,404.991z"/>
                        <path d="M432,70.002H196.337L249.66,37.01c9.392-5.811,12.296-18.137,6.484-27.53c-5.812-9.395-18.138-12.296-27.531-6.485
                        l-113.136,70c-12.564,7.771-12.662,26.183,0,34.015l113.136,69.998c9.355,5.788,21.695,2.948,27.531-6.485
                        c5.812-9.392,2.909-21.719-6.484-27.53l-53.323-32.992H432c22.056,0,40,17.944,40,40v255.997c0,11.046,8.954,20,20,20
                        c11.046,0,20-8.954,20-20V150.001C512,105.89,476.112,70.002,432,70.002z"/>
                        </g>
                        </g>
                        </g>
                    </svg>
                </div>
                <div @click="prevTrack" class="cursor-pointer">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            class="fill-white" height="20px" viewBox="0 0 17.802 17.802" style="enable-background:new 0 0 17.802 17.802;" xml:space="preserve">

                            <g id="c92_stop">
                                <path d="M15.363,0.042c-0.139-0.07-0.303-0.051-0.424,0.043L4.163,8.587C4.069,8.664,4.01,8.78,4.01,8.9
                                    c0,0.119,0.059,0.24,0.153,0.314l10.776,8.502c0.071,0.057,0.162,0.086,0.249,0.086l0.175-0.039
                                    c0.139-0.064,0.225-0.207,0.225-0.361V0.403C15.588,0.249,15.502,0.107,15.363,0.042z"/>
                                <path d="M5.188,0.033H2.53c-0.172,0-0.315,0.182-0.315,0.401V17.37c0,0.221,0.143,0.403,0.315,0.403h2.657
                                    c0.174,0,0.315-0.183,0.315-0.403V0.434C5.503,0.215,5.361,0.033,5.188,0.033z"/>
                            </g>
                            <g id="Capa_1_264_">
                            </g>
                        </svg>
                </div>
                <button
                    @click="pausePlay" 
                    class="bg-spgreen outline-none w-10 rounded-full p-2 flex items-center justify-center font-bold">{{ !isPlayingNow ? '►' : '||' }}</button>
                <div @click="nextTrack" class="cursor-pointer">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    class="fill-white" height="20px" viewBox="0 0 306 306" style="enable-background:new 0 0 306 306;" xml:space="preserve">

                    <g id="skip-next">
                        <path d="M0,306l216.75-153L0,0V306z M255,0v306h51V0H255z"/>
                    </g>
                    </svg>
                </div>
                <div @click="shuffle = !shuffle" class="cursor-pointer">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        :class="[!shuffle ? 'fill-white' : 'fill-green']" height="15px" viewBox="0 0 477.88 477.88" style="enable-background:new 0 0 477.88 477.88;" xml:space="preserve">
                        <g>
                            <g>
                                <path d="M472.897,124.269c-0.01-0.01-0.02-0.02-0.03-0.031l-0.017,0.017l-68.267-68.267c-6.78-6.548-17.584-6.36-24.132,0.42
                                    c-6.388,6.614-6.388,17.099,0,23.713l39.151,39.151h-95.334c-65.948,0.075-119.391,53.518-119.467,119.467
                                    c-0.056,47.105-38.228,85.277-85.333,85.333h-102.4C7.641,324.072,0,331.713,0,341.139s7.641,17.067,17.067,17.067h102.4
                                    c65.948-0.075,119.391-53.518,119.467-119.467c0.056-47.105,38.228-85.277,85.333-85.333h95.334l-39.134,39.134
                                    c-6.78,6.548-6.968,17.353-0.419,24.132c6.548,6.78,17.353,6.968,24.132,0.419c0.142-0.137,0.282-0.277,0.419-0.419l68.267-68.267
                                    C479.54,141.748,479.553,130.942,472.897,124.269z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M472.897,329.069c-0.01-0.01-0.02-0.02-0.03-0.03l-0.017,0.017l-68.267-68.267c-6.78-6.548-17.584-6.36-24.132,0.42
                                    c-6.388,6.614-6.388,17.099,0,23.712l39.151,39.151h-95.334c-20.996,0.015-41.258-7.721-56.9-21.726
                                    c-7.081-6.222-17.864-5.525-24.086,1.555c-6.14,6.988-5.553,17.605,1.319,23.874c21.898,19.614,50.269,30.451,79.667,30.43h95.334
                                    l-39.134,39.134c-6.78,6.548-6.968,17.352-0.42,24.132c6.548,6.78,17.352,6.968,24.132,0.42c0.142-0.138,0.282-0.277,0.42-0.42
                                    l68.267-68.267C479.54,346.548,479.553,335.742,472.897,329.069z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M199.134,149.702c-21.898-19.614-50.269-30.451-79.667-30.43h-102.4C7.641,119.272,0,126.913,0,136.339
                                    c0,9.426,7.641,17.067,17.067,17.067h102.4c20.996-0.015,41.258,7.721,56.9,21.726c7.081,6.222,17.864,5.525,24.086-1.555
                                    C206.593,166.588,206.006,155.971,199.134,149.702z"/>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
        <div class="flex flex-row-reverse items-center justify-center space-x-4">
            <input class="rounded-lg overflow-hidden appearance-none bg-white h-1 w-100 outline-none m-3"
                    type="range" min="0.0" max="1.0" step="0.01" v-model="volume" />
            <div @click="showQueue = !showQueue" class="cursor-pointer">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    class="fill-white" height="20px" viewBox="0 0 60.123 60.123" style="enable-background:new 0 0 60.123 60.123;" xml:space="preserve">
                    <g>
                        <path d="M57.124,51.893H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,51.893,57.124,51.893z"/>
                        <path d="M57.124,33.062H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3
                            C60.124,31.719,58.781,33.062,57.124,33.062z"/>
                        <path d="M57.124,14.231H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,14.231,57.124,14.231z"/>
                        <circle cx="4.029" cy="11.463" r="4.029"/>
                        <circle cx="4.029" cy="30.062" r="4.029"/>
                        <circle cx="4.029" cy="48.661" r="4.029"/>
                    </g>
                </svg>
            </div> 
        </div>
        <transition name="slide">
            <TrackQueue
                v-show="showQueue" 
                :srcList="srcList"
                :currentPlayingIndex="currentPlayingIndex"
                />
        </transition>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import store from '@/store/index'

import {playerEventBus} from '@/main';
import AlbumDetails from './AlbumDetails/AlbumDetails.vue'

import shuffle from '@/utils/shuffle';

import TrackQueue from './TrackQueue/TrackQueue.vue'

export default Vue.extend({
    components : {
       AlbumDetails,
       TrackQueue
    },
    data() {
        return {
            audio : new Audio() as HTMLAudioElement,
            srcList : null as unknown as any,
            currentPlayingIndex : null as unknown as number,
            isPlayingNow : false,
            elapsedPercentage: 0,
            TotalTime : 0 as number,
            ElapsedTime : 0 as number,
            fTotalTime :  '0.00' as string,
            fElapsedTime: '0.00' as string,
            volume : 0.3 as number,
            loop : false as boolean,
            shuffle : false as boolean,
            showQueue : false as boolean
        }
    },
    watch : {
        volume(to) {
            this.audio.volume = !isNaN(to) ? to : 0.3
        }
    },
    methods : {
        pausePlay () {
            if(!this.audio.paused){
                this.audio.pause()
            }else{
                if(this.srcList && this.srcList.length > 0)
                    this.audio.play()
            }
        },
        nextTrack() {
            console.log('nextPressed')
            if(this.srcList){
                if(this.currentPlayingIndex + 1 < this.srcList.length){
                    if(this.isPlayingNow){
                        this.audio.pause()
                    }
                    this.elapsedPercentage = 0
                    this.audio.setAttribute('src',this.srcList[this.currentPlayingIndex+1].track_url)
                    this.currentPlayingIndex++;
                    this.audio.play()
                }else if(this.loop){
                    if(this.isPlayingNow){
                        this.audio.pause()
                    }
                    this.elapsedPercentage = 0
                    this.currentPlayingIndex = 0;
                    this.audio.setAttribute('src',this.srcList[0].track_url)
                    this.audio.play()
                }
            }
            
        },
        prevTrack() {
            console.log('prevPressed')
            if(this.srcList && (this.currentPlayingIndex - 1 >= 0) ){
                this.elapsedPercentage = 0
                if(this.isPlayingNow){
                    this.audio.pause()
                }
                this.audio.setAttribute('src',this.srcList[this.currentPlayingIndex-1].track_url)
                this.currentPlayingIndex--;
                this.audio.play()
            }
        },
        seekTrack(event: any){

            if(!this.isPlayingNow) return

            const baseElement = event.target !== this.$refs.progressChild ? event.target : event.target.parentNode
            
            const seekedPercentage =( event.offsetX / baseElement.offsetWidth) * 100
            console.log(seekedPercentage)
            
            const ToPositon = (seekedPercentage/100) * this.audio.duration;
            console.log(ToPositon)
            
            if(isNaN(ToPositon)) return
            
            this.audio.currentTime = ToPositon;
        },
        getFormattedTime(Time: number) {
            const hours = +(Time / 3600).toFixed(0);
            const minutes = +((Time - (hours*3600)) / 60).toFixed(0);
            const seconds = +(Time - (hours*3600) - (minutes*60)).toFixed(0);

            const timeArray = [] as string[]
            
            console.log(hours,minutes,seconds)

            if (hours > 0) hours < 10 ? timeArray.push("0"+hours) : timeArray.push(""+hours); 
            if (minutes < 10) timeArray.push("0"+minutes); else timeArray.push(""+minutes)
            if (seconds < 10) timeArray.push("0"+seconds); else timeArray.push(""+seconds);

            return timeArray.join(' : ')
        }
    },
    mounted(){
        this.audio.autoplay = false;
        this.audio.volume = this.volume
        
        this.audio.addEventListener('play',() => {
            this.isPlayingNow = true;
            console.log('play');
            this.TotalTime = this.audio.duration
        })
        this.audio.addEventListener('pause',() => {
            this.isPlayingNow = false;
            console.log('pause')
        })

        this.audio.addEventListener('ended',() => {
            this.nextTrack();
        })

        this.audio.addEventListener('canplay',()=> {
            const TotalTime = +this.audio.duration
            this.TotalTime = TotalTime
            this.fTotalTime = this.getFormattedTime(TotalTime)
        })

        this.audio.addEventListener('timeupdate',()=>{
            const elapsedPercentage = +(this.audio.currentTime/this.audio.duration) * 100;
            if(!isNaN(elapsedPercentage))
                this.elapsedPercentage = elapsedPercentage;
                const ElapsedTime = +this.audio.currentTime
                this.ElapsedTime = ElapsedTime
                this.fElapsedTime = this.getFormattedTime(ElapsedTime)
        })

        playerEventBus.$on('setTrackSource',({trackList,playnow,clickedTrack}: any)=>{
            if(!this.audio.paused){
                this.audio.pause()
            }
            this.isPlayingNow = false
            console.log(this.audio.src)
            let currentTrackindex = 0;
            if(clickedTrack){
              currentTrackindex = trackList.findIndex((track: any) => track.id === clickedTrack.id) ;
            }

            const TrackList = [...trackList]
            this.srcList = TrackList
            
            this.currentPlayingIndex = currentTrackindex

            this.audio.setAttribute('src',TrackList[currentTrackindex].track_url);
            if(playnow){
             this.audio.play()
            }
        })

        playerEventBus.$on('addToQueue',({trackList,playnow}: any) => {
            const TrackList = [...trackList]
            if(this.srcList) {
                TrackList.forEach ((track: any) => this.srcList.push(track))
            }else {
                const TrackList = [...trackList]
                this.srcList = TrackList;
                this.currentPlayingIndex = 0;
                this.audio.setAttribute('src',TrackList[0].track_url);
            }
        })

        playerEventBus.$on('addOneToQueue',({track,playnow}: any) => {
            if(this.srcList){
                this.srcList.push(track)
            }else{
                const newTrackList = [track]
                this.currentPlayingIndex = 0;
                this.srcList = newTrackList
                this.audio.setAttribute('src',track.track_url);
            }
        })

        playerEventBus.$on('ChangeQueueTrackWithID',({trackID}: any) => {
            if(this.srcList && (this.srcList[this.currentPlayingIndex].id !== trackID)){
                const TrackIndex = this.srcList.findIndex((track: any) => track.id === trackID)
                if(TrackIndex < 0) return 
                else {
                    if(this.isPlayingNow)
                        this.audio.pause()
                    this.currentPlayingIndex = TrackIndex;
                    this.audio.setAttribute('src',this.srcList[TrackIndex].track_url);
                    this.audio.play()
                }
            }
        })

    }
})
</script>


<style lang="postcss" scoped>
    .audio-tag{
        background: #000;
    }

    .progress{
        width : 550px;
    }
    

    .time-duration{
        font-size: 0.7rem;
    }

    @media screen and (-webkit-min-device-pixel-ratio: 0) {
     
        input[type="range"]::-webkit-slider-thumb {
            width: 15px;
            -webkit-appearance: none;
			appearance: none;
            height: 15px;
            cursor: ew-resize;
            background: #FFF;
            overflow: none;
            box-shadow: -405px 0 0 400px #1DB954;
            border-radius: 50%;
            
        }
    }

    .slide-enter-active {
        animation: slide-in .5s forwards;
    }

    .slide-leave-active {
        animation: slide-in .5s reverse;
    }

    @keyframes slide-in {
        0% {
           height : 100%;
        }
    }

   

</style>