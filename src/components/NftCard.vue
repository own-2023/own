<script setup lang="ts">

const props = defineProps<{
    nftName: String,
    price: Number,
    nftId: Number,
}>()

</script>

<template>
    <div class="card mx-1 ">
        <img src="@/assets/160x160 (7).png" class="card-img-top" alt="...">
        <div class="card-body focus-ring">
            <h6 class="card-title">{{ nftName }}</h6>
            <p class="card-text">{{ price }}</p>
            <RouterLink :to="`/nft/${nftId}`" class="stretched-link"></RouterLink>
        </div>
    </div>
</template>

<style></style>