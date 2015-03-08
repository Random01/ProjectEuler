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
        sum = 0;

    while(currentResult<maxFibonacci) {
        if(currentResult%2==0){
            sum+=currentResult;
        }

        var result = currentResult + previousResult;
        previousResult = currentResult;
        currentResult = result;
    }

    // 4613732
    return sum;
};