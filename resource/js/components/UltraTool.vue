<template>
  <div>
    <loading v-if="loading"/>
    <div class="grid grid-cols-3 border-solid border-0 border-b border-orange-200">
      <h1 class="text-center m-0 col-start-2 text-base">
        <i class="fa fa-wrench"></i>
        UltraTool
      </h1>
    </div>
    <div class="grid grid-cols-4">
      <div class="">1</div>
      <div class="">1</div>
      <div class="col-span-2">
        <div class="grid grid-rows-2">
          <div class="grid grid-rows2">
            <div class="grid grid-cols-3">
              <h4 class="m-0">Input</h4>
              <div class="gird gird rows-2">
                <p class="text-xs m-0">length: {{ length }}</p>
                <p class="text-xs m-0">lines: {{ lines }}</p>
              </div>
            </div>
            <div class="">1</div>
          </div>
          <div class="">2</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UltraTool",
  data() {
    return {
      loading: false,
      length: 0,
      lines: 1,
    }
  },
}
</script>

<style scoped>

</style>