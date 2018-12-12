const isPerfectString = require('../index');
const assert = require('assert');
describe('isPerfectString tests', function(){
    describe('test cases for [1,n]', function(){
        it('should return true given qqwqw', function(){
            const char = 'qqwqw';
            const check = isPerfectString(char);
            assert.equal(check, true);
        });
        it('should return true given wrww', function(){
            const char = 'wrww';
            const check = isPerfectString(char);
            assert.equal(check, true);
        });
        it('should return true given yyyt', function(){
            const char = 'yyyt';
            const check = isPerfectString(char);
            assert.equal(check, true);
        });
    })
    describe('test cases for [n+1,n+1]', function(){
        it('should return false given qqqww', function(){
            const char = 'qqqww';
            const check = isPerfectString(char);
            assert.equal(check, true);
        });
        it('should return false given wrrrww', function(){
            const char = 'wrrrww';
            const check = isPerfectString(char);
            assert.equal(check, false);
        });
        it('should return true given aabb', function(){
            const char = 'aabb';
            const check = isPerfectString(char);
            assert.equal(check, false);
        });
    })
    describe('test cases for [n+1,n+1,...]', function(){
        it('should return true given qqqwwddee', function(){
            const char = 'qqqwwddee';
            const check = isPerfectString(char);
            assert.equal(check, true);
        });
        it('should return true given wrrrwwzzzyyyz', function(){
            const char = 'wrrrwwzzzyyyz';
            const check = isPerfectString(char);
            assert.equal(check, true);
        });
        it('should return true given aabbcccddd', function(){
            const char = 'aabbcccddd';
            const check = isPerfectString(char);
            assert.equal(check, false);
        });
    })
})