<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';



let nftName: string;
let nftImgSrc: string;
let nftPrice: string;
let nftOwnerUsername: string;

</script>



<template>
    <Navbar />
    <div class="row justify-content-center m-5">
        <div class="col-4 border border-2 text-center">
            <img src="@/assets/160x160 (7).png" class="img-fluid">
            <h2>Knife1</h2>
            <h4>Owned by Halil</h4>
            <h5>50ETH</h5>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Arcu odio ut sem nulla. Eu scelerisque felis imperdiet proin fermentum leo. Faucibus
                nisl tincidunt eget nullam non nisi.
            </p>
            <button type="button" class="btn btn-primary mb-3">Buy</button>
        </div>
    </div>
</template>

<style></style>