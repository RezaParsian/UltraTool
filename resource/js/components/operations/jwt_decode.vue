<template>
    <div class="border-0 border-b border-solid border-orange-200 p-2">
        Jwt Decode
    </div>
</template>

<script>
import {bus} from "../../app";

export default {
    name: "jwt_decode",
    methods: {
        encrypt(str) {
            let jwt = str.split(".");
            const base64 = bus.methods.from_base64(jwt[1]);
            return bus.methods.json_beautify(base64);
        }
    }
}
</script>

<style scoped>

</style>