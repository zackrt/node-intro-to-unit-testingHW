
const should = require('chai').should();

const testFizzBuzzer = require('../fizzBuzzer');


// unit tests for our `fizzBuzzer` function
describe('testFizzBuzzer', function() {

  // test the normal case
  it('should return "fizz-buzz" for multiples of 15', function() {
    // range of normal number inputs
    [15, 30, 45].forEach(function(input) {
        testFizzBuzzer(input).should.equal('fizz-buzz');
    });
  });
  it('should return "fizz" for multiples of 3', function(){
      [3, 6, 9, 12].forEach(function(input) {
        testFizzBuzzer(input).should.equal('fizz');
    });
  }); 
    // for each number that is divisible by 5
  it('should return "buzz" for multiples of 5', function() {
    [5, 10, 20].forEach(function(input) {
      testFizzBuzzer(input).should.equal('buzz');
    });
  }); 

  it('should return number if not multiples of 3 or 5', function() {
    [1,2,4,7].forEach(function(input) {
      testFizzBuzzer(input).should.equal(input);
    });
  });

    // prove that an error is raised for bad inputs: '`num` must be a number'
    const badInputs = [true, false,'dog', function() {}, [1,2,3]]
    badInputs.forEach(function(input) {
      (function() {
          testFizzBuzzer(input)
      }).should.throw(Error);
    });
  });

  //how to add node_modules to github 