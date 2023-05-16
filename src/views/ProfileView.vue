<script setup lang="ts">
import {reactive} from 'vue';
import Navbar from '@/components/Navbar.vue';
import ProfileCard from '@/components/ProfileCard.vue';
import WalletCard from '@/components/WalletCard.vue';

const btnGroupChoice = reactive({value: 0});



</script>

<template>
    <Navbar />
    <div class="container">
        <div class="mt-3 mb-1">
            <ProfileCard />
        </div>
        <WalletCard/>
    </div>
    <div class="row justify-content-center">
        <div class="col-auto">
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked
                    @click="btnGroupChoice.value = 0">
                <label class="btn btn-outline-primary" for="btnradio1">Owned NFTs</label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"
                    @click="btnGroupChoice.value = 1">
                <label class="btn btn-outline-primary" for="btnradio2">NFTs ON Market</label>
            </div>
        </div>
        <div class="mt-4">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<style></style>