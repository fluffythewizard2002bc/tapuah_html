function Square(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

Square.prototype.isSquare = function isSquare() {
    if (this.a === this.c && this.b === this.d)
        return true;
    else
        return false;
}
let square1 = new Square(1, 2, 1, 2);
let square2 = new Square(1, 2, 1, 3);
let square3 = new Square(1, 2, 3, 2);
console.log(square1.isSquare());
console.log(square2.isSquare());
console.log(square3.isSquare());