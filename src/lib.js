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

const makeDeltaTracker = function(old){
  return function(delta){
    if(!delta){
      delta = 0;
    }
    let object = {old:old,delta:delta,new:old+delta};
    old=old+delta;
    return object;
  }
}

const makeFiboGenerator = function(firstTerm,secondTerm){
  if(!firstTerm && !secondTerm){
    firstTerm = 0;
    secondTerm = 1;
  }
  if(!secondTerm){
    secondTerm = firstTerm;
    firstTerm = 0;
  }
  return function(){
    let result = firstTerm;
    let sum = firstTerm+secondTerm;
    firstTerm = secondTerm;
    secondTerm = sum;
    return result;
  }
}

const makeCycler = function(array){
  let newArray = array.slice(0);
  let count = -1;
  return function(){
    count++;
    if(count == newArray.length){
      count=0;
    }
    return newArray[count];
  }
}

const curry = function(operation,argv1){
  return function(argv2,argv3){
    return operation(argv1,argv2,argv3);
  }
}

const compose = function(operation1,operation2){ 
  return function(number1,number2){
    numbers = operation2(number1,number2);
    numbers = operation1(numbers);
    return numbers;
  }
}


exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
