<?php
/**
 * PHP version 5.5
 *
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
namespace Store;

interface ProductCatalog
{
    /**
     * @param Product $product
     */
    public function add(Product $product);

    /**
     * @return array
     */
    public function all();
}
