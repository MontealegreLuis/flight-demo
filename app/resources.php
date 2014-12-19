<?php
/**
 * PHP version 5.5
 *
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
$app->container->singleton('connection', function() {
    $connection = new PDO('sqlite:var/store.sqlite');
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $connection->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    return $connection;
});

$app->container->singleton('catalog', function() use ($app) {

    return new Store\Bridges\PDO\ProductCatalog($app->connection);
});
