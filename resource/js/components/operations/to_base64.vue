<template>
  <div>
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