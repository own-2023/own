<script setup lang="ts">
import NftCardGroup from '@/components/NftCardGroup.vue';
import Navbar from './../components/Navbar.vue'
import axios, { type AxiosResponse } from 'axios';
import { onMounted, reactive } from 'vue';




const nfts = reactive({data: []});


onMounted(async () => {
    let nftsRespose: AxiosResponse<any, any>;
    try {
        nftsRespose = await axios.get('http://127.0.0.1:4000/nfts/get-all-nfts');
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
