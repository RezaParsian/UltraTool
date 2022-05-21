<template>
  <div class="border-0 border-b border-solid border-orange-200 p-2">
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