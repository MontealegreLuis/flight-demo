'use strict';

describeComponent('component/DataShoppingCart', function () {

    beforeEach(function () {
        this.setupComponent({
            catalog: {allProducts: function(){}, productOfId: function(){}},
            cart: {addItem: function() { return {} }}
        });
    });

    it('should be defined', function () {
        expect(this.component).toBeDefined();
    });

    it("should listen for 'ui.whenProductIsAdded' events and trigger 'data.whenItemIsAddedToCart' event", function () {
        spyOnEvent(this.$node, 'data.whenItemIsAddedToCart');

        this.$node.trigger('ui.whenProductIsAdded', {});

        expect('data.whenItemIsAddedToCart').toHaveBeenTriggeredOn(this.$node);
    });

    it("should listen for 'ui.whenProductIsAdded' events and trigger 'data.whenCartTotalHasChanged' event", function () {
        spyOnEvent(this.$node, 'data.whenCartTotalHasChanged');

        this.$node.trigger('ui.whenProductIsAdded', {});

        expect('data.whenCartTotalHasChanged').toHaveBeenTriggeredOn(this.$node);
    });

    it("should trigger 'data.whenProductsAreLoaded' event when method 'loadProducts' is executed", function () {
        spyOnEvent(this.$node, 'data.whenProductsAreLoaded');

        this.component.loadProducts({});

        expect('data.whenProductsAreLoaded').toHaveBeenTriggeredOn(this.$node);
    });
});
