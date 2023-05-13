<script setup lang="ts">
import useUsernameStore from '@/stores/usernameStore';
import useEmailStore from '@/stores/emailStore';
import Navbar from '@/components/Navbar.vue';

const emailStore = useEmailStore();
const usernameStore = useUsernameStore();
</script>

<template>
    <Navbar />
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 mt-5 mb-4">
                <div class="card">
                    <div class="card-body text-center">
                        <h5 class="my-3">{{ usernameStore.getUsername.value }}</h5>
                        <h5 class="my-3">{{ emailStore.getEmail.value }}</h5>
                    </div>
                </div>
                
            </div>
            <div class="row justify-content-center">
                    <div class="col-auto">
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                            <label class="btn btn-outline-primary" for="btnradio1">Wallet</label>
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btnradio2">Owned NFTs</label>
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btnradio3">NFTs on Market</label>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<style></style>