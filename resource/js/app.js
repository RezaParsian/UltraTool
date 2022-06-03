window.$ = window.jQuery = require("jquery");
const Vue = require("vue").default;

require("./custom");

Vue.component("app", require("./components/UltraTool").default);
Vue.component("loading", require("./components/loading").default);

export const bus = new Vue();

const app = new Vue({
    el: "#ultra_tool"
});