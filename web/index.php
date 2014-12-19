<?php
/**
 * PHP version 5.5
 *
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
chdir(__DIR__ . '/../');

require 'vendor/autoload.php';
require 'app/config.php';

$app = new \Slim\Slim($configuration['app']);

$view = $app->view();
$view->parserOptions = $configuration['twig'];

require 'app/resources.php';
require 'app/routes.php';

$app->run();
