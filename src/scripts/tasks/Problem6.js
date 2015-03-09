/**
 * Created by Alexsei on 08.03.2015.
 */
Problem6 = function(){};

Problem6.prototype.solve = function(){
    var sumOfSquares = new BigNumber(0),
        squareOfSum = 0,
        sum=0;

    for(var i=1; i<=100; i++){
        sumOfSquares = sumOfSquares.add(i*i);
        sum+=i;
    }
    squareOfSum = (new BigNumber(sum)).times(sum);

    return squareOfSum.sub(sumOfSquares);
};