define(function() {

    /**
     * An order item belongs to a shopping cart and it is composed by a product and the quantity of products to be
     * bought
     *
     * @param       {Object}    product
     * @param       {Float}     quantity
     * @returns     {OrderItem}
     * @constructor
     */
    var OrderItem = function(product, quantity) {
        'use strict';

        /**
         * @returns {String}
         */
        this.productId = function() {
            return product.productId;
        };

        /**
         * @returns {String}
         */
        this.productName = function() {
            return product.name;
        };

        /**
         * @returns {Float}
         */
        this.unitPrice = function() {
            return product.unitPrice;
        }

        /**
         * @returns {Integer}
         */
        this.quantity = function() {
            return quantity;
        }

        /**
         * It calculates the total to be paid for this item which is the product's unit price times the quantity
         *
         * @returns {number}
         */
        this.total = function() {
            return product.unitPrice * quantity;
        };

        return this;
    };

    return OrderItem;
});

