/**
 * Created by Alexsei on 08.03.2015.
 */

Problem25= function(){};

Problem25.prototype.solve = function(){

    var currentResult = new BigNumber(1),
        previousResult = new BigNumber(1),
        result = new BigNumber(2),
        index = 2;

    while(this.getDigitsCount(result)<1000){
        result = currentResult.plus(previousResult);
        previousResult = currentResult;
        currentResult = result;

        index++;
    }
    // index=4782
    return result;
};

/**
 * @param number
 */
Problem25.prototype.getDigitsCount = function(number){
    var digitsCount = 0;
    while(number.gt(0)){
        number = number.div(10).trunc();
        digitsCount++;
    }
    return digitsCount;
};

