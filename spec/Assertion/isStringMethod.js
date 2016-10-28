describe('Is String Method', function () {
    it('should throw error when argument is not string', function () {
        expect(function(){assert.isString({}, 'test')}).toThrowError('test must be a string');
    });

    it('should not throw error when argument is string', function () {
        expect(function(){assert.isString('test')}).not.toThrowError();
    });

    it('should not throw error when argument is string object wrapper', function () {
        expect(function(){assert.isString(new String('test'))}).not.toThrowError();
    });
});
