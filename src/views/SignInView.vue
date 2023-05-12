<template>
    <div id="signIn">

        <div class="container mt-5">
            <GoBack></GoBack>
            <div id="sign-in-row" class="row justify-content-center align-items-center">
                <div id="sign-in-column" class="col-md-6">
                    <div id="sign-in-box" class="col-md-12">
                        <form id="sign-in-form" class="form" action="" method="post">
                            <h3 class="text-center  text-primary mb-3">Own</h3>
                            <AlertMessage :error-message="errorMessage.value" v-if="displayErrorMessage" />
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                                    v-model="email.value">
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                                    v-model="password.value">
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div class="form-group mt-3">

                                <input type="submit" name="sign-in" class="btn btn-primary btn-md" value="Sign In">
                            </div>
                            <div id="register-link" class="text-right mt-3 text-primary">
                                <RouterLink to="/sign-up" class="btn btn-primary">Register here</RouterLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import AlertMessage from '@/components/AlertMessage.vue';
import GoBack from '@/components/GoBack.vue';
import useTokenStore from '@/stores/tokenStore';
import axios, { AxiosError } from 'axios';
import { reactive } from 'vue';

let email = reactive({ value: '' });
let password = reactive({ value: '' });
let errorMessage = reactive({ value: '' });
let displayErrorMessage = reactive({ value: false });

async function signUp() {
    displayErrorMessage.value = false;
    try {
        const response = await axios.post('http://127.0.0.1:3000/auth/sign-in', { email, password })
        const tokenStore = useTokenStore();
        tokenStore.setToken(response.data['token']);
    }
    catch (error) {
        if (error instanceof AxiosError) {
            errorMessage.value = error.response?.data['error'];
            displayErrorMessage.value = true;
        }
    }



}
</script>

<style></style>