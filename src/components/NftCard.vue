<script setup lang="ts">

const props = defineProps<{
    nftName: string,
    price: number,
    nftId: string,
    nftImageUrl: string,
}>()
</script>

<template>
    <div class="card mx-1 ">
        <img :src="nftImageUrl" class="card-img-top" alt="...">
        <div class="card-body focus-ring">
            <h6 class="card-title">{{ nftName }}</h6>
            <h6 class="card-text">{{ price }} ETH</h6>
            <RouterLink :to="`/nft/${nftId}`"   class="stretched-link"></RouterLink>
        </div>
    </div>
</template>

<style></style>