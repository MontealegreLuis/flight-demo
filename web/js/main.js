'use strict';

require([
        'flight/lib/compose',
        'flight/lib/registry',
        'flight/lib/advice',
        'page/ShoppingCartPage'
    ],
    function (compose, registry, advice, ShoppingCartPage) {
        var page = new ShoppingCartPage();

        compose.mixin(registry, [advice.withAdvice]);
        page.init();
    }
);
