let mix = require('laravel-mix');

mix.js('resource/js/app.js', 'js').vue()
    .postCss('resource/css/app.css', 'css', [
        require('tailwindcss'),
    ]);

mix.setPublicPath('public');
