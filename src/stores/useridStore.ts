import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const useUserIdStore = defineStore('userId', () => {
    const userId = ref('')
    const getUserId = computed(() => userId);

    function setUserId(value: string) {
        userId.value = value;
    }


    return { userId, getUserId, setUserId }

})

export default useUserIdStore;