<template>
  <div class="border-0 border-b border-solid border-orange-200 p-2">
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