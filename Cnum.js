class Cnum {
  constructor (a, b) {
    this.a = a;
    this.b = b;
  }

  add (other) {
    let newA = this.a + other.a;
    let newB = this.b + other.b;

    return new Cnum(newA, newB);
  }

  subtract (other) {
    let newA = this.a - other.a;
    let newB = this.b - other.b;

    return new Cnum(newA, newB);
  }

  multiply (other) {
    let newA = (this.a * other.a - this.b * other.b);
    let newB = (this.a * other.b + this.b * other.a);

    return new Cnum(newA, newB);
  }

  divide (other) {
    return this.multiply(other.complexConjugate());
  }

  distance (other) {
    let a = other.a - this.a;
    let b = other.b - this.b;

    return Math.sqrt(a * a + b * b);
  }

  power (num) {
    let temp = new Cnum (1,0);
    for (let i = 0; i < num; i++) {
      temp = temp.multiply(this);
    }
    return temp;
  }

  complexConjugate () {
    newB = this.b * -1;

    return new Cnum (this.a, newB);
  }
}
