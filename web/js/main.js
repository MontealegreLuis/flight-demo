'use strict';

requirejs.config({
    baseUrl: '/js',
    paths: {
        'jquery': 'vendor/jquery/dist/jquery.min',
        'twig': 'vendor/twig.js/twig.min',
        'component': '/js/src/component',
        'page': '/js/src/page',
        'store': '/js/src/store'
    }
});

require([
        'vendor/flight/lib/compose',
        'vendor/flight/lib/registry',
        'vendor/flight/lib/advice',
    ],
    function (compose, registry, advice) {
        compose.mixin(registry, [advice.withAdvice]);

        require(['page/ShoppingCartPage'], function (ShoppingCartPage) {
            var page = new ShoppingCartPage();

            page.init();
        });
    }
);
