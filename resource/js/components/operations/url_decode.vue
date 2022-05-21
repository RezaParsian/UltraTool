<template>
  <div class="border-0 border-b border-solid border-orange-200 p-2">
    Url Decode
  </div>
</template>

<script>
export default {
  name: "url_decode",
  methods:{
    encrypt(str) {
      return decodeURI(str);
    }
  }
}
</script>

<style scoped>

</style>