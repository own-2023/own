import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const useUserIdStore = defineStore('userId', () => {
    const userId = ref('')
    const getUserId = computed(() => userId.value);

    function setUserId(value: string) {
        userId.value = value;
    }


    return { getUserId, setUserId }

})

export default useUserIdStore;