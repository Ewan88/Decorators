const assert = require('assert')
const Paint = require('../paint.js')

describe('Paint', function(){

  beforeEach(function(){
    paint = new Paint(10);
  });

  it('have a number of litres of paint', function(){
    const actual = paint.litres;
    assert.strictEqual(actual, 10);
  });

  it('should be able to check if empty', function(){
    const actual = paint.isEmpty();
    assert.strictEqual(actual, false);
  });

  it('should be able to empty itself of paint', function(){
    paint.litres -= 10;
    const actual = paint.isEmpty();
    assert.strictEqual(actual, true);
  });

})
