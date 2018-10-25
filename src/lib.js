const makeConstant = function(args){
  return function(){
    return args;
  }
}

const makeCounterFromN = function(count){
  count--;
  return function(){
    count++;
    return count;
  }
}

const makeCounterFromZero = function(){
  let count = -1;
  return function(){
    count++;
    return count;
  }
}

const makeDeltaTracker = undefined;
const makeFiboGenerator = undefined;
const makeCycler = undefined;
const curry = undefined;
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
