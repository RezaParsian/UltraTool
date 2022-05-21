window.$ = window.jQuery = require("jquery");
const Vue = require("vue").default;

require("./custom");

Vue.component("app", require("./components/UltraTool").default);
Vue.component("loading", require("./components/loading").default);
Vue.component("url_decode", require("./components/operations/url_decode").default);
Vue.component("url_encode", require("./components/operations/url_encode").default);
Vue.component("to_base64", require("./components/operations/to_base64").default);
Vue.component("from_base64", require("./components/operations/from_base64").default);

const app = new Vue({
    el: "#ultra_tool"
});