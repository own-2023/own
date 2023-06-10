<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import type { AxiosResponse } from 'axios';
import useUsernameStore from '@/stores/usernameStore';
import useTokenStore from '@/stores/tokenStore';
const usernameStore = useUsernameStore()
const tokenStore = useTokenStore();

let nftName = reactive({ value: '' });
let nftImgSrc = reactive({ value: '' });
let nftPrice = reactive({ value: 0 });
let nftOwnerUsername = reactive({ value: '' });
let onSaleMessage = reactive({ value: 'Not On Sale', color: 'red' })
let isOnSale = reactive({ value: false, message: 'Put On Sale' });

let displayOwnerOptions = reactive({ value: false });
let newNftPrice = reactive({ value: 0 });
const route = useRoute();

async function putOnSale() {
    try {
        let response = await axios.put(`http://127.0.0.1:4000/nfts/${route.params.nftId}/put-on-sale/${newNftPrice}`);
        if (response.status === 200) {
            nftPrice.value = response.data['price'];
            onSaleMessage.value = 'On Sale';
            onSaleMessage.color = '#00e600';
            isOnSale.message = 'Set Price'
            isOnSale.value = true;
        }
    }
    catch (err) {
        console.log(err);
    }
}


onMounted(async () => {
    let response: AxiosResponse<any, any>;
    try {
        response = await axios.get(`http://127.0.0.1:4000/nfts/${route.params.nftId}`);
        nftPrice.value = response.data['nftPrice'];
        nftName.value = response.data['nftName'];
        nftImgSrc.value = response.data['nftUrl'];
        nftOwnerUsername.value = response.data['nftOwner'];
        isOnSale.value = response.data['nftIsOnSale'] as boolean;
        if (nftOwnerUsername.value === usernameStore.getUsername.value) {
            displayOwnerOptions.value = true;
        }
        else {
            displayOwnerOptions.value = false;
        }

        if (isOnSale.value === true) {
            onSaleMessage.value = 'On Sale';
            onSaleMessage.color = '#00e600';
            isOnSale.message = 'Set Price'
        }
        else {
            onSaleMessage.value = 'Not On Sale';
            onSaleMessage.color = 'red';
            isOnSale.message = 'Put On Sale';
        }
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
            <h6 :color="onSaleMessage.color" v-if="displayOwnerOptions.value">{{ onSaleMessage.value }}</h6>
            <button type="button" class="btn btn-primary mb-3"
                v-if="tokenStore.isAuthenticated && !displayOwnerOptions.value">Buy</button>
            <button class="btn btn-primary mb-3" href="#" role="button" v-if="displayOwnerOptions.value"
                @click="putOnSale">{{ isOnSale.message }}</button>
            <div class="form-floating mb-3" v-if="displayOwnerOptions.value">
                <input type="number" class="form-control" id="floatingInput" placeholder="0" v-model="newNftPrice">
                <label for="floatingInput">Price</label>
            </div>
        </div>
    </div>
</template>

<style></style>