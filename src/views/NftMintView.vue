
<script setup lang="ts">

import axios from 'axios';
import Navbar from '@/components/Navbar.vue';
import { reactive } from 'vue';


let nftImage: File;
let nftName: string;
let statusText = reactive({ status: 'Mint nft' });

async function onClick(event: MouseEvent) {
    const resData = await axios.post('http://127.0.0.1:3000/eth-transactions/picture', { 'nftImage': nftImage, 'nftName': nftName });
    statusText.status = resData.statusText;
}


function onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target && target.files) {
        nftImage = target.files[0];
    }
}


</script>

<template>
    <Navbar />
    <div class="app">
        <div class="container">
            <div class="row justify-content-center mt-5">
                <div class="col-8">
                    <div class="mb-3">
                        <label for="nftImage" class="form-label">NFT Image</label>
                        <input type="file" class="form-control" style="height: 100px;" @change="onChange">
                    </div>
                    <div class="mb-3">
                        <label for="nftName" class="form-label">NFT Name</label>
                        <input type="text" class="form-control" v-model="nftName">
                    </div>
                    <button type="submit" class="btn btn-primary" @click="onClick">Submit</button>
                    <div class="mt-3">
                        <p class="card">Result: {{ statusText.status }}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped></style>