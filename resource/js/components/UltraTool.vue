<template>
    <div>
        <loading v-if="loading"/>
        <main class="flex flex-col h-screen">
            <div class="border-solid border border-orange-200">
                <h1 class="text-center text-sm">Ultra Tool</h1>
            </div>
            <div class="flex flex-1 overflow-hidden">
                <div class="flex flex-1">
                    <div class="flex w-72 flex-col border-0 border-l border-r border-solid border-orange-200">
                        <h4 class="m-0 h-8 px-1 border-0 border-b border-solid border-orange-200">Operations</h4>
                        <div class="flex-col flex flex-1 overflow-scroll">
                            <p class="cursor-pointer p-2 m-0 hover:bg-gray-700 select-none border-0 border-b border-solid border-orange-200" @click="addToRecipe" :data-id="operation.id" v-for="operation of operations">{{ operation.name }}</p>
                        </div>
                    </div>
                    <div class="flex w-96 flex-col border-0 border-r border-solid border-orange-200">
                        <div class="flex border-0 border-b border-solid border-orange-200">
                            <h4 class="m-0 h-8 px-1">Recipe️</h4>
                            <svg class="svg-icon my-auto ml-auto mr-2" viewBox="0 0 20 20" v-title="'Delete Recipes'" @click="recipe=[]">
                                <path d="M12.319,5.792L8.836,2.328C8.589,2.08,8.269,2.295,8.269,2.573v1.534C8.115,4.091,7.937,4.084,7.783,4.084c-2.592,0-4.7,2.097-4.7,4.676c0,1.749,0.968,3.337,2.528,4.146c0.352,0.194,0.651-0.257,0.424-0.529c-0.415-0.492-0.643-1.118-0.643-1.762c0-1.514,1.261-2.747,2.787-2.747c0.029,0,0.06,0,0.09,0.002v1.632c0,0.335,0.378,0.435,0.568,0.245l3.483-3.464C12.455,6.147,12.455,5.928,12.319,5.792 M8.938,8.67V7.554c0-0.411-0.528-0.377-0.781-0.377c-1.906,0-3.457,1.542-3.457,3.438c0,0.271,0.033,0.542,0.097,0.805C4.149,10.7,3.775,9.762,3.775,8.76c0-2.197,1.798-3.985,4.008-3.985c0.251,0,0.501,0.023,0.744,0.069c0.212,0.039,0.412-0.124,0.412-0.34v-1.1l2.646,2.633L8.938,8.67z M14.389,7.107c-0.34-0.18-0.662,0.244-0.424,0.529c0.416,0.493,0.644,1.118,0.644,1.762c0,1.515-1.272,2.747-2.798,2.747c-0.029,0-0.061,0-0.089-0.002v-1.631c0-0.354-0.382-0.419-0.558-0.246l-3.482,3.465c-0.136,0.136-0.136,0.355,0,0.49l3.482,3.465c0.189,0.186,0.568,0.096,0.568-0.245v-1.533c0.153,0.016,0.331,0.022,0.484,0.022c2.592,0,4.7-2.098,4.7-4.677C16.917,9.506,15.948,7.917,14.389,7.107 M12.217,15.238c-0.251,0-0.501-0.022-0.743-0.069c-0.212-0.039-0.411,0.125-0.411,0.341v1.101l-2.646-2.634l2.646-2.633v1.116c0,0.174,0.126,0.318,0.295,0.343c0.158,0.024,0.318,0.034,0.486,0.034c1.905,0,3.456-1.542,3.456-3.438c0-0.271-0.032-0.541-0.097-0.804c0.648,0.719,1.022,1.659,1.022,2.66C16.226,13.451,14.428,15.238,12.217,15.238"></path>
                            </svg>
                        </div>
                        <div class="flex-col flex flex-1 overflow-scroll">
                            <span class="flex cursor-pointer hover:bg-gray-700 border-0 border-b border-solid border-orange-200 p-2" v-for="(item,index) in recipe" @click="removeFromRecipe" :data-id="item.name+index"
                                  :class="!item.is_active ? 'hover:bg-red-500/90 bg-red-500' : ''">
                                <component :is="item.component" :key="item.name+index" :ref="item.name+index" @click.stop></component>
                                <svg class="svg-icon my-auto ml-auto" viewBox="0 0 20 20" @click.self="pauseItem" :data-id="index" @click.stop>
                                   <path fill="none"
                                         d="M13.304,5.008L9.653,7.036H6.485c-0.24,0-0.435,0.195-0.435,0.435v5.06c0,0.24,0.194,0.436,0.435,0.436h3.168l3.651,2.027c0.066,0.037,0.139,0.055,0.211,0.055c0.077,0,0.152-0.02,0.221-0.061c0.133-0.078,0.215-0.221,0.215-0.373V5.388c0-0.154-0.082-0.296-0.215-0.375C13.604,4.936,13.438,4.933,13.304,5.008z M13.08,13.874l-3.103-1.725c-0.064-0.035-0.138-0.055-0.212-0.055H6.92V7.905h2.845c0.074,0,0.147-0.019,0.212-0.055l3.103-1.723V13.874z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div class="flex flex-1 flex-col border-0 border-r border-solid border-orange-200">
                        <div class="grid grid-cols-3 h-8 border-0 border-b border-solid border-orange-200">
                            <h4 class="m-0 px-1 my-auto">Input</h4>
                            <div class="grid grid-rows-2 text-center">
                                <p class="text-xs m-0">length: {{ length }}</p>
                                <p class="text-xs m-0">lines: {{ lines }}</p>
                            </div>
                        </div>
                        <textarea name="input" id="input" class="flex-1 resize-none focus:outline-none" v-model="input"></textarea>
                        <h4 class="pl-1 m-0">Output</h4>
                        <textarea name="input" id="input" class="flex-1 resize-none focus:outline-none" readonly="" v-model="output"></textarea>
                    </div>
                </div>

            </div>
        </main>
    </div>
