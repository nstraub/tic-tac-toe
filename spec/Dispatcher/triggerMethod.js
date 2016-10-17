describe('Trigger Method', function () {
    it('should run all callbacks associated to given subject', function () {
        var testFn = sinon.spy(function () {}),
            dispatcher = new Dispatcher();

        dispatcher.events.test = [testFn,testFn,testFn];
        dispatcher.trigger('test');

        expect(testFn).toHaveBeenCalledThrice();
    });
    it('should not throw an error when event is not registered', function () {
        var dispatcher = new Dispatcher();

        expect(function () {dispatcher.trigger('undefined event');}).not.toThrowError();
    });
    it('should throw an error when event name is not a string', function () {
        var dispatcher = new Dispatcher();
        expect(function () {dispatcher.trigger({})}).toThrowError('event name must be a string');
    });

    it('should pass any additional arguments into the callbacks', function () {
        var testFn = sinon.spy(function () {}),
            dispatcher = new Dispatcher();

        dispatcher.events.test = [testFn];
        dispatcher.trigger('test', 1, 2, 3);

        expect(testFn).toHaveBeenCalledWith(1, 2, 3)
    });
});
