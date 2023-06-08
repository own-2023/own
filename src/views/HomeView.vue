<script setup lang="ts">
import NftCardGroup from '@/components/NftCardGroup.vue';
import Navbar from './../components/Navbar.vue'
import axios from 'axios';
import { onMounted, reactive } from 'vue';


class Nfts {
    constructor(){
        this.nfts = []
    }

    public nfts: {nftImageUrl:string, nftName:string, nftPrice: number, nftId: string}[]
}

const nfts = new Nfts();


onMounted(async () => {
    const nftsRespose = await axios.get('http://127.0.0.1/nfts/get-all-nfts');
    console.log(nftsRespose.data);
    nfts.nfts = nftsRespose.data;
})

</script>



<template>
    <Navbar></Navbar>
    <NftCardGroup :nfts=nfts.nfts></NftCardGroup>
</template>



<style></style>
