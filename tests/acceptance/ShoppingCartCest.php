<?php
/**
 * PHP version 5.5
 *
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
use Store\Bridges\PDO\ProductCatalog;

class ShoppingCartCest
{
    public function _before()
    {
        $loader = new FixturesLoader();

        $loader->purge('products');
        $loader->loadFixture(
            __DIR__ . '/../_data/fixtures/products.yml',
            new ProductCatalog($loader->connection()),
            [new ProductsProvider()]
        );
    }

    public function tryToAddProductsToMyShoppingCart(AcceptanceTester $I)
    {
        $I->am('videogames buyer');
        $I->wantTo('buy my favorite videogames');
        $I->lookForwardTo('add videogames to my shopping cart');

        $I->amOnPage(ShoppingCartPage::$URL);
        $I->selectOption(ShoppingCartPage::$product, 'Tetris');
        $I->fillField(ShoppingCartPage::$quantity, 5);
        $I->click(ShoppingCartPage::$addToCart);

        $I->see(501.05, ShoppingCartPage::$firstItemPrice);

        $I->selectOption(ShoppingCartPage::$product, 'Minecraft');
        $I->fillField(ShoppingCartPage::$quantity, 2);
        $I->click(ShoppingCartPage::$addToCart);

        $I->see(401.66, ShoppingCartPage::$secondItemPrice);

        $I->see(902.71, ShoppingCartPage::$total);
    }
}
