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


onMounted(async () => {
    const response = await axios.get(`http://127.0.0.1:4000/nfts/get-user-nfts`, { headers: { Authorization: `Bearer ${tokenStore.getToken.value}` } })
    nfts.value = response.data;
})

console.log(nfts);



</script>

<template>
    <Navbar />
    <div class="container">
        <div class="mt-3 mb-1">
            <ProfileCard />
        </div>
        <WalletCard />
    </div>
    <div class="row justify-content-center">
        <div class="mt-4 mb-4">
            <h3 class="text-center">Owned Nfts</h3>
            <NftCardGroup :nfts=nfts.value></NftCardGroup>
        </div>
    </div>
</template>

<style></style>