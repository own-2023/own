<script setup lang="ts">
import NftCardGroup from '@/components/NftCardGroup.vue';
import Navbar from './../components/Navbar.vue'


const nfts = [{
    nftImageUrl: 'https://i.ibb.co/QMxG2pW/item.png',
    nftName: 'Knife1',
    nftPrice: 50,
    nftId: 23,
},
{
    nftImageUrl: 'https://i.ibb.co/QMxG2pW/item.png',
    nftName: 'Knife2',
    nftPrice: 28,
    nftId: 3,
},
{
    nftImageUrl: 'https://i.ibb.co/QMxG2pW/item.png',
    nftName: 'Knife3',
    nftPrice: 79,
    nftId: 78,
},
{
    nftImageUrl: 'https://i.ibb.co/QMxG2pW/item.png',
    nftName: 'Knife1',
    nftPrice: 50,
    nftId: 23,
},
{
    nftImageUrl: 'https://i.ibb.co/QMxG2pW/item.png',
    nftName: 'Knife2',
    nftPrice: 28,
    nftId: 3,
},
{
    nftImageUrl: 'https://i.ibb.co/QMxG2pW/item.png',
    nftName: 'Knife3',
    nftPrice: 79,
    nftId: 78,
},
{
    nftImageUrl: 'https://i.ibb.co/QMxG2pW/item.png',
    nftName: 'Knife1',
    nftPrice: 50,
    nftId: 23,
},
{
    nftImageUrl: 'https://i.ibb.co/QMxG2pW/item.png',
    nftName: 'Knife2',
    nftPrice: 28,
    nftId: 3,
},
{
    nftImageUrl: 'https://i.ibb.co/QMxG2pW/item.png',
    nftName: 'Knife3',
    nftPrice: 79,
    nftId: 78,
},
{
    nftImageUrl: 'https://i.ibb.co/QMxG2pW/item.png',
    nftName: 'Knife1',
    nftPrice: 50,
    nftId: 23,
},
{
    nftImageUrl: 'https://i.ibb.co/QMxG2pW/item.png',
    nftName: 'Knife2',
    nftPrice: 28,
    nftId: 3,
},
{
    nftImageUrl: 'https://i.ibb.co/QMxG2pW/item.png',
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
