<?php
/**
 * PHP version 5.5
 *
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
class ProductsProvider
{
    protected $products = [
        'Super Mario Bros',
        'Grand Theft Auto',
        'Call of Duty',
        'Mario Kart',
        'Pokémon Diamond and Pearl',
        'Sonic the Hedgehog',
        'Diablo III',
        'Battlefield 3',
        'Mortal Kombat II',
        'Street Fighter II: Special Champion Edition',
        'Jurassic Park',
        'NFL \'98',
        'X-Men',
        'Mighty Morphin Power Rangers',
        'Disney\'s Aladdin',
        'NBA Jam',
        'Altered Beast',
    ];

    /**
     * Return a random element from the array $products
     *
     * @return string
     */
    public function product()
    {
        return $this->products[array_rand($this->products)];
    }
}
