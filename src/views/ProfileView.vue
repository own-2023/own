<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import Navbar from '@/components/Navbar.vue';
import ProfileCard from '@/components/ProfileCard.vue';
import WalletCard from '@/components/WalletCard.vue';
import NftCardGroup from '@/components/NftCardGroup.vue';
import axios from 'axios';
import useTokenStore from '@/stores/tokenStore';
import type { UserLazyMintNftDto, AccountDto } from '@/types/types';





const tokenStore = useTokenStore();
const nfts = reactive({ value: [] });
let account: AccountDto = reactive<AccountDto>({
    address: '',
    private_key: '',
    user_id: '',
    balance: '',
  });
let userNfts = reactive<UserLazyMintNftDto[]>([]);


onMounted(async () => {
  const authToken = tokenStore.getToken.value;

  try {
    const [nftsResponse, accountResponse, userNftsResponse]:any = await Promise.all([
      axios.get('http://127.0.0.1:4000/nfts/get-user-nfts', {
        headers: { Authorization: `Bearer ${authToken}` },
      }),
      axios.get('http://127.0.0.1:4000/ethereum/get-account', {
        headers: { Authorization: `Bearer ${authToken}` },
      }),
      axios.get('http://127.0.0.1:4000/nfts/get-user-lazy-minted-nfts', {
        headers: { Authorization: `Bearer ${authToken}` },
      }),
    ]);

    const address = accountResponse.data.address;
    const balanceResponse = await axios.get(`http://127.0.0.1:4000/ethereum/get-balance/${address}`,{
          headers: { Authorization: `Bearer ${authToken}` },
        })

    const test = await   axios.get('http://127.0.0.1:4000/nfts/get-user-lazy-minted-nfts', {
        headers: { Authorization: `Bearer ${authToken}` },
      })

    nfts.value = nftsResponse.data;
    userNfts = userNftsResponse.data;
    account = accountResponse.data;
    account.balance = balanceResponse.data.balance;

    console.log(userNfts);

  } catch (error) {
    console.error('An error occurred:', error);
  }
});




</script>

<template>
    <Navbar />
    <div class="container">
        <div class="mt-3 mb-1">
            <ProfileCard  />
        </div>
        <WalletCard  v-bind:account="account"> </WalletCard>
    </div>
    <div class="row justify-content-center">
        <div class="mt-4 mb-4">
            <h3 class="text-center">Owned Nfts</h3>
            <NftCardGroup :nfts=nfts.value></NftCardGroup>
        </div>
    </div>
</template>

<style></style>