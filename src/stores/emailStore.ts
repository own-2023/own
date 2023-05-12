import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const useEmailStore = defineStore('email', () => {
    const email = ref('')
    const getEmail = computed(() => email);

    function setEmail(value: string) {
        email.value = value;
    }


    return { email, getEmail, setEmail }

})

export default useEmailStore;