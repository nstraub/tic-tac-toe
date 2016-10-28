describe('On Method', function () {
    var _dispatcher,
        _testFn = function () {};

    beforeEach(function () {
        _dispatcher = new Dispatcher();
    });

    function callOn() {
        _dispatcher.on('test', _testFn);
    }

    it('should register callbacks in the events object', function () {
        callOn();

        expect(_dispatcher.events.test.length).toBe(1);
        expect(_dispatcher.events.test[0]).toBe(_testFn);
    });

    it('should allow for more than one callback per event', function () {
        callOn();
        callOn();

        expect(_dispatcher.events.test.length).toBe(2);
        expect(_dispatcher.events.test[0]).toBe(_testFn);
        expect(_dispatcher.events.test[1]).toBe(_testFn);
    });

    it('should throw an error when first argument is not a string', function () {
        expect(function () { _dispatcher.on({}, _testFn); }).toThrowError(TypeError, 'event name must be a string');
    });

    it('should throw an error when second argument is not a function', function () {
        expect(function () { _dispatcher.on('test', {}); }).toThrowError(TypeError, 'callback must be a function');
    });

});
