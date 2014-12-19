<?php
/**
 * PHP version 5.5
 *
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
namespace Store;

class Product
{
    /** @type integer */
    protected $productId;

    /** @type string */
    protected $name;

    /** @type float */
    protected $unitPrice;

    /**
     * @param integer $productId
     * @param string  $name
     * @param float   $unitPrice
     */
    public function __construct($productId, $name, $unitPrice)
    {
        $this->prductId = $productId;
        $this->name = $name;
        $this->unitPrice = $unitPrice;
    }

    /**
     * @return integer
     */
    public function productId()
    {
        return $this->productId;
    }

    /**
     * @return string
     */
    public function name()
    {
        return $this->name;
    }

    /**
     * @return float
     */
    public function unitPrice()
    {
        return $this->unitPrice;
    }
}
