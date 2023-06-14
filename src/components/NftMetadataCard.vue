<script setup lang="ts">

const props = defineProps<{
    nftMetadataName: string,
    nftMetadataPrice: string,
    nftMetadataId: string,
    nftMetadataImageUrl: string,
}>()

</script>

<template>
    <div class="card mx-1 ">
        <img :src="nftMetadataImageUrl" class="card-img-top" alt="...">
        <div class="card-body focus-ring">
            <h6 class="card-title">{{ nftMetadataName }}</h6>
            <div class="card-text">
                <h6>{{ nftMetadataId }}</h6>
            </div>

        </div>
    </div>
</template>