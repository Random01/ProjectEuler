/**
 * Created by Alexsei on 07.03.2015.
 */

/**
 * @constructor
 */
Task2 = function(){

};

/**
 * By considering the terms in the Fibonacci sequence whose values
 * do not exceed four million, find the sum of the even-valued terms.
 * @returns {number}
 */
Task2.prototype.run=function(){
    var previousResult = 1,
        currentResult = 2,
        maxFibonacci = 4000000,
        nextResult = 3,
        sum = currentResult;

    while(true) {
        nextResult = currentResult + previousResult;
        if(nextResult>maxFibonacci){
            break;
        }

        previousResult = currentResult;
        currentResult = nextResult;
        if(nextResult%2==0){
            sum+=nextResult;
        }
    }
    return sum;
};