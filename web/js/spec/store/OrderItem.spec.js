define(['store/OrderItem'], function(OrderItem) {
    'use strict';

    var toString = function() {
        return 'price: ' + this.product.unitPrice + ', quantity: ' + this.quantity;
    };
    var totalToString = function() {
        return ' expecting total to be: ' + this.total;
    }

    describe('OrderItem', function () {
        using(
            'valid products',
            [
                [{product: {unitPrice: 2000}, quantity: 4, toString: toString}, {total: 8000, toString: totalToString}],
                [{product: {unitPrice: 3000}, quantity: 3, toString: toString}, {total: 9000, toString: totalToString}],
                [{product: {unitPrice: 1500}, quantity: 5, toString: toString}, {total: 7500, toString: totalToString}]
            ],
            function(item, expected) {

                it('should calculate an item total price', function () {
                    var cartItem = new OrderItem(item.product, item.quantity);

                    expect(cartItem.total()).toBe(expected.total);
                });
            }
        );
    });
});
