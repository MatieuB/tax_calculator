var code = require('../main');
var expect = require('chai').expect;

describe("calcTax", function(num){

  it('should tax 10% on the first $10', function() {
    expect(code.calcTax(1)).to.equal(0.10);
    expect(code.calcTax(10)).to.equal(1.00);
  });

  it('should tax 7% on the second $10', function() {
    expect(code.calcTax(15)).to.equal(1.35);
    expect(code.calcTax(20)).to.equal(1.70);
  });

  it('should tax 5% on the third $10', function() {
    expect(code.calcTax(26)).to.equal(2.00);
    expect(code.calcTax(30)).to.equal(2.20);
  });

  it('should tax 3% above $30', function() {
    expect(code.calcTax(33)).to.equal(2.29);
    expect(code.calcTax(109)).to.equal(4.57);
  });
  it('return a string if num is below 0', function() {
    expect(code.calcTax(-20)).to.equal("Looks more like a refund to me.");
  });

    });
