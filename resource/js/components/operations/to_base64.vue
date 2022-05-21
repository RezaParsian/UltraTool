<template>
  <div class="border-0 border-b border-solid border-orange-200 p-2">
    To Base64
  </div>
</template>

<script>
export default {
  name: "to_base64",
  methods:{
    encrypt(str) {
      return btoa(str);
    }
  }
}
</script>

<style scoped>

</style>