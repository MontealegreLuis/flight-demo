<?php
$autoloader = require 'vendor/autoload.php';
$autoloader->add('', __DIR__ . '/_support');

\Codeception\Util\Autoload::registerSuffix('Fixture', __DIR__.DIRECTORY_SEPARATOR.'_data');

\Codeception\Util\Autoload::registerSuffix('Page', __DIR__.DIRECTORY_SEPARATOR.'_pages');