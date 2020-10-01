import axiosInstance from '@/axios/interceptor';

export const getLanguages = () => axiosInstance.get('/player/get-languages')

export const getAlbumsByLanguageID = (id: string,limit: any,skip: any)=> axiosInstance.get('/player/get-album-by-language/'+id,{
    params : {
        limit : limit,
        skip : skip
    }
})

export const getAlbumByID = (id: string) => axiosInstance.get('/player/get-album-by-id/'+id)


// Playlist Methods


export const getPlaylistOfUser = () => axiosInstance.get('/player/get-user-playlist')

export const createPlaylist = (name: string) => axiosInstance.post('/player/create-playlist',{
    name : name
})

export const addMusicToplayList = (trackID: string,playlistID: string) => axiosInstance.post('/player/add-track-to-playlist',{
    trackID : trackID,
    playlistID : playlistID
})

export const removeMusicFromplayList = (trackID: string,playlistID: string) => axiosInstance.post('/player/remove-track-from-playlist',{
    trackID : trackID,
    playlistID : playlistID
})


export const getPlaylistByID = (playlistID: string) => axiosInstance.get('/player/get-playListByID/'+playlistID)

export const deletePlaylist = (playlistID: string) => axiosInstance.post('/player/delete-playlist/',{
    playlistID : playlistID
})