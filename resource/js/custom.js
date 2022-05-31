const {default: Vue} = require("vue");

Vue.directive("title", (e, binding) => {
    const $element = $("#tooltip");

    $(e).mouseover((mouse) => {
        const left = mouse.pageX;
        const top = mouse.pageY;

        $element.css({
            left: left,
            top: top
        }).text(binding.value).show();
    });

    $(e).mouseleave(() => {
        $element.css({
            left: -1000,
            top: -1000
        }).hide(250);
    });
});