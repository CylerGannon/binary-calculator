const input = "1000*1000";
const operators = ["+","-","*","/"];

let binaryArr =[];
let binaryString;

let decimal;

let resultArr = [];
let resultString;


for(let i=0; i < input.length; i++) {

    /*if the character is an operator ==>
        -convert binary number to decimal
        -push the decimal to the result array
        -push the operator to the result array
    */
    if( operators.includes(input.charAt(i)) ) {
        console.log("Found an operator");

        binaryString = binaryArr.join("");
        console.log("binaryString updated to: " + binaryString);

        decimal = parseInt(binaryString, 2);
        console.log("decimal updated to: " + decimal);

        resultArr.push(decimal);
        console.log("Result Array updated to: " + resultArr);

        resultArr.push(input.charAt(i));
        console.log("Result Array updated to " + resultArr);

        binaryArr = [];
        console.log("Reset binaryArr to " + binaryArr);

    } else { 
        
        /*if the character is the last character ==>
            -push it to the binary array
            -convert binary number to decimal
            -push it to the result array
            -calculate the result array
            */
        if ( i == input.length-1) {

            console.log("Reached the last character")

            binaryArr.push(input.charAt(i));
            binaryString = binaryArr.join("");
            console.log("binaryString updated to: " + binaryString);

            decimal = parseInt(binaryString, 2);
            console.log("decimal updatd to: " + decimal);

            resultArr.push(decimal);
            console.log("Result Array updated to: " + resultArr);

            resultString = resultArr.join("");
            console.log("resultString updated to: " + resultString);

            decimal = eval(resultString);
            console.log("decimal updated to: " + decimal);

            //res.innerHTML = decimal;
        } else {
            
            binaryArr.push(input.charAt(i));
            console.log("binaryArr updated to: " + binaryArr);
        }
    }
}