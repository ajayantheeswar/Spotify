import { EmailSignInDTO, EmailSignUpDTO } from '@/models/Auth.model';
import * as authService from '@/services/auth.service';

import router from '@/router/index';

export const state = function () {
    return {
        user : null,
        error : null,
        loading : false
    };
}


export const mutations = {
    setUser (state: any, payload: any) {
        state.user = payload
      },
    setLoading (state: any, payload: any) {
        state.loading = payload
    },
    setError (state: any, payload: any) {
        state.error = payload
    },
    clearError (state: any) {
        state.error = null
    }
}

export const actions = {
    signUpWithEmail({commit}: any, payload: EmailSignUpDTO): any {
        commit('setLoading', true);
        commit('clearError');
        console.log('api called')
        authService.signUpWithEmail(payload,({data}: any) => {
            commit('setLoading', false)
            if(data.success){
                commit('setUser',{
                    name : data.name,
                    email : data.email
                })
            }
        },(error: any) => {
            commit('setLoading', false)
            if (error.response) {
                /* console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers); */
                commit('setError', error.response.data.error)
            }else{
                // The Error on Client Side
                commit('setError', error.message)
                console.log(error)
            }
        })
    },
    signInWithEmail({commit}: any, payload: EmailSignInDTO): any {
        commit('setLoading', true);
        commit('clearError');
        authService.signInWithEmail(payload,({data}: any) => {
            commit('setLoading', false)
            if(data.success){
                commit('setUser',{
                    name : data.name,
                    email : data.email
                })
            }
        },(error: any) => {
            commit('setLoading', false)
            if (error.response) {
                /* console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers); */
                commit('setError', error.response.data.error)
            }else{
                // The Error on Client Side
                commit('setError', error.message)
                console.log(error)
            }           
        })
    },
    changeUserEmail({commit,state}: any, payload: any) {
        commit('setUser',{
            ...state.user,
            ...payload
        });
    },
    logout({commit,state}: any, payload: any) {
        authService.signOut(({data}: any) => {
            commit('setLoading', false)
            commit('setUser',null)
            router.push('/signin')
        },(error: any) => {
            commit('setLoading', false)
            if (error.response) {
                /* console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers); */
                commit('setError', error.response.data.error)
            }else{
                // The Error on Client Side
                commit('setError', error.message)
                console.log(error)
            }
            commit('setUser',null)
            router.push('/signin')           
        })
        commit('setUser',null);
    },

    checkAuthOnLoading ({commit,state}: any,cb: any) {
        commit('setLoading', true);
        commit('clearError');
        authService.checkAuth
            .then(({data}: any) => {
                commit('setLoading', false)
                if(data.isAuth){
                    commit('setUser',{
                        name : data.name,
                        email : data.email
                    })
                }else{
                    commit('setUser',null)
                }
                cb(true) // mounted Callback to load the page
            })
            .catch(error => {
                commit('setLoading', false)
                if (error.response) {
                    commit('setError', error.response.data.error)
                }else{
                    commit('setError', error.message)
                    console.log(error)
                }
                commit('setUser',null)
                cb(false) // mounted Callback to load the page
            })
    }

}

export const getters = {
    isAuthenticated(state: any) {
        return !!state.user
    },
    getUserName (state: any) {
        return state.user ? state.user.name : 'default ajay'
    },
    getError (state: any){
        return state.error
    },
    getEmail (state: any) {
        return state.user ? state.user.email : null
    },
}

const AuthModule = {
    state,
    mutations,
    actions,
    getters
}

export default AuthModule;