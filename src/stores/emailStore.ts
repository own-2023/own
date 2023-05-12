import {defineStore} from 'pinia'
import { computed, ref } from 'vue'

const useEmailStore = defineStore('email',() => {
    const email = ref('')
    const getEmail = computed(() => email);

    function setEmail(value: string){
        email.value = value;
    }

    function reset(){
        email.value = '';
    }

    return {email, getEmail, setEmail, reset}

})

export default useEmailStore;