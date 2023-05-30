<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import Navbar from '@/components/Navbar.vue';
import ProfileCard from '@/components/ProfileCard.vue';
import WalletCard from '@/components/WalletCard.vue';
import NftCardGroup from '@/components/NftCardGroup.vue';
import axios from 'axios';
import useTokenStore from '@/stores/tokenStore';


const tokenStore = useTokenStore();
let nfts = reactive({ value: [] });
let account = reactive({ value: { address: "",private_key: "", user_id: "", balance: ""} });



onMounted(async () => {
    const nftsReponse = await axios.get(`http://127.0.0.1:4000/nfts/get-user-nfts`, { headers: { Authorization: `Bearer ${tokenStore.getToken.value}` } })
    const accountResponse = await axios.get(`http://127.0.0.1:4000/ethereum/get-account` ,{ headers: { Authorization: `Bearer ${tokenStore.getToken.value}` } })
    const balanceResponse = await axios.get(`http://127.0.0.1:4000/ethereum/get-balance/${accountResponse.data.address}` ,{ headers: { Authorization: `Bearer ${tokenStore.getToken.value}` } })

    nfts.value = nftsReponse.data;
    account.value = accountResponse.data;
    account.value.balance = balanceResponse.data.balance;    

    //account.value.balance = balanceResponse.data.balance;
    console.log(account.value)
})




</script>

<template>
    <Navbar />
    <div class="container">
        <div class="mt-3 mb-1">
            <ProfileCard  />
        </div>
        <WalletCard  v-bind:account="account.value"> </WalletCard>
    </div>
    <div class="row justify-content-center">
        <div class="mt-4 mb-4">
            <h3 class="text-center">Owned Nfts</h3>
            <NftCardGroup :nfts=nfts.value></NftCardGroup>
        </div>
    </div>
</template>

<style></style>