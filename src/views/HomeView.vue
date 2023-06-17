<script setup lang="ts">
import NftCardGroup from '@/components/NftCardGroup.vue';
import Navbar from './../components/Navbar.vue'
import axios, { type AxiosResponse } from 'axios';
import { onMounted, reactive } from 'vue';
import { inject } from 'vue'



const nfts = reactive({data: []});
const blockchainBaseUrl = inject('blockchain_base_url');

onMounted(async () => {

    let nftsRespose: AxiosResponse<any, any>;
    try {
        nftsRespose = await axios.get(`${blockchainBaseUrl}/nfts/get-all-nfts`);
        console.log(nftsRespose.data);
        nfts.data = nftsRespose.data;
    }
    catch (err) {
        console.log(err);
    }
})

</script>


<template>
    <Navbar></Navbar>
    <NftCardGroup :nfts=nfts.data></NftCardGroup>
</template>



<style></style>
