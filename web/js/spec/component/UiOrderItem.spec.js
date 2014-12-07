'use strict';

describeComponent('component/UiOrderItem', function () {
    var productOption = '<option value="1">Lightsaber</option>';

    beforeEach(function () {
        this.setupComponent(
            '<form><select id="product"></select><input type="text" id="quantity"></form>', {
            quantitySelector: '#quantity',
            productSelector: '#product',
            productsTemplate: {render: function() {return productOption;}}
        });
    });

    it('should be defined', function () {
        expect(this.component).toBeDefined();
    });

    it("should listen for 'data.whenProductsAreLoaded' events and update the product HTML", function () {
        this.component.trigger(document, 'data.whenProductsAreLoaded', {});

        expect(this.component.select('productSelector').html()).toEqual(productOption);
    });

    it("should listen for 'submit' events and trigger 'ui.whenProductIsAdded' event", function () {
        spyOnEvent(this.$node, 'ui.whenProductIsAdded');

        this.$node.trigger('submit');

        expect('ui.whenProductIsAdded').toHaveBeenTriggeredOn(this.$node);
    });
});
