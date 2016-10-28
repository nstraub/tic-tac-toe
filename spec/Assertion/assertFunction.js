describe('Assert Function', function () {
    it('should throw an Error when predicate is false', function() {
        expect(function () {assert(false, 'is false', Error)}).toThrowError(Error, 'is false');
    });

    it('should do nothing when predicate is true', function() {
        expect(function () {assert(true, 'is false', Error)}).not.toThrowError();
    });
});
