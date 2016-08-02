var assert = require('chai').assert
var shallow = require('enzyme').shallow

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});
