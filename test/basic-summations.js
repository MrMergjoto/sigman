
var assert = require('assert');
var sigman = require('./../sigman');
var fs = require('fs');
var packagejson = require('./../package.json');

describe('command line interface', function () {

  it('1 to 5 sigma i', function () {
    let result = sigman(1, 5, "i");
    assert.equal(result, 15);
  });

  it('1 to 3 sigma i*i', function () {
    let result = sigman(1, 3, "i*i");
    assert.equal(result, 14);
  });

  it('1 to 3 sigma 2*i*i', function () {
    let result = sigman(1, 3, "2*i*i");
    assert.equal(result, 28);
  });

  it('1 to 3 sigma (2+i)*i', function () {
    let result = sigman(1, 3, "(2+i)*i");
    assert.equal(result, 26);
  });

  it('1 to 4 sigma 1/(i*i) (note: funny rounding artifact)', function () {
    let result = sigman(1, 4, "1/(i*i)");
    assert.equal(result, 1.4236111111111112);
  });
});