<template>
    <div id="signUp">

        <div class="container mt-5">
            <GoBack></GoBack>
            <div id="sign-up-row" class="row justify-content-center align-items-center">
                <div id="sign-up-column" class="col-md-6">
                    <div id="sign-up-box" class="col-md-12">
                        <form id="sign-up-form" class="form" action="" method="post">
                            <h3 class="text-center  text-primary mb-3">Sign In</h3>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
                                <label for="floatingInput">Username</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingEmailInput" placeholder="name@example.com">
                                <label for="floatingEmailInput">Email address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="floatingPasswordInput" placeholder="name@example.com">
                                <label for="floatingPasswordInput">Password</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="floatingPasswordRepeatInput" placeholder="name@example.com">
                                <label for="floatingPasswordRepeatInput">Repeat password</label>
                            </div>
                            <div class="form-group mt-3">
                                <input type="submit" name="Sign-Up" class="btn btn-primary btn-md" value="Sign Up">
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