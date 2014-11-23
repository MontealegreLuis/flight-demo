define(['../vendor/flight/lib/component'], function(defineComponent) {

    /**
     * This data component takes information from the product catalog and updates the items in the shopping cart
     *
     * @constructor
     */
    var DataOrderItem = function() {
        'use strict';

        this.attributes({
            catalog: null,
            cart: null
        });

        /**
         * It gets the products information from the catalog and notifies that the products have been loaded
         */
        this.loadProducts = function() {
            this.trigger('data.whenProductsAreLoaded', {products: this.attr.catalog.allProducts()});
        };

        /**
         * Event handler tha takes a product item to add it to the cart, it also notifies that the product has been
         * added and that this action changes the cart's total amount.
         *
         * @param {Object} event
         * @param {Object} item
         */
        this.addItemToCart = function(event, item) {
            var productItem = this.attr.cart.addItem(this.attr.catalog.productOfId(item.productId), item.quantity);

            this.trigger('data.whenItemIsAddedToCart', {item: productItem});
            this.trigger('data.whenCartTotalHasChanged', {cart: this.attr.cart});
        };

        this.after('initialize', function () {
            this.on('ui.whenProductIsAdded', this.addItemToCart);
            this.loadProducts();
        });
    };

    return defineComponent(DataOrderItem);
});

