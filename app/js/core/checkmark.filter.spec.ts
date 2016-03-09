import './core.module';
describe('checkmark filter', function() {

    it('should convert boolean values to unicode checkmark or cross', inject(function(checkmarkFilter){
        expect(checkmarkFilter(true).toEqual('\u2713'));
        expect(checkmarkFilter(false).toEqual('\u2718'));
    }));
});
