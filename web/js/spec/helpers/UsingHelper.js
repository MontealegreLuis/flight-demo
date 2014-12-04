global.using = function(name, values, func) {
    for (var i = 0, count = values.length; i < count; i++) {
        if (Object.prototype.toString.call(values[i]) !== '[object Array]') {
            values[i] = [values[i]];
        }
        it.specName = name;
        it.data = values[i];
        func.apply(this, values[i]);
        it.data = null;
        it.specName = null;
    }
}
var it_multi = function _it_multi(desc, func) {
    var _data = [], _desc = desc;

    if (it.data) {
        _data = it.data;
        _desc = desc + ' (with ' + it.specName +  ' using values [' + _data.toString() + '])';
    }

    jasmine.getEnv().it(_desc, function() {
        return function() {
            func.apply(func, _data);
        }
    });
};

if ( it && typeof it == 'function') {
    it = it_multi;
}
