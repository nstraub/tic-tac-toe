var Dispatcher = (function () {
    function Dispatcher() {
        // associative array where callbacks are stored. for each property, the key is the
        // `Subject` and the value is an array with all its `Observers`
        this.events = {};
    }

    // this function receives participants from both patterns. `eventName` is the `Subject`
    // from the `Observer` pattern and callback is the `Colleague` from the `Mediator` pattern.
    Dispatcher.prototype.on = function (eventName, callback) {
        if (typeof eventName !== 'string') {
            throw new Error('event name must be a string');
        } else if (typeof callback !== 'function') {
            throw new Error('callback must be a function')
        }

        // `Subject` is added to the dictionary of Subjects
        this.events[eventName] = this.events[eventName] || [];
        // `Colleague` is registered as an `Observer` for the `Subject`
        this.events[eventName].push(callback);
    };
    Dispatcher.prototype.trigger = function (eventName) {
        if (typeof eventName !== 'string') {
            throw new Error('event name must be a string');
        }

        if (this.events[eventName]) {
            var args = Array.prototype.slice.call(arguments, 1);
            // the `Observer` pattern `Notification` process
            this.events[eventName].forEach(function (callback) {
                callback.apply(this, args);
            });
        }
    };

    return Dispatcher;
}());