<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import Navbar from '@/components/Navbar.vue';
import ProfileCard from '@/components/ProfileCard.vue';
import WalletCard from '@/components/WalletCard.vue';
import NftCardGroup from '@/components/NftCardGroup.vue';
import NftMetadataCardGroup from '@/components/NftMetadataCardGroup.vue';
import axios from 'axios';
import useTokenStore from '@/stores/tokenStore';
import useUserIdStore from '@/stores/useridStore';
import type { UserLazyMintNftDto, AccountDto } from '@/types/types';
import { inject } from 'vue'




const blockchainBaseUrl = inject('blockchain_base_url');

const tokenStore = useTokenStore();
const userIdStore = useUserIdStore();
let nfts = reactive({ value: [] });
let account = reactive({ value: { address: "", private_key: "", user_id: "", balance: "" } });

let nftMetadatas = reactive({ value: [] })
let displayOwnedNfts = reactive({ value: true });
let displayNftMetadatas = reactive({ value: false });



onMounted(async () => {

    const [nftsReponse, accountResponse, nftMetadatasResponse] = await Promise.all([
        axios.get(`http://127.0.0.1:4000/nfts/get-user-nfts`, { headers: { Authorization: `Bearer ${tokenStore.getToken}` } }),
        axios.get(`http://127.0.0.1:4000/ethereum/get-account`, { headers: { Authorization: `Bearer ${tokenStore.getToken}` } }),
        axios.get(`http://127.0.0.1:4000/ipfs/get-users-nft-metadatas`, { headers: { Authorization: `Bearer ${tokenStore.getToken}` } }),
    ]);
    const balanceResponse = await axios.get(`http://127.0.0.1:4000/ethereum/get-balance/${accountResponse.data.address}`, { headers: { Authorization: `Bearer ${tokenStore.getToken}` } });
    nftMetadatas.value = nftMetadatasResponse.data;
    console.log(nftMetadatas)
    nfts.value = nftsReponse.data;
    account.value.private_key = accountResponse.data.private_key;
    account.value.address = accountResponse.data.address;
    account.value.balance = balanceResponse.data.balance;
})


function setDisplayOwnedNfts(){
    displayOwnedNfts.value = true;
    displayNftMetadatas.value = false;
}
function setDisplayNftMetadatas(){
    displayNftMetadatas.value = true;
    displayOwnedNfts.value = false;
}
</script>

<template>
    <Navbar />
    <div class="container">
        <div class="mt-3 mb-1">
            <ProfileCard />
        </div>
        <WalletCard v-bind:account="account.value"> </WalletCard>
    </div>
    <div class="row m-5">
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-outline-primary w-25"
                @click="setDisplayOwnedNfts">Owned Nfts</button>
            <button type="button" class="btn btn-outline-primary w-25"
                @click="setDisplayNftMetadatas">Nft Metadatas</button>
        </div>
    </div>
    <div class="row align-content-center">
        <div class="mt-4 mb-4">
            <NftCardGroup :nfts=nfts.value v-if="displayOwnedNfts.value"></NftCardGroup>
            <NftMetadataCardGroup :nft-metadatas="nftMetadatas.value" v-if="displayNftMetadatas.value"></NftMetadataCardGroup>
        </div>
    </div>
</template>

<style></style>