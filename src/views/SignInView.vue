<template>
    <div id="signIn">

<div class="container mt-5">
    <GoBack></GoBack>
    <div id="login-row" class="row justify-content-center align-items-center">

        <div id="login-column" class="col-md-6">
            <div id="login-box" class="col-md-12">
                <form id="login-form" class="form" action="" method="post">
                    <h3 class="text-center  text-primary mb-3">Sign In</h3>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div class="form-group mt-3">

                        <input type="submit" name="sign-in" class="btn btn-primary btn-md" value="Sign In">
                    </div>
                    <div id="register-link" class="text-right mt-3 text-primary">
                        <a href="#" class="text-primary">Register here</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</div>
</template>


<script setup lang="ts">
import GoBack from '@/components/GoBack.vue';
</script>

<style></style>