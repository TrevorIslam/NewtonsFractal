class Polynomial {
  constructor (arr) {
    this.poly = arr;
  }

  derivative () {
    let tempArr = [];
    for (let i = 0; i < this.poly.length; i++) {
      //degree of current term in polynomial
      let currentPower = this.poly.length - (i + 1);

      //coefficient of current term in polynomial
      let currentCoefficient = this.poly[i];

      let currentTermAnswer = currentCoefficient * currentPower;

      if (i != this.poly.length - 1) {
        tempArr.push(currentTermAnswer);
      }
    }

    return new Polynomial(tempArr);
  }

  evaluate (cnum) {
    let ans = new Cnum (0,0);
    for (let i = 0; i < this.poly.length; i++) {
      //degree of current term in polynomial
      let currentPower = this.poly.length - (i + 1);

      //coefficient of current term in polynomial
      let currentCoefficient = new Cnum (this.poly[i], 0);

      //
      let currentTermAnswer = (cnum.power(currentPower)).multiply(currentCoefficient);
      ans = ans.add(currentTermAnswer);
    }

    return ans;
  }
}
