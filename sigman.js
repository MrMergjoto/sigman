
/**
 *  @module sigma.js
 *  @description node.js JavaScript
 *  @author Rich W.
 *  @license MIT
 */

var vm = require('vm');

module.exports.list = false;

var sigmaFunction = function(start, stop, func){
  var context_box = {
    val: null,
    i: start,
    result: 0
  };
  const pre_func = "val = ";
  const post_func = "; result += val;";
  const prepped_func = pre_func + func + post_func;
  const func_script = new vm.Script(prepped_func);
  while(context_box.i <= stop) {
    let context = new vm.createContext(context_box);
    func_script.runInContext(context);
    if(module.exports.list) {
      console.log("iteration: " + context_box.i + " value: " + context_box.val + " total: " + context_box.result);
    }
    context_box.i++;
  }
  return context_box.result;
};

module.exports = sigmaFunction;
