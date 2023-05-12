<script setup lang="ts">
import useUsernameStore from '@/stores/usernameStore';
import useEmailStore from '@/stores/emailStore';

const emailStore = useEmailStore();
const usernameStore = useUsernameStore();
</script>

<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="card mb-4">
                <div class="card-body text-center">
                    <h5 class="my-3">{{ usernameStore.getUsername }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>