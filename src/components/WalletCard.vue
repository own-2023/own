<script setup lang="ts">


/*
const props = defineProps<{
    address: string,
    private_key: string,
    user_id: string,
}>()
*/
interface AccountInterface {
    address: string,
    private_key: string,
    user_id: string,
}
const props = defineProps<{
    account: any,
}>()


</script>



<template>
    <div class="row justify-content-center">
        <div class="col-lg-8">
            <h3 class="text-center">Account</h3>
            <div class="card mb-4">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Account Address</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">{{ account.address }}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Private Key</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">{{ account.private_key }}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Balance</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">{{ account.balance }}</p>
                        </div>
                    </div>


            </div>
        </div>
    </div>
    </div>
</template>


<style></style>

<script setup lang="ts">
</script>