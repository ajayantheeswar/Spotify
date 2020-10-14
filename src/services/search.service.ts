import axiosInstance from '@/axios/interceptor';

export const getGeneralResults = (term: any) => axiosInstance.get('/player/search/general/'+term)
export const getSearchAlbumResults = (term: string,page=1) => axiosInstance.get('/player/search/album/'+term,{
    params : {
        page
    }
})