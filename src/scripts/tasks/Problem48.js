/**
 * Created by Alexsei on 08.03.2015.
 */
Problem48=function(){};

Problem48.prototype.solve = function(){
    var result = new BigNumber(0);

    for(var i = 1; i<=1000; i++){
        result = result.add((new BigNumber(i)).pow(i));
    }

    var numbers = '';
    for(i=0;i<10;i++){
        numbers += result.mod(10).toString();
        result = result.div(10).trunc();
    }

    return result;
};