global.using = function(name, values, func) {
    for (var i = 0, count = values.length; i < count; i++) {

        //Check if the argument passed to 'using' contains value and expected result.
        if (Object.prototype.toString.call(values[i]) !== '[object Array]') {
            values[i] = [values[i]];
        }

        // Add the arguments provided to 'using' to spec original description
        it.specName = name;
        it.data = values[i];

        func.apply(this, values[i]);

        // Clear the spec data
        it.data = null;
        it.specName = null;
    }
}
var it_multi = function _it_multi(desc, func) {
    var _data = [], _desc = desc;

    // Update the spec description only if it was called through 'using'
    if (it.data) {
        _data = it.data;
        _desc = desc + ' (with ' + it.specName +  ' using values [' + _data.toString() + '])';
    }

    // Run the original it function
    jasmine.getEnv().it(_desc, function() {
        return function() {
            func.apply(func, _data);
        }
    });
};

if ( it && typeof it == 'function') {
    it = it_multi;
}
