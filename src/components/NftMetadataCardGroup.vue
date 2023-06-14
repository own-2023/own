<script setup lang="ts">
import NftMetadataCard from './NftMetadataCard.vue';

const props = defineProps<{
    nftMetadatas: Array<{
        nftMetadataName: string,
        nftMetadataPrice: string,
        nftMetadataId: string,
        nftMetadataImageUrl: string,
    }>
}>()


</script>

<template>
    <div class="row row-cols-6 justify-content-center mt-3 g-5">
        <NftMetadataCard v-for="(nftMetadata, index) in props.nftMetadatas" :key="index"
            :nft-metadata-name="nftMetadata.nftMetadataName" :nft-metadata-id="nftMetadata.nftMetadataId"
            :nft-metadata-price="nftMetadata.nftMetadataPrice" :nft-metadata-image-url="nftMetadata.nftMetadataImageUrl">
        </NftMetadataCard>
    </div>
</template>

<style></style>