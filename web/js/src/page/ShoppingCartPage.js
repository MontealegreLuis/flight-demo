define([
    /* Third party dependencies */
    'jquery',
    'twig',
    /* Components */
    'component/DataShoppingCart',
    'component/UiOrderItem',
    'component/UiShoppingCart',
    /** Application modules */
    'store/ShoppingCart',
    'store/ProductsCatalog'
], function ($, view, DataShoppingCart, UiOrderItem, UiShoppingCart, ShoppingCart, ProductsCatalog) {
    'use strict';

    var ShoppingCartPage = function() {

        /**
         * Module's initialization method
         */
        this.init = function() {
            var catalog = new ProductsCatalog();
            var cart = new ShoppingCart();

            view.twig({href: '/js/src/templates/products.html.twig', async: false, id: 'products'});
            view.twig({href: '/js/src/templates/item.html.twig', async: false, id: 'item'});
            view.twig({href: '/js/src/templates/cart-total.html.twig', async: false, id: 'total'});

            catalog.load({request: $, url: '/products'});

            /* UI components */
            UiShoppingCart.attachTo('#items-table', {
                cartItemsSelector: 'tbody',
                totalSelector: '#cart-total',
                itemTemplate: view.twig({ref: 'item'}),
                totalTemplate: view.twig({ref: 'total'})
            });
            UiOrderItem.attachTo('#item-form', {
                quantitySelector: '#quantity',
                productSelector: '#product',
                productsTemplate: view.twig({ref: 'products'})
            });

            /* Data components */
            DataShoppingCart.attachTo(document, {
                catalog: catalog,
                cart: cart
            });
        }
    };

    /**
     * Module exports
     */
    return ShoppingCartPage;
});
