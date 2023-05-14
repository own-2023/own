<script setup lang="ts">
import GoBack from '@/components/GoBack.vue';
import { reactive } from 'vue';
import axios, { AxiosError } from 'axios';
import router from '@/router';
import useEmailStore from '@/stores/emailStore';
import useTokenStore from '@/stores/tokenStore';
import useUsernameStore from '@/stores/usernameStore';
import AlertMessage from '@/components/AlertMessage.vue';
import NavbarLogo from '@/components/NavbarLogo.vue';

async function signUp() {
    displayGeneralErrorMessage.value = false;
    if (password !== passwordRepeat) {
        passwordRepeatDisplayErrorMessage.value = true;
        return;
    }
    else {
        passwordRepeatDisplayErrorMessage.value = false;
    }

    try {
        const response = await axios.post('http://127.0.0.1:3000/auth/sign-up', { username, password, email });
        if (response.status == 204) {
            const emailStore = useEmailStore();
            const tokenStore = useTokenStore();
            const usernameStore = useUsernameStore();
            emailStore.setEmail(email);
            tokenStore.setToken(response.data['token']);
            usernameStore.setUsername(username);
            console.log(tokenStore.getToken)
            router.push('/');
        }
    }
    catch (err) {
        if (err instanceof AxiosError) {
            generalErrorMessage = err.response?.data['error'];
            displayGeneralErrorMessage.value = true;
        }
    }

}

let password: string;
let passwordRepeat: string;
let username: string;
let email: string;
let passwordRepeatErrorMessage = 'Please repeat password correctly';
let passwordRepeatDisplayErrorMessage = reactive({ value: false });
let generalErrorMessage = 'Error';
let displayGeneralErrorMessage = reactive({ value: false });

</script>




<template>
    <div id="signUp">
        <div class="container mt-5">
            <GoBack></GoBack>
            <NavbarLogo/>
            <div class="row justify-content-center">
                <div id="sign-up-column" class="justify-content-center col-md-6">
                    <div id="sign-up-box">
                        <form id="sign-up-form" class="form">
                            <AlertMessage :error-message="passwordRepeatErrorMessage"
                                v-if="passwordRepeatDisplayErrorMessage.value" />
                            <AlertMessage :error-message="generalErrorMessage" v-if="displayGeneralErrorMessage.value" />
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
                                    v-model="username" required>
                                <label for="floatingInput">Username</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingEmailInput"
                                    placeholder="name@example.com" v-model="email" required>
                                <label for="floatingEmailInput">Email address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="floatingPasswordInput"
                                    placeholder="name@example.com" v-model="password" required>
                                <label for="floatingPasswordInput">Password</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="floatingPasswordRepeatInput"
                                    placeholder="name@example.com" v-model="passwordRepeat" required>
                                <label for="floatingPasswordRepeatInput">Repeat password</label>
                            </div>
                            <div class="form-group mt-3">
                                <input type="submit" name="Sign-Up" class="btn btn-primary btn-md" value="Sign Up"
                                    @click="signUp">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style></style>