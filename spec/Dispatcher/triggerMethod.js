describe('Trigger Method', function () {
    var _dispatcher, _testFn;

    beforeEach(function () {
        _dispatcher = new Dispatcher();
        _testFn = jasmine.createSpy();
    });

    it('should run all callbacks associated to given subject', function () {
        _dispatcher.events.test = [_testFn,_testFn,_testFn];
        _dispatcher.trigger('test');

        expect(_testFn).toHaveBeenCalledTimes(3);
    });

    it('should not throw an error when event is not registered', function () {
        expect(function () {_dispatcher.trigger('undefined event');}).not.toThrowError();
    });

    it('should throw an error when event name is not a string', function () {
        expect(function () {_dispatcher.trigger({})}).toThrowError('event name must be a string');
    });

    it('should pass any additional arguments into the callbacks', function () {
        _dispatcher.events.test = [_testFn];
        _dispatcher.trigger('test', 1, 2, 3);

        expect(_testFn).toHaveBeenCalledWith(1, 2, 3)
    });
});
