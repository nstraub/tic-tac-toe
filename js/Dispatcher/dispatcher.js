var Dispatcher = (function () {
    function Dispatcher() {
        // associative array where callbacks are stored. for each property, the key is the
        // `Subject` and the value is an array with all its `Observers`
        this.events = {};
    }

    // this function receives participants from both patterns. `eventName` is the `Subject`
    // from the `Observer` pattern and callback is the `Colleague` from the `Mediator` pattern.
    Dispatcher.prototype.on = function (eventName, callback) {
        assert.isString(eventName, 'event name');
        assert.isFunction(callback, 'callback');

        // `Subject` is added to the dictionary of Subjects
        this.events[eventName] = this.events[eventName] || [];

        // `Colleague` is registered as an `Observer` for the `Subject`
        this.events[eventName].push(callback);
    };

    Dispatcher.prototype.trigger = function (eventName) {
        var args, events;

        assert.isString(eventName, 'event name');
        events = this.events[eventName];

        if (events) {
            args = Array.prototype.slice.call(arguments, 1);
            // the `Observer` pattern `Notification` process
            events.forEach(function (callback) {
                callback.apply(this, args);
            });
        }
    };

    return Dispatcher;
}());