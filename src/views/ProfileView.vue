<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import Navbar from '@/components/Navbar.vue';
import ProfileCard from '@/components/ProfileCard.vue';
import WalletCard from '@/components/WalletCard.vue';
import NftCardGroup from '@/components/NftCardGroup.vue';
import axios from 'axios';
import useTokenStore from '@/stores/tokenStore';
import type { UserLazyMintNftDto, AccountDto } from '@/types/types';
import { inject } from 'vue'




const blockchainBaseUrl = inject('blockchain_base_url');

const tokenStore = useTokenStore();
let nfts = reactive({ value: [] });
let account = reactive({ value: { address: "", private_key: "", user_id: "", balance: "" } });



onMounted(async () => {

const [nftsReponse, accountResponse] = await Promise.all([
    axios.get(`${blockchainBaseUrl}/nfts/get-user-nfts`, { headers: { Authorization: `Bearer ${tokenStore.getToken}` } }),
    axios.get(`${blockchainBaseUrl}/ethereum/get-account`, { headers: { Authorization: `Bearer ${tokenStore.getToken}` } }),
]);
const balanceResponse = await axios.get(`${blockchainBaseUrl}/ethereum/get-balance/${accountResponse.data.address}`, { headers: { Authorization: `Bearer ${tokenStore.getToken}` } });
nfts.value = nftsReponse.data;
account.value.private_key = accountResponse.data.private_key;
account.value.address = accountResponse.data.address;
account.value.balance = balanceResponse.data.balance;
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