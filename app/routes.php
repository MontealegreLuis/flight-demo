<?php
/**
 * PHP version 5.5
 *
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
$app->get('/order', function() use ($app) {
    $app->render('order.html.twig', [
        'mode' => $app->getMode(),
    ]);
});

$app->get('/products', function() use ($app) {
    $products = $app->catalog->all();

    $app->response->headers->set('Content-Type', 'application/json');
    $app->response->body(json_encode($products, JSON_PRETTY_PRINT));
});
