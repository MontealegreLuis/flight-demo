define(function (require) {
    'use strict';

    /* third party dependencies */
    var $ = require('jquery');
    var view = require('twig');

    /* Components */
    var DataOrderItem = require('component/DataOrderItem');
    var UiOrderItem = require('component/UiOrderItem');
    var UiShoppingCart = require('component/UiShoppingCart');

    /** Application modules */
    var ShoppingCart = require('store/ShoppingCart');
    var ProductsCatalog = require('store/ProductsCatalog');

    var Page = function() {

        /**
         * Module's initialization method
         */
        this.init = function() {
            var catalog = new ProductsCatalog();
            var cart = new ShoppingCart();

            view.twig({href: '/js/templates/products.html.twig', async: false, id: 'products'});
            view.twig({href: '/js/templates/item.html.twig', async: false, id: 'item'});
            view.twig({href: '/js/templates/cart-total.html.twig', async: false, id: 'total'});

            catalog.load({xhr: $, url: '/products'});

            /* UI components */
            UiShoppingCart.attachTo('#items-table', {
                tableBodySelector: 'tbody',
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
            DataOrderItem.attachTo(document, {
                catalog: catalog,
                cart: cart
            });
        }
    };

    /**
     * Module exports
     */
    return Page;
});
