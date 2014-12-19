<?php
/**
 * PHP version 5.5
 *
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 *
 * @copyright  Mandrágora Web-Based Systems 2014 (http://www.mandragora-web-systems.com)
 */
$configuration = [
    'app' => [
        'view' => new \Slim\Views\Twig(),
        'templates.path' => 'app/templates',
        'mode' => 'test',
    ],
    'twig' => [
        'cache' => 'var/cache',
    ],
];
