<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/Navbar.vue'
import  useTokenStore from '@/stores/tokenStore'

const authenticationStore = useTokenStore();

</script>

<template>
     <RouterView></RouterView>
</template>

<style scoped></style>
