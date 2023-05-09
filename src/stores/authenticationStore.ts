import {defineStore} from 'pinia'
import { computed, ref } from 'vue'

export const useAuthenticatedStore = defineStore('authentication',() => {
    const authentication = ref(false)

    const isAuthenticated = computed(() => authentication.value)
    function setAuthenticated(value: boolean){
        authentication.value = value;
    }

    return {authentication, isAuthenticated, setAuthenticated}

})