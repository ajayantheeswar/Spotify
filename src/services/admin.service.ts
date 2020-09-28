import axiosInstance from '@/axios/interceptor';

export const getPreValues = () => axiosInstance.get('/admin/get-pre-album')

export const createAlbumData = (formdata: any) => axiosInstance.post('/admin/create-album',formdata)