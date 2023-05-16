<template>
    <Navbar></Navbar>

    <div class="row row-cols-6 justify-content-center mt-3 g-5">
            <NftCardGroup></NftCardGroup>
    </div>
</template>

<script setup lang="ts">
import NftCardGroup from '@/components/NftCardGroup.vue';
import Navbar from './../components/Navbar.vue'
</script>

<style></style>
