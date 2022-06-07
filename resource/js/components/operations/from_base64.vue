<template>
  <div>
    From Base64
  </div>
</template>

<script>
export default {
  name: "from_base64",
  methods:{
    encrypt(str) {
      return atob(str);
    }
  }
}
</script>

<style scoped>

</style>