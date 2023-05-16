<script setup lang="ts">
import NftCard from './NftCard.vue';

</script>

<template>
     <div class="row row-cols-6 justify-content-center mt-3 g-5">
          <NftCard v-for="n in 10" :key="n" nft-name="Halil" :nft-id="50" :price="10"></NftCard>
     </div>
</template>

<style></style>