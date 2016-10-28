function assert(predicate, message, errorPrototype) {
    if (!predicate) throw new errorPrototype(message);
}

// Type assertions
['String', 'Function'].forEach(function (assertion) {
    assert['is' + assertion] = function (value, name) {
        this(_['is' + assertion](value), name + ' must be a ' + assertion.toLowerCase(), TypeError);
    };
});
