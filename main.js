$(document).ready(function(){

    var values = [];

    $("#btn-sum").on('click', function(){
        GatherValues("+");
    });

    $("#btn-dif").on('click', function(){
        GatherValues("-");
    });

    $("#btn-pro").on('click', function(){
        GatherValues("*");
    });

    $("#btn-quo").on('click', function(){
        GatherValues("/");
    });

    $("#btn-rand").on('click', function(){
        GatherValues("random");
    });

    //Gather user input values
    function GatherValues(operator){
        var value1 = $('#input1').val();
        var value2 = $('#input2').val();
        var value3 = $('#input3').val();
        var value4 = $('#input4').val();
        var value5 = $('#input5').val();

        values = [];
        values.push(value1, value2, value3, value4, value5);

        if(operator == "+"){
            Sum(values);
        }
        else if(operator == "-"){
            Difference(values);
        }
        else if(operator == "*"){
            Product(values);
        }
        else if(operator == "/"){
            Quotient(values);
        }
        else{
            RandomMaths(values);
        }
    }

    //Find sum
    //We parse as int because JS wants to treat these values as strings, concatenating them together instead of adding.
    function Sum(vals){
        var sum = parseInt(vals[0]);
        for(var i = 1; i < vals.length; i++){
            sum = sum + parseInt(vals[i]);
        }
        Result(vals, sum, "+");
    }

    //Find the difference
    function Difference(vals){
        var dif = vals[0];
        for(var i = 1; i < vals.length; i++){
            dif = dif - vals[i];
        }
        Result(vals, dif, "-");
    }

    //Find the product
    function Product(vals){
        var prod = vals[0];
        for(var i = 1; i < vals.length; i++){
            prod = prod * vals[i];
        }
        Result(vals, prod, "*");
    }

    //Find the quotient
    function Quotient(vals){
        var quot = vals[0];
        for(var i = 1; i < vals.length; i++){
            quot = quot / vals[i];
        }
        Result(vals, quot, "/");
    }

    //Randomize maths!
    function RandomMaths(vals){

        //Define the operators we can pick from.
        var operators = ["+", "-", "*", "/"];

        //Empty array to store our randomly selected operators.
        var selectedOperators = [];

        var quot = vals[0];
        for(var i = 1; i < vals.length; i++){

            //Pick a random operator from the operators array.
            var randomOperator = operators[Math.floor(Math.random()*operators.length)];
            quot = eval(quot + randomOperator + vals[i]);

            //Push our selected operator to the selectedOperators array.
            selectedOperators.push(randomOperator);
        }
        RandomResult(vals, quot, selectedOperators);
    }

    function Result(input, output, operation){

        //Convert input array to string and replace commas with the propper operators.
        input = input.toString().replace(/,/g, operation);
        var outputText = input + " = " + output;

        document.getElementById('output').innerHTML = outputText;

    }

    function RandomResult(input, output, selectedOperators){

        //Concatenate each operator to the end of each value we input.
        for(var i = 0; i < selectedOperators.length; i++){
            input[i] = input[i] + selectedOperators[i];
        }

        //Convert input array to string and replace commas with empty string.
        input = input.toString().replace(/,/g, "");
        var outputText = input + " = " + output;

        document.getElementById('output').innerHTML = outputText;

    }

});