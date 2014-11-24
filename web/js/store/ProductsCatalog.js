define(function() {

    /**
     * A product catalog acts like a collection with all the available products that can be added to a shopping cart
     *
     * @returns     {ProductsCatalog}
     * @constructor
     */
    var ProductsCatalog = function() {
        'use strict';

        var products;

        /**
         * It retrieves all the available products from the server
         *
         * @param {Object} options
         */
        this.load = function(options) {
            var productsLoaded = options.callback || this.setProducts;

            options.request.ajax({
                url: options.url,
                dataType: 'json',
                async: false,
                success: productsLoaded
            });
        };

        /**
         * @param {Array} allProducts
         */
        this.setProducts = function(allProducts) {
            products = allProducts;
        };

        /**
         * @param   {String} id
         * @returns {Object}
         */
        this.productOfId = function(id) {
            var i;

            for (i in products) {
                if (products[i].productId == id) {
                    return products[i];
                }
            }
        };

        /**
         * @returns {Array}
         */
        this.allProducts = function() {
            return products;
        }

        return this;
    };

    return ProductsCatalog;
});
