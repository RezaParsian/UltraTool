<template>
    <div class="border-0 border-b border-solid border-orange-200 p-2">
        Jwt Decode
    </div>
</template>

<script>
export default {
    name: "jwt_decode",
    methods: {
        encrypt(str) {
            let jwt = str.split(".");
            let result = "";

            const base64 = atob(jwt[1]);
            const json = JSON.parse(base64);
            return JSON.stringify(json, null, 4);
        }
    }
}
</script>

<style scoped>

</style>