</template>

<script>
import {bus} from "../app";
import url_decode from "./operations/url_decode";
import url_encode from "./operations/url_encode";
import to_base64 from "./operations/to_base64";
import from_base64 from "./operations/from_base64";
import json_beautify from "./operations/json_beautify";
import jwt_decode from "./operations/jwt_decode";
import json_array from "./operations/json_array";

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
                    component: url_decode
                },
                {
                    id: 2,
                    name: "URL Encode",
                    component: url_encode
                },
                {
                    id: 3,
                    name: "To Base64",
                    component: to_base64
                },
                {
                    id: 4,
                    name: "From Base64",
                    component: from_base64
                },
                {
                    id: 5,
                    name: "Json Beautify",
                    component: json_beautify
                },
                {
                    id: 6,
                    name: "Jwt Decode",
                    component: jwt_decode
                },
                {
                    id: 7,
                    name: "Json To Array",
                    component: json_array
                },
            ],
            recipe: [],
        }
    },
    watch: {
        input() {
            this.encrypt();
            localStorage.setItem("input", this.input);
        },
        recipe: {
            deep: true,
            handler(val) {
                this.encrypt();
                localStorage.setItem("recipe", JSON.stringify(val.map((x) => {
                    return {
                        name: x.name,
                        is_active: x.is_active
                    }
                })));
            }
        },
    },
    methods: {
        pauseItem(element) {
            const id = element.target.dataset.id
            element.target.parentElement.classList.toggle("bg-red-500");
            element.target.parentElement.classList.toggle("hover:bg-red-500/90");
            this.recipe[id].is_active = !this.recipe[id].is_active;
        },
        encrypt() {
            this.$nextTick(() => {
                try {
                    let temp = this.input;

                    this.setLength();

                    this.recipe.filter((x) => x.is_active).map((item, index) => {
                        const ref = item.name + index;
                        temp = this.$refs[ref][0].encrypt(temp);
                    });

                    this.output = temp;
                }catch (e){
                    alert(e.message.replace("DOMException: ", ""));
                }
            });
        },
        addToRecipe(element) {
            const id = +element.target.dataset.id;
            this.recipe.push({
                name: this.operations.find((x) => x.id === id).name,
                component: this.operations.find((x) => x.id === id).component,
                is_active: true,
            });
        },
        removeFromRecipe(element) {
            const id = element.target.dataset.id;
            this.recipe.splice(this.recipe.indexOf(id), 1);
        },
        setLength() {
            this.length = this.input.trim().length;
            this.lines = this.input.trim().split("\n").length;
        },
        setBusMethods() {
            bus['methods'] = {};
            this.operations.map((operation) => {
                bus.methods[operation.component.name] = operation.component.methods.encrypt;
            });
        },
        getLocalStorage() {
            this.input = localStorage.getItem("input") || "";
            const recipe = localStorage.getItem("recipe") ? JSON.parse(localStorage.getItem("recipe")) : [];

            this.recipe = recipe.map((item) => {
                return {
                    component: this.operations.find((operation) => operation.name === item.name).component,
                    name: item.name,
                    is_active: item.is_active
                };
            });
        }
    },
    mounted() {
        window.vm = this;
        this.loading = true;

        this.setBusMethods();

        this.getLocalStorage();

        setTimeout(() => {
            this.loading = false;
        }, 1000);
    }
}
</script>

<style scoped>
.svg-icon {
    width: 1.5em;
    height: 1.5em;
    cursor: pointer;
}

.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
    fill: #4691f6;
}

.svg-icon circle {
    stroke: #4691f6;
    stroke-width: 1;
}
</style>