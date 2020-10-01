import router from '@/router/index';

export const state = function () {
    return {
        srcList : [] as any,
        isPlaying : false
    };
}

export const mutations = {
    setSource (state: any,payload: any){
        state.srcList = payload
    },
    setPlayStatus(state: any,payload: any){
        state.isPlaying = payload
    }
}

export const actions = {
    
}

export const getters = {
}

const PlayerModule = {
    state,
    mutations,
    actions,
    getters
}

export default PlayerModule;