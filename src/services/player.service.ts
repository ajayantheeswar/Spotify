import axiosInstance from '@/axios/interceptor';

export const getLanguages = () => axiosInstance.get('/player/get-languages')

export const getAlbumsByLanguageID = (id: string,limit: any,skip: any)=> axiosInstance.get('/player/get-album-by-language/'+id,{
    params : {
        limit : limit,
        skip : skip
    }
})

export const getAlbumByID = (id: string) => axiosInstance.get('/player/get-album-by-id/'+id)