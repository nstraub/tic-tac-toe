describe('Is Function Method', function () {
    it('should throw error when argument is not function', function () {
        expect(function(){assert.isFunction({}, 'test')}).toThrowError('test must be a function');
    });

    it('should not throw error when argument is function', function () {
        expect(function(){assert.isFunction(function () {})}).not.toThrowError();
    });
});
