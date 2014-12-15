describe('lodashadapter', function () {

    beforeEach(module('mobi.ui.lodashadapter'));


    it('should provide lodash', inject(function (_) {
        expect(_.max([1,2,3])).toBe(3);
    }));

})

;



