function assert(predicate, message, errorPrototype) {
    if (!predicate) throw new errorPrototype(message);
}

assert.isString = function (value, name) {
    this(_.isString(value), name + ' must be a string', TypeError);
};

assert.isFunction = function (value, name) {
    this(_.isFunction(value), name + ' must be a function', TypeError)
};
