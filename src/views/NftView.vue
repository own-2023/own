<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import type { AxiosResponse } from 'axios';
import useUsernameStore from '@/stores/usernameStore';
import useTokenStore from '@/stores/tokenStore';
import useUserIdStore from '@/stores/useridStore';
import router from '@/router';

const usernameStore = useUsernameStore()
const tokenStore = useTokenStore();
const userIdStore = useUserIdStore();

let nftName = reactive({ value: '' });
let nftImgSrc = reactive({ value: '' });
let nftPrice = reactive({ value: 0 });
let nftOwnerUsername = reactive({ value: '' });
let onSaleMessage = reactive({ value: 'Not On Sale', color: 'red' })
let isOnSale = reactive({ value: false });
let isMinted = reactive({ value: false });
let displayOwnerOptions = reactive({ value: false });
let newNftPrice = reactive({ value: 0 });
const route = useRoute();

async function setPrice() {
    try {
        let response = await axios.put(`http://127.0.0.1:4000/nfts/${route.params.nftId}/set-price/${newNftPrice.value}`);
        if (response.status === 200) {
            nftPrice.value = response.data['price'] 
        }
    }
    catch (err) {
        console.log(err);
    }
}


async function putOnSale() {
    try {
        let response = await axios.put(`http://127.0.0.1:4000/nfts/${route.params.nftId}/put-on-sale`);
        if (response.status === 200) {
            onSaleMessage.value = 'On Sale';
            onSaleMessage.color = '#00e600';
            isOnSale.value = true;
        }
    }
    catch (err) {
        console.error(err);
    }
}

async function buy() {
    console.log(userIdStore.getUserId)
    try {
        let response = await axios.post(`http://127.0.0.1:4000/nfts/buy/${route.params.nftId}`, { buyerId: userIdStore.getUserId }, { headers: { Authorization: `Bearer ${tokenStore.getToken}` } });
        if(response.status === 200){
            router.go(0)
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
        isMinted.value = response.data['isMinted'];
        isOnSale.value = response.data['isNftOnSale'] as boolean;
        
        if (nftOwnerUsername.value === usernameStore.getUsername.value) {
            displayOwnerOptions.value = true;
        }
        else {
            displayOwnerOptions.value = false;
        }

        if (isOnSale.value === true) {
            onSaleMessage.value = 'On Sale';
            onSaleMessage.color = '#00e600';
        }
        else {
            onSaleMessage.value = 'Not On Sale';
            onSaleMessage.color = 'red';
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
            <h5 v-if="isMinted.value">Minted</h5>
            <h6 :color="onSaleMessage.color" v-if="displayOwnerOptions.value">{{ onSaleMessage.value }}</h6>
            <button type="button" class="btn btn-primary mb-3"
                v-if="tokenStore.isAuthenticated && !displayOwnerOptions.value" @click="buy">Buy</button>
            <button class="btn btn-primary mb-3" href="#" role="button" v-if="displayOwnerOptions.value"
                @click="setPrice">Set Price</button>
            <div class="form-floating mb-3" v-if="displayOwnerOptions.value">
                <input type="number" class="form-control mb-3" id="floatingInput" placeholder="0" v-model="newNftPrice.value">
                <label for="floatingInput">Price</label>
                <button class="btn btn-primary mt-3" href="#" role="button" v-if="displayOwnerOptions.value"
                    @click="putOnSale">Put On Sale</button>
            </div>
        </div>
    </div>
</template>

<style></style>