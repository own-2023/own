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
let account = reactive({ value: { address: "", private_key: "", user_id: "", balance: "" } });



onMounted(async () => {
    console.log()



    const [nftsReponse, accountResponse] = await Promise.all([
        axios.get(`http://127.0.0.1:4000/nfts/get-user-nfts`, { headers: { Authorization: `Bearer ${tokenStore.getToken}` } }),
        axios.get(`http://127.0.0.1:4000/ethereum/get-account`, { headers: { Authorization: `Bearer ${tokenStore.getToken}` } }),
    ]);
    console.log(`http://127.0.0.1:4000/ethereum/get-balance/${accountResponse.data.address}`)
    const balanceResponse = await axios.get(`http://127.0.0.1:4000/ethereum/get-balance/${accountResponse.data.address}`, { headers: { Authorization: `Bearer ${tokenStore.getToken}` } });

    nfts.value = nftsReponse.data;
    account.value.private_key = accountResponse.data.private_key;
    account.value.address = accountResponse.data.address;
    account.value.balance = balanceResponse.data.balance;


    //account.value.balance = balanceResponse.data.balance;
    console.log(account.value)
})




</script>

<template>
    <Navbar />
    <div class="container">
        <div class="mt-3 mb-1">
            <ProfileCard />
        </div>
        <WalletCard v-bind:account="account.value"> </WalletCard>
    </div>
    <div class="row justify-content-center">
        <div class="mt-4 mb-4">
            <h3 class="text-center">Owned Nfts</h3>
            <NftCardGroup :nfts=nfts.value></NftCardGroup>
        </div>
    </div>
</template>

<style></style>