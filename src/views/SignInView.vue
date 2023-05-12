<script setup lang="ts">
import AlertMessage from '@/components/AlertMessage.vue';
import GoBack from '@/components/GoBack.vue';
import useTokenStore from '@/stores/tokenStore';
import useEmailStore from '@/stores/emailStore';
import useUsernameStore from '@/stores/usernameStore';
import axios, { AxiosError } from 'axios';
import { reactive } from 'vue';
import router from '@/router';

let email: string = ''
let password: string = ''
let errorMessage = reactive({value: ''});
let displayErrorMessage = reactive({ value: false });

async function signIn() {
    displayErrorMessage.value = false;

    try {
        const response = await axios.post('http://127.0.0.1:3000/auth/sign-in', { email, password });
        const tokenStore = useTokenStore();
        const userStore = useUsernameStore();
        const emailStore = useEmailStore();
        userStore.setUsername(response.data['username']);
        emailStore.setEmail(email);
        tokenStore.setToken(response.data['token']);
        router.push('/')
    }
    catch (error) {
        if (error instanceof AxiosError) {
            errorMessage = error.response?.data['error'];
            displayErrorMessage.value = true;
            return;
        }
    }


}
</script>


<template>
    <div id="signIn">

        <div class="container mt-5">
            <GoBack></GoBack>
            <div id="sign-in-row" class="row justify-content-center align-items-center">
                <div id="sign-in-column" class="col-md-6">
                    <div id="sign-in-box" class="col-md-12">
                        <h3 class="text-center  text-primary mb-3">Own</h3>
                        <AlertMessage :error-message="errorMessage.value" v-if="displayErrorMessage.value" />
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                                v-model="email">
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                                v-model="password">
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div class="form-group mt-3">

                            <input type="submit" name="sign-in" class="btn btn-primary btn-md" value="Sign In"
                                @click="signIn()">
                        </div>
                        <div id="register-link" class="text-right mt-3 text-primary">
                            <RouterLink to="/sign-up" class="btn btn-primary">Register here</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>




<style></style>