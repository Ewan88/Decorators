const assert = require('assert')
const Room = require('../room.js')

describe('Room', function(){

  beforeEach(function(){
    room = new Room(10);
  });

  it('have an area in square meters', function(){
    const actual = room.area;
    assert.strictEqual(actual, 10);
  });

  it('should start not painted', function(){
    const actual = room.painted;
    assert.strictEqual(actual, false);
  });

  it('should be able to be painted', function(){
    room.painted = true;
    const actual = room.painted;
    assert.strictEqual(actual, true);
  });

})
