<script setup lang="ts">
import NftCard from './NftCard.vue';

const props = defineProps<{
     nfts: Array<{ nftImageUrl: string, nftName: string, nftPrice: number, nftId: number }>
}>()


</script>

<template>
     <div class="row row-cols-6 justify-content-center mt-3 g-5">
          <NftCard v-for="(nft, index) in props.nfts" :key="index" :nft-name="nft.nftName" :nft-id="nft.nftId"
               :price="nft.nftPrice" :nft-image-url="nft.nftImageUrl"></NftCard>
     </div>
</template>

<style></style>