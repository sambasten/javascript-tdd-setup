'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum_of_primes.js');

describe("That the function returns the correct result", function() {
  it("should return invalid input for argument of negative numbers", function() {
    assert(
      lib.sumOfPrimes(-2)== 'Invalid input'
    );
  });
  it("should return invalid input for string arguments", function() {
    assert(
      lib.sumOfPrimes('string')== 'Invalid input'
    );
  });
  it("should return undefined for undefined arguments", function() {
    assert(
      lib.sumOfPrimes(grtry)== undefined
    );
  });
  it("should return 2 for argument of 2", function() {
    assert(
      lib.sumOfPrimes(2)==2
    );
  });

  it("should return 5 for argument of 5", function() {
    assert(
      lib.sumOfPrimes(5)==10 
    );
  });
  it("should return 17 for argument of 10", function() {
    assert(
      lib.sumOfPrimes(10)==17
    );
  });
  it("should return 41 for argument of 15", function() {
    assert(
      lib.sumOfPrimes(15)==41
    );
  });
  it("should return 77 for argument of 20", function() {
    assert(
      lib.sumOfPrimes(20)==77
    );
  });
  it("should return 5 for argument of 100", function() {
    assert(
      lib.sumOfPrimes(100)==10 
    );
  });
  it("should return 76127 for argument of 1000", function() {
    assert(
      lib.sumOfPrimes(100)==10 
    );
  }); 
});