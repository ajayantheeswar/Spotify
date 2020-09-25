import axiosInstance from '@/axios/interceptor';

export const getProfile = () => axiosInstance.get('/profile/account-overview')

export const updateProfile = (updatedData: any) => axiosInstance.patch('/profile/edit-profile',updatedData)

export const changePassword = (passwordData: any) => axiosInstance.put('/profile/change-password',passwordData)

export const checkPasswordchangePrivilage = () => axiosInstance.get('/profile/check-change-password-privilage')
