define(['store/ShoppingCart'], function(ShoppingCart) {
    'use strict';

    var faker, cart;
    var buildProducts = function(amount) {
        var i, products = [];

        for (i = 1; i <= amount; i++) {
            products[i] = {productId: i, name: faker.Lorem.words(2), unitPrice: 100};
        }

        return products;
    };


    beforeEach(function () {
        cart = new ShoppingCart();
        faker = require('Faker');
    });

    describe('ShoppingCart', function () {

        it('should add an item to the cart', function () {
            var product = {productId: faker.Helpers.randomNumber(10), name: faker.Lorem.words(2), unitPrice: 100};
            var item;

            item = cart.addItem(product);

            expect(item.productId()).toEqual(product.productId);
            expect(item.productName()).toEqual(product.name);
            expect(item.unitPrice()).toEqual(product.unitPrice);
        });

        it('should calculate cart\'s total', function () {
            var products = buildProducts(10);

            cart.setProducts(products);

            expect(cart.total()).toEqual(1000); // all products prices are set to 100
        });

    });
});
