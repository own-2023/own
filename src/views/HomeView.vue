<script setup lang="ts">
import NftCardGroup from '@/components/NftCardGroup.vue';
import Navbar from './../components/Navbar.vue'


const nfts = [{
    nftImageUrl: '@/assets/160x160 (7).png',
    nftName: 'Knife1',
    nftPrice: 50,
    nftId: 23,
},
{
    nftImageUrl: '@/assets/160x160 (7).png',
    nftName: 'Knife2',
    nftPrice: 28,
    nftId: 3,
},
{
    nftImageUrl: '@/assets/160x160 (7).png',
    nftName: 'Knife3',
    nftPrice: 79,
    nftId: 78,
},
{
    nftImageUrl: '@/assets/160x160 (7).png',
    nftName: 'Knife1',
    nftPrice: 50,
    nftId: 23,
},
{
    nftImageUrl: '@/assets/160x160 (7).png',
    nftName: 'Knife2',
    nftPrice: 28,
    nftId: 3,
},
{
    nftImageUrl: '@/assets/160x160 (7).png',
    nftName: 'Knife3',
    nftPrice: 79,
    nftId: 78,
},
{
    nftImageUrl: '@/assets/160x160 (7).png',
    nftName: 'Knife1',
    nftPrice: 50,
    nftId: 23,
},
{
    nftImageUrl: '@/assets/160x160 (7).png',
    nftName: 'Knife2',
    nftPrice: 28,
    nftId: 3,
},
{
    nftImageUrl: '@/assets/160x160 (7).png',
    nftName: 'Knife3',
    nftPrice: 79,
    nftId: 78,
},
{
    nftImageUrl: '@/assets/160x160 (7).png',
    nftName: 'Knife1',
    nftPrice: 50,
    nftId: 23,
},
{
    nftImageUrl: '@/assets/160x160 (7).png',
    nftName: 'Knife2',
    nftPrice: 28,
    nftId: 3,
},
{
    nftImageUrl: '@/assets/160x160 (7).png',
    nftName: 'Knife3',
    nftPrice: 79,
    nftId: 78,
}]
</script>



<template>
    <Navbar></Navbar>
    <NftCardGroup :nfts=nfts></NftCardGroup>
</template>



<style></style>
