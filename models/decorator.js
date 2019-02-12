const Paint = require('./paint.js')
const Room = require('./room.js')

const Decorator = function () {
  this.stock = [];
}

Decorator.prototype.addPaint = function (paint) {
  this.stock.push(paint);
}

Decorator.prototype.countLitres = function () {
  total = 0;
  for (i = 0; i < this.stock.length; i++) {
    total += this.stock[i].litres;
  }
  return total;
}

Decorator.prototype.canPaintRoom = function (room) {
  if (this.countLitres() < room.area) {
    return false;
  }
  else {
    return true;
  }
};

Decorator.prototype.paintRoom = function (room) {
  if (this.canPaintRoom(room)) {
    i = 0;
    total = 0;
    while (total !== room.area) {
      total += this.stock[i].litres;
      i++;
    }
    this.stock = this.stock.slice(i);
    room.painted = true;
  }
};

module.exports = Decorator;
