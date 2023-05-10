<script setup lang="ts">
import GoBack from '@/components/GoBack.vue';
import { reactive } from 'vue';
import axios from 'axios';

function signUp() {
    if(password !== passwordRepeat){
        displayErrorMessage.value = true;
        return;
    }
    axios.post('localhost:3000/sign-up', { username, password, email });
}

let password: string;
let passwordRepeat: string;
let username: string;
let email: string;
let errorMessage = 'Please repeat password correctly';
let displayErrorMessage = reactive({value: false});

</script>




<template>
    <div id="signUp">
        <div class="container mt-5">
            <GoBack></GoBack>
            <div id="sign-up-row" class="row justify-content-center align-items-center">
            <div class="alert alert-danger" role="alert" v-if="displayErrorMessage.value">
                {{ errorMessage }}
            </div>
            <div id="sign-up-column" class="col-md-6">
                <div id="sign-up-box" class="col-md-12">
                    
                        <form id="sign-up-form" class="form">
                            <h3 class="text-center  text-primary mb-3">Own</h3>
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
                                <input type="submit" name="Sign-Up" class="btn btn-primary btn-md" value="Sign Up" @click="signUp">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style></style>