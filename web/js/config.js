/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
requirejs.config({
    baseUrl: '/js',
    paths: {
        'jquery': 'vendor/jquery/dist/jquery.min',
        'twig': 'vendor/twig.js/twig.min',
        'flight': 'vendor/flight',
        'component': 'src/component',
        'page': 'src/page',
        'store': 'src/store'
    }
});
