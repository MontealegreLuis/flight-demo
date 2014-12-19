<?php
/**
 * PHP version 5.5
 *
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
namespace Store\Bridges\PDO;

use PDO;
use Store\Product;
use Store\ProductCatalog as Catalog;

class ProductCatalog implements Catalog
{
    /** @type PDO */
    protected $connection;

    /**
     * @param PDO $connection
     */
    public function __construct(PDO $connection)
    {
        $this->connection = $connection;
    }

    /**
     * @param Product $product
     */
    public function add(Product $product)
    {
        $sql = 'INSERT INTO products(product_id, name, unit_price) VALUES (?, ?, ?)';
        $statement = $this->connection->prepare($sql);
        $statement->execute([
            $product->productId(),
            $product->name(),
            $product->unitPrice(),
        ]);
    }

    /**
     * @return array
     */
    public function all()
    {
        $sql = 'SELECT product_id AS productId, name, unit_price AS unitPrice FROM products';
        $statement = $this->connection->prepare($sql);
        $statement->execute();

        return $statement->fetchAll();
    }
}
