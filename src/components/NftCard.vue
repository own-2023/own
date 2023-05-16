<script setup lang="ts">

const props = defineProps<{
    nftName: String,
    price: Number
}>()

</script>

<template>
    <div class="card mx-1">
        <img src="@/assets/160x160 (7).png" class="card-img-top"  alt="...">
        <div class="card-body">
            <h6 class="card-title">{{ nftName }}</h6>
            <p class="card-text">{{ price }}</p>
        </div>
    </div>
</template>

<style></style>