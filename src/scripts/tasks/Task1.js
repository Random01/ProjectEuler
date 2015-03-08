/**
 * Created by Alexsei on 07.03.2015.
 */

Task1= function(){

};

/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */
Task1.prototype.run = function(){
    var limit = 1000,
        sum = 0,
        current5 = 0,
        current3 = 0;

    while(current3<limit){
        sum+=current3;
        current3 = current3 +3;
    }

    while(current5<limit){
        if(current5 == 0 || current5%3 != 0) {
            sum+=current5;
        }
        current5 = current5 + 5;
    }

    //233168
    return sum;
};

Task1.prototype.findSum = function(n,multiply){
    var current = multiply,
        sum = 0;
    while(current < n){
        sum+=current;
        current = current + multiply;
    }
    return sum;
};