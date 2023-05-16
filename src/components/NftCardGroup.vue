<script setup lang="ts">
import NftCard from './NftCard.vue';

</script>

<template>
    <NftCard v-for="n in 10" :key="n" nft-name="Halil" :price="10"></NftCard>
</template>

<style></style>