<script setup lang="ts">
const props = defineProps({
    errorMessage: String
})
</script>


<template>
    <div id="sign-up-row" class="col-6 justify-content-center align-items-center">
        <div class="alert alert-danger" role="alert">
            {{ props.errorMessage }}
        </div>
    </div>
</template>

<style></style>