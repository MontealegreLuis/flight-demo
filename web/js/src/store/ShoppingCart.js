define(['./OrderItem'], function(OrderItem) {

    /**
     * A shopping cart is composed by one or several product items, that a client wants to buy.
     *
     * @returns     {ShoppingCart}
     * @constructor
     */
    var ShoppingCart = function() {
        'use strict';

        var orderItems = [];

        /**
         * @param   {Object}    product
         * @param   {Float}     quantity
         * @returns {OrderItem}
         */
        this.addItem = function(product, quantity) {
            var item = new OrderItem(product, quantity);

            orderItems[item.productId()] = item;

            return item;
        }

        /**
         * @param {OrderItem} item
         */
        this.removeItem = function(item) {
            orderItems.splice(item.productId(), 1);
        }

        /**
         * It calculates the total price of all the product items
         *
         * @returns {Float}
         */
        this.total = function() {
            var index, total = 0;

            for (index in orderItems) {
                total += orderItems[index].total();
            }

            return total;
        }

        return this;
    };

    return ShoppingCart;
});
