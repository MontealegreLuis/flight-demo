define(['../vendor/flight/lib/component'], function(defineComponent) {

    /**
     * This UI component updates the DOM when products are added or removed from the shopping cart.
     *
     * @constructor
     */
    var UiShoppingCart = function() {
        'use strict';

        this.attributes({
            totalSelector: null,
            tableBodySelector: null,
            itemTemplate: null,
            totalTemplate: null
        });

        /**
         * Event handler that updates the DOM when a product is added to the DOM
         *
         * @param {Object} event
         * @param {Object} data
         */
        this.appendProduct = function (event, data) {
            this.select('tableBodySelector').append(this.attr.itemTemplate.render({item: data.item}));
        }

        /**
         * Event handler that updates the DOM with the current cart's total.
         *
         * @param {Object} event
         * @param {Object} data
         */
        this.updateTotal = function (event, data) {
            this.select('totalSelector').html(this.attr.totalTemplate.render({cart: data.cart}));
        }

        this.after('initialize', function() {
            this.on(document, 'data.whenItemIsAddedToCart', this.appendProduct);
            this.on(document, 'data.whenCartTotalHasChanged', this.updateTotal);
        });
    };

    return defineComponent(UiShoppingCart);
});
