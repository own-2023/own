<script setup lang="ts">
import useUsernameStore from '@/stores/usernameStore';
import useEmailStore from '@/stores/emailStore';
import Navbar from '@/components/Navbar.vue';
import ProfileCard from '@/components/ProfileCard.vue';
import router from '@/router';



</script>

<template>
    <Navbar />
    <div class="container">
            <div class="mt-3 mb-1">
                <ProfileCard />
            </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-auto">
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked
                    @click="router.push({ name: 'wallet' })">
                <label class="btn btn-outline-primary" for="btnradio1">Wallet</label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" @click="router.push({name: 'ownedNFTs'})">
                <label class="btn btn-outline-primary" for="btnradio2">Owned NFTs</label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" @click="router.push({name:'NFTsOnMarket'})">
                <label class="btn btn-outline-primary" for="btnradio3">NFTs on Market</label>
            </div>
        </div>
        <div class="mt-4">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<style></style>