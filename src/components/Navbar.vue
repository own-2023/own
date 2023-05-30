<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container-fluid">
            <div class="navbar-brand">
                <RouterLink to="/"><img width="70" height="70" src="@/assets/own-logo-navbar.png" alt="" /></RouterLink>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              </ul>

                <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink to="/sign-in" class="nav-link text-white" role="button"
                            v-if="!tokenStore.isAuthenticated">Sign In</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/sign-up" class="nav-link text-white" role="button"
                            v-if="!tokenStore.isAuthenticated">Sign Up</RouterLink>
                    </li>
                    <li class="nav-fill">
                        <RouterLink to="/profile" class="nav-link text-white" role="button"
                            v-if="tokenStore.isAuthenticated">Profile</RouterLink>
                    </li>
                    <li class="nav-fill">
                        <RouterLink to="/nft-upload" class="nav-link text-white" role="button"
                            v-if="tokenStore.isAuthenticated">Upload NFT</RouterLink>
                    </li>

                    <li class="nav-fill">
                        <a href="" class="nav-link text-white" role="button" v-if="tokenStore.isAuthenticated"
                            @click="resetStores()">Sign Out</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { resetStores } from '@/stores/resetStores';
import useTokenStore from '@/stores/tokenStore';
const tokenStore = useTokenStore();
</script>


<style scoped></style>