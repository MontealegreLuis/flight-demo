// Add your specs here
var specs = [
    './spec/store/OrderItem.spec',
    './spec/store/ProductsCatalog.spec',
    './spec/store/ShoppingCart.spec',
    './spec/component/DataShoppingCart.spec',
    './spec/component/UiOrderItem.spec',
    './spec/component/UiShoppingCart.spec'
];

var jsdom = require('jsdom');
var requirejs = require('requirejs');
var exitCode = 0;
var key, jasmine, jQuery, jasmineEnv, jasmineFlight;

// Setup RequireJS
requirejs.config({
    baseUrl: './web/js',
    nodeRequire: require,
    paths: { // Use the same values you use in the browser
        'flight': 'vendor/flight',
        'store': 'src/store',
        'component': 'src/component'
    }
});
global.define = requirejs;
global.requirejs = requirejs;

// Setup the DOM
global.window = jsdom.jsdom().parentWindow
global.document = global.window.document;

// Setup jQuery
jQuery = require('jquery');
global.jQuery = global.$ = jQuery;
global.window.jQuery = global.jQuery;

// Setup Jasmine
jasmine = require('jasmine-node/lib/jasmine-node/jasmine-loader.js');
global.jasmine = jasmine;
global.window.jasmine = global.jasmine;

// Map jasmine.Env to global namespace
jasmineEnv = global.jasmine.getEnv();
for (key in jasmineEnv) {
    if (jasmineEnv[key] instanceof Function) {
        global[key] = jasmineEnv[key];
    }
};
global.jasmine.addMatchers = jasmineEnv.addMatchers;

// Setup jasmine-flight
jasmineFlight = require('jasmine-flight');

// Map jasmine-flight methods to global namespace
for (key in jasmineFlight) {
    if (jasmineFlight[key] instanceof Function) {
        global[key] = jasmineFlight[key];
    }
};

// Setup Jasmine jQuery (you can optionally add the fixture functions to the global namespace)
jasminejQuery = require('jasmine-jquery/lib/jasmine-jquery');
global.spyOnEvent = window.spyOnEvent;

process.on('uncaughtException', function(e) {
    console.error(e.stack || e);
    exitCode = 1;
    process.exit(exitCode);
});

process.on('exit', onExit);

function onExit() {
    process.removeListener('exit', onExit);
    process.exit(exitCode);
}

// Add data provider helper
requirejs('spec/helpers/UsingHelper');

// Require specs and run them with Jasmine as soon as they're loaded
requirejs(specs, function () {

    jasmine.getEnv().addReporter(new jasmine.TerminalReporter({
        noColor: false,
        verbose: true,
        noStackTrace: false
    }));

    jasmine.getEnv().execute();
});
