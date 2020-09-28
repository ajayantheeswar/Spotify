<template>
    
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0 pt-2">
        <label
            class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            for="grid-state"
        >
            {{ labelName }}
        </label>
        <div class="relative">
            <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                v-model="value"
                @input="valueChanged"
            >
                <option v-for="(item,index) in valueList" :key="item.id" :value="index" :selected="index==0">{{ item[keyName] }}</option>
            </select>
            <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
                <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                </svg>
            </div>
        </div>
    </div>
            
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

    props:['labelName','valueList','keyName'],

    data() {
        return {
            value : 0
        }
    },


    methods:{
        valueChanged (e: any) {
            const item = this.valueList[e.target.value]
            this.$emit('input',item)
        }
    }
})
</script>

<style lang="postcss" scoped>

</style>