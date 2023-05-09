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
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                                <label for="floatingPassword">Password</label>
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


<script setup lang="ts"></script>

<style></style>