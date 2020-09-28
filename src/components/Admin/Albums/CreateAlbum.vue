<template>
    <div v-if="mounted">
        <form @submit.prevent="createAlbum" class="flex flex-col">
            <h2 class="font-bold text-xl pl-3">Create Album</h2>
            <div class="mt-2  ">
                <hr>
            </div>
            <section class="block lg:flex justify-evenly">
                <div class="mt-5 mb-5 w-1/3">
					<label class="block uppercase text-sm font-bold">Album Name</label>
					<input
                        placeholder="What is Album Name ?"
						:class="['border outline-none','block w-full p-2 pl-5 pr-5 rounded mt-2 text-black bg-gray-300']"
						v-model="entered.albumName"
					/>
				</div>
            </section>
            <section class="block lg:flex justify-evenly mb-5">
                <SelectComponent @input="entered.musicDirector=$event.id" labelName="music director" :valueList="fetched.artistList" keyName="artist_name"/>
                <SelectComponent @input="entered.gerne=$event.id" labelName="gerne" :valueList="fetched.gerneList" keyName="gerne_name" />
                <SelectComponent @input="entered.language=$event.id" labelName="language" :valueList="fetched.languageList" keyName="language" />
            </section>

            <section class="p-5 flex items-start">
                <label for="fileUpload" class="p-2 rounded-lg bg-spgreen1 font-bold mt-4">Upload Album Image</label>
                <input hidden id="fileUpload" @change="imageSelectHandler" type="file"/>
                <div v-if="imagepreview !== ''" class="ml-20 realtive">
                    <img :src="imagepreview" alt="preview" @click="clearImage" />
                </div>
            </section>
                

            <section class="p-5 flex items-start">
                <label for="musicUpload" class="p-2 rounded-lg bg-lightgrey3 font-bold mt-4">Upload Tracks</label>
                <input hidden id="musicUpload" @change="musicSelectHandler" multiple type="file"/>
            </section>
            <ul class='w-10/12 mx-auto space-y-12' >
                <TrackItem :trackClick="removeTrack"
                           v-for="(track,index) in entered.tracks"
                           :key="track.trackName" :TrackFile="track"
                           :artistList="fetched.artistList"
                           :gerneList="fetched.gerneList"
                           :index="index"
                           keyName="artist_name"/>
            </ul>
            <button class="bg-spgreen1 text-white p-2 pl-4 pr-4 rounded-lg mt-5">Create Album</button>
        </form>
    </div>    
</template>

<script lang="ts">
import Vue from 'vue';
import SelectComponent from './selectComponent/SelectComponent.vue';
import * as adminService from '@/services/admin.service';
import TrackItem from './TractItem/TrackItem.vue'

export default Vue.extend({

    components : {
        SelectComponent,
        TrackItem
    },
    data() {
        return {
            entered : {
                albumName : '',
                musicDirector : '',
                gerne : '',
                language : '',
                albumImage : null as unknown as Blob,
                tracks : [] as any[]
            },

            fetched : {
                artistList : null,
                gerneList : null, 
                languageList : null
            },
            mounted : false,
            loading : false,
            error : null,
            imagepreview : ''
        }
    },


    methods:{
        sumbitForm () {
            console.log('s')
        },
        getPredefinedValues (cb: any) {
            this.loading = true
            adminService.getPreValues()
                .then(({data}: any) => {
                    this.loading = false

                    this.fetched.artistList = data.artists;
                    this.fetched.languageList = data.languages;
                    this.fetched.gerneList = data.gernes

                    if(data.artists.length > 0 ){
                        this.entered.musicDirector = data.artists[0].id
                    }
                    if(data.languages.length > 0 ){
                        this.entered.language = data.languages[0].id
                    }
                    if(data.gernes.length > 0 ){
                        this.entered.gerne = data.gernes[0].id
                    }


                    cb()
                })
                .catch(err => {
                    this.loading = false;
                     if(err.response){
                        this.error = err.response.error;
                    }else{
                        this.error = err.message;
                    }
                    console.log(this.error);
                    cb()
                })
        },
        imageSelectHandler (event: any) {
            const file = event.target.files && event.target.files[0];
            this.entered.albumImage = file;
            console.log(file)
            const reader = new FileReader();
            reader.onload = (e) => {
                console.log(reader.result)
              this.imagepreview = reader.result as string;
            }
            if(file){
                reader.readAsDataURL(file);
            }
        },
        clearImage () {
            this.imagepreview = '';
            this.entered.albumImage = null as unknown as Blob
        },
        musicSelectHandler(event: any) {
            const files = event.target.files;
            const updatedFiles = [] as any[];
            files.forEach((file: any) => {
                const updatedFile = {
                    file : file,
                    trackName : file.name.split('.')[0],
                    artists : [] as string[],
                    gerne : ''
                };
                updatedFiles.push(updatedFile);
            })
            this.entered.tracks = updatedFiles
        },
        removeTrack(trackName: any){
            console.log('qwe')
            this.entered.tracks =this.entered.tracks.filter((t: any , i: number) => t.trackName !== trackName)
        },
        getStructuredDataForCreation() {
            
            const formData =  new FormData()
            const TrackFilesData = [] as any
            const TrackArtistList = [] as any

            formData.append('AlbumImage',this.entered.albumImage)

            this.entered.tracks
                .forEach((track: any) => {
                    TrackFilesData.push ({
                        'track_name' : track.trackName,
                        'gerne' : track.gerne
                    });
                    formData.append('track',track.file);
                    TrackArtistList.push(track.artists);
                }) 

            const data = {
                album : {
                    'album_name' : this.entered.albumName,
                    'music_director' : this.entered.musicDirector,
                    'language' : this.entered.language,
                },
                TrackFilesData,
                TrackArtistList 
            } as any

            formData.append('data',JSON.stringify(data));

            return formData
        },
        createAlbum(){
            this.loading =  true;
            const formdata = this.getStructuredDataForCreation()
            adminService.createAlbumData(formdata)
                .then(({data}: any) => {
                    this.loading =  false
                    console.log(data)
                } )
                .catch(err => {
                    this.loading = false
                    console.log(err)
                })
        }
    },

    mounted() {
        this.getPredefinedValues(() => {
            this.mounted = true
        })
    }
})
</script>

<style lang="postcss" scoped>

</style>