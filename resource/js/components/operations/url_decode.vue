<template>
  <div>
    Url Decode
  </div>
</template>

<script>
export default {
    name: "url_decode",
    methods: {
        encrypt(str) {
            return decodeURI(str);
        }
    }
}
</script>

<style scoped>

</style>