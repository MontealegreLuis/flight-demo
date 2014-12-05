define(['store/ProductsCatalog'], function(ProductsCatalog) {
    'use strict';

    var faker, catalog;
    var buildProducts = function(amount) {
        var i, products = [];

        for (i = 1; i <= amount; i++) {
            products[i] = {productId: i, name: faker.Lorem.words(2)};
        }

        return products;
    };


    beforeEach(function () {
        catalog = new ProductsCatalog();
        faker = require('Faker');
    });

    describe('ProductsCatalog', function () {

        it('should get all the products in the catalog', function () {
            catalog.setProducts(buildProducts(10));

            expect(catalog.allProducts().length).toEqual(10);
        });

        it('should find a product by its identifier', function () {
            var products = buildProducts(10);
            var expectedProduct = products[5]; // Product with ID 5
            var product;

            catalog.setProducts(products);

            product = catalog.productOfId(5);

            expect(product.productId).toEqual(expectedProduct.productId);
            expect(product.name).toEqual(expectedProduct.name);
        });

        it('should load its products using an XHR call', function () {
            var $ = {
                ajax: function(options) {
                    options.success.call();
                }
            };
            var getProducts = jasmine.createSpy('getProducts');
            var options = {
                request: $,
                url: '/products',
                callback: getProducts
            };

            spyOn($, 'ajax').andCallThrough();

            catalog.loadProducts(options);

            expect($.ajax).toHaveBeenCalled();
            expect(getProducts).toHaveBeenCalled();
        });
    });
});
