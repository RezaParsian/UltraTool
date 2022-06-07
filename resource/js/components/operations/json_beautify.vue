<template>
    <div>
        Json Beautify
    </div>
</template>

<script>
export default {
    name: "json_beautify",
    methods: {
        encrypt(str) {
            const json = JSON.parse(str)
            return JSON.stringify(json, null, 4)
        }
    }
}
</script>

<style scoped>

</style>