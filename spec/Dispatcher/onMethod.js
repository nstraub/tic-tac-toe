describe('On Method', function () {
    it('should register callbacks in the events object', function () {
        var dispatcher = new Dispatcher(),
            testFn = function () {};

        dispatcher.on('test', testFn);
        expect(dispatcher.events.test.length).toBe(1);
        expect(dispatcher.events.test[0]).toBe(testFn);
    });

    it('should allow for more than one callback per event', function () {
        var dispatcher = new Dispatcher(),
            testFn = function () {};

        dispatcher.on('test', testFn);
        dispatcher.on('test', testFn);

        expect(dispatcher.events.test.length).toBe(2);
        expect(dispatcher.events.test[0]).toBe(testFn);
        expect(dispatcher.events.test[1]).toBe(testFn);
    });

    it('should throw an error when first argument is not a string', function () {
        var dispatcher = new Dispatcher();
        expect(function () {dispatcher.on({}, function () {})}).toThrowError('event name must be a string');
    });

    it('should throw an error when second argument is not a function', function () {
        var dispatcher = new Dispatcher();
        expect(function () {dispatcher.on('test', {})}).toThrowError('callback must be a function');
    });

});
