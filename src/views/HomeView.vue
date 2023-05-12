<template>
    <Navbar></Navbar>
</template>

<script setup lang="ts">
import useTokenStore from '@/stores/tokenStore';
import Navbar from './../components/Navbar.vue'
import useUsernameStore from '@/stores/usernameStore';

const tokenStorage = useTokenStore()
const usernameStorage = useUsernameStore()
</script>

<style></style>