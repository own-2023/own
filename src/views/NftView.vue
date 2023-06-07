<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import type { AxiosResponse } from 'axios';
import useUsernameStore from '@/stores/usernameStore';
const usernameStore = useUsernameStore()

let nftName = reactive({ value: '' });
let nftImgSrc = reactive({ value: '' });
let nftPrice = reactive({ value: 0 });
let nftOwnerUsername = reactive({ value: '' });
let displayPutOnSale = reactive({ value: false });
let displaySuccessMessage = reactive({ value: false });
let displayFailureMessage = reactive({ value: false });
let displayOnSaleMessage = reactive({ value: false });
let displayOwnerOptions = reactive({ value: false });
let newNftPrice = reactive({ value: 0 });
let userUsername = '';
const route = useRoute();

async function setPrice() {
    displaySuccessMessage.value = false;
    displayFailureMessage.value = false;
    try {
        let response = await axios.put(`http://127.0.0.1:4000/nfts/${route.params.nftId}/set-price/${newNftPrice}`);
        if (response.status === 200) {
            nftPrice.value = response.data['price'];
            displaySuccessMessage.value = true;
            return;
        }
    }
    catch (err) {
        console.log(err);
    }
    displayFailureMessage.value = true;
}


onMounted(async () => {
    console.log(route.params.nftId)
    let response: AxiosResponse<any, any>;
    try {
        response = await axios.get(`http://127.0.0.1:4000/nfts/${route.params.nftId}`);
        nftPrice.value = response.data['nftPrice'];
        nftName.value = response.data['nftName'];
        nftImgSrc.value = response.data['nftUrl'];
        nftOwnerUsername.value = response.data['nftOwner'];
        if (nftOwnerUsername.value === usernameStore.getUsername.value) {
            displayOwnerOptions.value = true;
        }
    }
    catch (err) {
        console.log(err);
    }

    if (nftPrice.value == 0) {
        displayPutOnSale.value = true;
    }
    else {
        displayPutOnSale.value = false;
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
            <button class="btn btn-primary mb-3" href="#" role="button" v-if="true" @click="setPrice">Put On Sale</button>
            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="floatingInput" placeholder="0" v-model="newNftPrice">
                <label for="floatingInput">Price</label>
            </div>

        </div>
    </div>
</template>

<style></style>