<?php
require '../vendor/autoload.php';

use Faker\Factory;
use Slim\Slim;

$app = new Slim();

$app->get('/products', function() use ($app) {
    $faker = Factory::create();
    $count = $faker->randomNumber(2) % 15; // Random number between 0 an 15
    $productsCount =  $count !== 0 ? $count : 5; // If $count is 0 use 5 as default
    $products = [];

    for ($i = 0; $i < $productsCount; $i++) {
        $products[] = [
            'productId' => $faker->uuid,
            'name' => $faker->sentence(2),
            'unitPrice' => $faker->randomFloat(2, 0, 5000),
        ];
    }

    echo json_encode($products, JSON_PRETTY_PRINT);

});

$app->run();