<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import type { AxiosResponse } from 'axios';
import useUsernameStore from '@/stores/usernameStore';

let nftName = reactive({ value: '' });
let nftImgSrc = reactive({ value: '' });
let nftPrice = reactive({ value: '' });
let nftOwnerUsername = reactive({ value: '' });
const route = useRoute();
let usernameStore = useUsernameStore();
let displayPutOnSale = reactive({value: false});


onMounted(async () => {
    console.log(route.params.nftId)
    let response: AxiosResponse<any, any>;
    try {
        response = await axios.get(`http://127.0.0.1:4000/nfts/${route.params.nftId}`);
        nftPrice.value = response.data['nftPrice']
        nftName.value = response.data['nftName'];
        nftImgSrc.value = response.data['nftUrl'];
        nftOwnerUsername.value = response.data['nftOwner']
    }
    catch (err) {
        console.log(err);
    }

})

</script>

<template>
    <Navbar />
    <div class="row justify-content-center m-5">
        <div class="col-4 border border-2 text-center">
            <img :src="nftImgSrc.value" class="img-fluid">
            <h2>{{ nftName.value }}</h2>
            <h4>Owned by {{ nftOwnerUsername.value }}</h4>
            <h5>{{ nftPrice.value }} ETH</h5>
            <button type="button" class="btn btn-primary mb-3" v-if="false">Buy</button>
            <button class="btn btn-primary mb-3" href="#" role="button" v-if="true">Put On Sale</button>
            
        </div>
    </div>
</template>

<style></style>