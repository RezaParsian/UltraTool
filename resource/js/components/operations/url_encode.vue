<template>
  <div>
    Url Encode
  </div>
</template>

<script>
export default {
  name: "url_encode",
  methods: {
    encrypt(str) {
      return encodeURI(str);
    }
  }
}
</script>

<style scoped>

</style>