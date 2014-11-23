define(['../vendor/flight/lib/component'], function(defineComponent) {

    /**
     * This UI component handles the actions to add a new product item to a shopping cart
     *
     * @constructor
     */
    var UiOrderItem = function() {
        'use strict';

        this.attributes({
            quantitySelector: null,
            productSelector: null,
            productsTemplate: null
        });

        /**
         * Event handler that updates the DOM with the products information
         *
         * @param {Object} event
         * @param {Object} data
         */
        this.refreshProductsOptions = function(event, data) {
            this
                .select('productSelector')
                .html(this.attr.productsTemplate.render({products: data.products}));
        };

        /**
         * Event handler that takes a product's information from the DOM and notifies that a product has been added
         *
         * @param {Object} event
         */
        this.addItem = function (event) {
            event.preventDefault();

            this.trigger('ui.whenProductIsAdded', {
                productId: this.select('productSelector').val(),
                quantity: this.select('quantitySelector').val()
            });
        };

        this.after('initialize', function () {
            this.on(document, 'data.whenProductsAreLoaded', this.refreshProductsOptions);
            this.on('submit', this.addItem);
        });
    };

    return defineComponent(UiOrderItem);
});

