const assert = require('assert')
const Paint = require('../paint.js')
const Decorator = require('../decorator.js')
const Room = require('../room.js')

describe('Decorator', function(){

  beforeEach(function(){
    paint1 = new Paint(10);
    paint2 = new Paint(5);
    paint3 = new Paint(5);
    paint4 = new Paint(5);
    decorator = new Decorator();
    room = new Room(20);
  });

  it('start with an empty paint stock', function(){
    const actual = decorator.stock.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to add paint to stock', function(){
    decorator.addPaint(paint1);
    const actual = decorator.stock.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to calculate total litres in stock', function(){
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);
    const actual = decorator.countLitres();
    assert.strictEqual(actual, 15);
  });

  it('should be able to calculate when there is enough paint to paint a room', function(){
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);
    const actual = decorator.canPaintRoom(room);
    assert.strictEqual(actual, false);
  });

  it('should be able to paint a room if there is enough paint in stock', function(){
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);
    decorator.addPaint(paint3);
    decorator.paintRoom(room);
    const actual = room.painted;
    assert.strictEqual(actual, true);
  });

  it('should be able to decrease amount of paint stock when painting a room', function(){
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);
    decorator.addPaint(paint3);
    decorator.paintRoom(room);
    const actual = decorator.stock.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to remove empty paint cans from stock', function(){
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);
    decorator.addPaint(paint3);
    decorator.addPaint(paint4);
    decorator.paintRoom(room);
    const actual = decorator.stock.length;
    assert.strictEqual(actual, 1);
  });

})
