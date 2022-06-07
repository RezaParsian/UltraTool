<template>
    <div>
        Json To Array
    </div>
</template>

<script>
import {bus} from "../../app";

export default {
    name: "json_array",
    methods: {
        encrypt(str) {
            const phpArray = {
                "{": "[",
                "}": "]",
                ":": "=>",
            };

            let json = bus.methods.json_beautify(str);

            for (let key in phpArray) {
                json = json.replace(new RegExp(key, "g"), phpArray[key]);
            }

            return json;
        }
    }
}
</script>

<style scoped>

</style>