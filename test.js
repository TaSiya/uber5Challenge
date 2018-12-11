const isPerfectString = require('./index');
const assert = require('assert');
describe('testing function', function(){
    it('should return true given aabbb', function(){
        const char = 'aabbb';
        const check = isPerfectString(char);
        assert.equal(check, true);
    });
    it('should return true given aabbb', function(){
        const char = 'wqwqq';
        const check = isPerfectString(char);
        assert.equal(check, true);
    });
    it('should return true given aabbb', function(){
        const char = 'aabbbccc';
        const check = isPerfectString(char);
        assert.equal(check, false);
    });
})