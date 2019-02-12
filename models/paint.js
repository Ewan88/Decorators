const Paint = function(litres){
  this.litres = litres;
}

Paint.prototype.isEmpty = function () {
  if (this.litres == 0) return true;
  else return false;
};

module.exports = Paint;
