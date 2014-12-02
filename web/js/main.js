'use strict';

requirejs.config({
    baseUrl: '/js',
    paths: {
        'jquery': 'vendor/jquery/dist/jquery.min',
        'twig': 'vendor/twig.js/twig.min',
        'flight': 'vendor/flight',
        'component': '/js/src/component',
        'page': '/js/src/page',
        'store': '/js/src/store'
    }
});

require([
        'flight/lib/compose',
        'flight/lib/registry',
        'flight/lib/advice',
    ],
    function (compose, registry, advice) {
        compose.mixin(registry, [advice.withAdvice]);

        require(['page/ShoppingCartPage'], function (ShoppingCartPage) {
            var page = new ShoppingCartPage();

            page.init();
        });
    }
);
