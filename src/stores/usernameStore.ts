import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useUsernameStore = defineStore('username', () => {
    const username = ref('');
    const getUsername = computed(() => username);
    function setUsername(value: string) {
        username.value = value;
    }

    return { setUsername, getUsername }
})

export default useUsernameStore;