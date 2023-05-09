<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/Navbar.vue'
import { useAuthenticatedStore} from '@/stores/authenticationStore'

const authenticationStore = useAuthenticatedStore();

</script>

<template>
     <RouterView></RouterView>
</template>

<style scoped></style>
