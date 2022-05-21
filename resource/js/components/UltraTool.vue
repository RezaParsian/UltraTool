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
      <div class="border-0 h-[98vh] overflow-auto border-r border-solid border-orange-200">
        <div class="grid grid-cols-3 h-max border-0 border-b border-solid border-orange-200">
          <h4 class="pl-1 m-0">Operations</h4>
        </div>
        <p class="cursor-pointer p-2 m-0 hover:bg-gray-700 border-0 border-b border-solid border-orange-200" @click="addToRecipe" :data-id="operation.id" v-for="operation of operations">{{ operation.name }}</p>
      </div>

      <div class="border-0 border-r border-solid border-orange-200 h-[98vh] overflow-auto">
        <div class="grid grid-cols-3 h-max border-0 border-b border-solid border-orange-200">
          <h4 class="pl-1 m-0">Recipe</h4>
        </div>
        <span v-for="(item,index) in recipe" @click="removeFromRecipe" :data-id="item+index">
          <component :is="item" :key="item+index" :ref="item+index" class="cursor-pointer hover:bg-gray-700"/>
        </span>
      </div>

      <div class="col-span-2">
        <div class="grid">
          <div class="grid grid-cols-3">
            <h4 class="pl-1 m-0">Input</h4>
            <div class="gird gird rows-2 text-center">
              <p class="text-xs m-0">length: {{ length }}</p>
              <p class="text-xs m-0">lines: {{ lines }}</p>
            </div>
          </div>
          <div class="grid h-[40.35vh]">
            <textarea name="input" id="input" class="grid-span-12 resize-none focus:outline-none" v-model="input"></textarea>
          </div>
        </div>

        <div class="gird">
          <div class="grid grid-cols-3">
            <h4 class="pl-1 m-0">Output</h4>
          </div>
          <div class="grid h-[48vh]">
            <textarea name="input" id="input" class="grid-span-12 resize-none focus:outline-none" v-model="output" readonly=""></textarea>
          </div>
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
      input: "",
      output: "",
      operations: [
        {
          id: 1,
          name: "URL Decode",
          component: "url_decode"
        },
        {
          id: 2,
          name: "URL Encode",
          component: "url_encode"
        },
        {
          id: 3,
          name: "To Base64",
          component: "to_base64"
        },
        {
          id: 4,
          name: "From Base64",
          component: "from_base64"
        }
      ],
      recipe: [],
    }
  },
  watch: {
    input() {
      this.$nextTick(() => {
        let temp = this.input;

        this.recipe.map((item, index) => {
          const ref = item + index;
          temp = this.$refs[ref][0].encrypt(temp);
        });

        this.output = temp;
      });
    }
  },
  methods: {
    addToRecipe(element) {
      const id = +element.target.dataset.id;
      this.recipe.push(this.operations.find((operation) => operation.id === id).component);
    },
    removeFromRecipe(element) {
      const id = element.target.parentElement.dataset.id;
      this.recipe.splice(this.recipe.indexOf(id), 1);
    }
  },
}
</script>

<style scoped>

</style>