import axiosInstance from '@/axios/interceptor';

import { EmailSignUpDTO ,EmailSignInDTO} from '@/models/Auth.model';

export const signUpWithEmail = (userData: EmailSignUpDTO,successFunc: any,FailFunc: any) => {
    axiosInstance.post('/auth/sign-up-with-email',userData)
        .then(successFunc)
        .catch(FailFunc)
}

export const signInWithEmail = (userData: EmailSignInDTO,successFunc: any,FailFunc: any) => {
    axiosInstance.post('/auth/sign-in-with-email',userData)
        .then(successFunc)
        .catch(FailFunc)
}

export const signOut = (successFunc: any,FailFunc: any) => {
    axiosInstance.post('/auth/signout',)
        .then(successFunc)
        .catch(FailFunc)
}

export const checkAuth = axiosInstance.get('/auth/check-auth-status')