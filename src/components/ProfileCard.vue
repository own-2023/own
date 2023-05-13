<script setup lang="ts">
import useEmailStore from '@/stores/emailStore';
import useUsernameStore from '@/stores/usernameStore';


const emailStore = useEmailStore();
const usernameStore = useUsernameStore();



</script>


<template>
    <div class="row justify-content-center">
        <div class="col-lg-8">
            <div class="card mb-4">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Username</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">{{ usernameStore.getUsername.value }}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Email</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">{{ emailStore.getEmail.value }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>