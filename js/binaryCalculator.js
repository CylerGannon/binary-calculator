let res = document.getElementById("res");
let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btnClr = document.getElementById("btnClr");
let btnEql = document.getElementById("btnEql");
let btnSum = document.getElementById("btnSum");
let btnSub = document.getElementById("btnSub");
let btnMul = document.getElementById("btnMul");
let btnDiv = document.getElementById("btnDiv");
let operators = ["+","-","*","/"];

btn0.onclick = function() {
    res.insertAdjacentHTML("beforeend", 0);
};

btn1.onclick = function() {
    res.insertAdjacentHTML("beforeend", 1);
};

btnSum.onclick = function() {
    res.insertAdjacentHTML("beforeend", "+");
};

btnSub.onclick = function() {
    res.insertAdjacentHTML("beforeend", "-");
};

btnMul.onclick = function() {
    res.insertAdjacentHTML("beforeend", "*");
};

btnDiv.onclick = function() {
    res.insertAdjacentHTML("beforeend", "/");
};

btnClr.onclick = function() {
    res.innerHTML = "";
};

//This is the function you are currently working on
btnEql.onclick = function() {
 
    const input = res.innerHTML;
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
            binaryString = binaryArr.join("");
            decimal = parseInt(binaryString, 2);
            resultArr.push(decimal);
            resultArr.push(input.charAt(i));
            binaryArr = [];

        } else { /*if the character is the last character ==>
                -push it to the binary array
                -convert binary number to decimal
                -push it to the result array
                -calculate the result array
                */
            if ( i == input.length-1) {
                binaryArr.push(input.charAt(i));
                binaryString = binaryArr.join("");
                decimal = parseInt(binaryString, 2);
                resultArr.push(decimal);
                resultString = resultArr.join("");
                decimal = eval(resultString);
                res.innerHTML = decimal;

            } else {
                binaryArr.push(input.charAt(i));
            }
        }
    }
}