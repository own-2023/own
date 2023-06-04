<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import type { AxiosResponse } from 'axios';

let nftName = reactive({ value: '' });
let nftImgSrc = reactive({ value: '' });
let nftPrice = reactive({ value: '' });
let nftOwnerUsername = reactive({ value: '' });
const route = useRoute();



onMounted(async () => {
    let response: AxiosResponse<any, any>;
    try {
        response = await axios.get(`http://127.0.0.1:4000/nfts/${route.params.id}`)
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
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Arcu odio ut sem nulla. Eu scelerisque felis imperdiet proin fermentum leo. Faucibus
                nisl tincidunt eget nullam non nisi.
            </p>
            <button type="button" class="btn btn-primary mb-3">Buy</button>
        </div>
    </div>
</template>

<style></style>