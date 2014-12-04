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

// Use the same value you use in the browser for 'paths' key.
requirejs.config({
    baseUrl: './web/js',
    nodeRequire: require,
    paths: {
        'flight': 'vendor/flight',
        'store': 'src/store',
        'component': 'src/component'
    }
});

global.window = jsdom.jsdom().parentWindow
global.document = global.window.document;
jQuery = require('jquery');
global.jQuery = global.$ = jQuery;
global.define = requirejs;

// Setup Jasmine
jasmine = require('jasmine-node/lib/jasmine-node/jasmine-loader.js');
global.jasmine = jasmine;

jasmineFlight = require('jasmine-flight');

global.window.jasmine = global.jasmine;
global.window.jQuery = global.jQuery;

// map jasmine.Env to global namespace
jasmineEnv = global.jasmine.getEnv();
for (key in jasmineEnv) {
    if (jasmineEnv[key] instanceof Function) {
        global[key] = jasmineEnv[key];
    }
};

// map jasmine-flight methods to global namespace
for (key in jasmineFlight) {
    if (jasmineFlight[key] instanceof Function) {
        global[key] = jasmineFlight[key];
    }
};

global.jasmine.addMatchers = jasmineEnv.addMatchers;
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

global.requirejs = requirejs;

// Add data provider helper
requirejs('spec/helpers/UsingHelper');

// require specs and run them with Jasmine as soon as they're loaded
requirejs(specs, function () {

    jasmine.getEnv().addReporter(new jasmine.TerminalReporter({
        noColor: false,
        verbose: true,
        noStackTrace: false
    }));

    // execute all specs
    jasmine.getEnv().execute();
});
