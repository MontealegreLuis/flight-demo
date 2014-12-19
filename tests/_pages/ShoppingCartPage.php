<?php
/**
 * PHP version 5.5
 *
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
class ShoppingCartPage
{
    public static $URL = '/order';
    public static $product = 'Product';
    public static $quantity = 'Quantity';
    public static $addToCart = 'Add to cart';
    public static $firstItemPrice = '//tbody//tr[1]//td[last()]';
    public static $secondItemPrice = '//tbody//tr[2]//td[last()]';
    public static $total = '#cart-total';
}
