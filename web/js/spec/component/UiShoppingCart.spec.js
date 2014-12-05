'use strict';

describeComponent('component/UiShoppingCart', function () {
    var itemRow = '<tr><td>Lightsaber</td><td>$20.00</td><td>2</td><td>$ 40.00</td></tr>';
    var cartTotal = '<p>$40.00</p>';

    beforeEach(function () {
        this.setupComponent(
            '<table><tbody></tbody><tr><td id="cart-total"></td></tr></table>', {
            totalSelector: '#cart-total',
            cartItemsSelector: 'tbody',
            itemTemplate: {render: function() {return itemRow;}},
            totalTemplate: {render: function() {return cartTotal;}}
        });
    });

    it('should be defined', function () {
        expect(this.component).toBeDefined();
    });

    it("should listen for 'data.whenItemIsAddedToCart' events and update the cart items HTML", function () {
        this.component.trigger(document, 'data.whenItemIsAddedToCart', {});

        expect(this.component.select('cartItemsSelector').html()).toEqual(itemRow);
    });

    it("should listen for 'data.whenCartTotalHasChanged' events and update the cart\'s total HTML", function () {
        this.component.trigger(document, 'data.whenCartTotalHasChanged', {});

        expect(this.component.select('totalSelector').html()).toEqual(cartTotal);
    });
});
