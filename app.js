/*
let name="riyan khan";
let incomeAmount=3000;
let expenseAmount="expense=2000";

console.log(name);
console.log(incomeAmount);
console.log(expenseAmount);

let text=prompt("enter your name");
 
document.writeln(text.length);

let tex="riyan";
document.writeln(tex.toUpperCase());

let text1="riyan";
let text2="khan mamun";
document.writeln(text1 + text2);


....................................................................

let nam1=prompt("enter your fast name");
let nam2=prompt("enter your last name");

let fullname=nam1 + nam2;

document.writeln(fullname);
document.writeln(fullname.length);
document.writeln(fullname.toUpperCase());
document.writeln(fullname.charAt( 1 ));
*/


/*
................../////////////////////////////........................................
let name=("riyan khan mamun");

let inc=("3750.25");
let exp=("$2580.5")


document.writeln(name. toUpperCase() + " <br> ");

document.writeln("Total Income: " + "$" + inc + " <br> ");

document.writeln("Total Expenses: " + exp +" <br> ");

..................................................................................

const name=("riyan khan mamun");
const inc=("3750.25");
const exp=("$2580.5")

 
console.log( typeof+inc);
console.log(name. toUpperCase() );

console.log("Total Income: " + "$" + inc );

console.log("Total Expenses: " + exp );
*/

//Arithmetic operator////////////////////////////////////////
/*
let sum=(6+7);
let sums=(8-3);

let total=(sum + sums);


document.writeln(sum +"<br>" );

document.writeln(sums + "<br>");

document.writeln(total);
*/

/// assignment operator/////////////////////////////////////////////////
////////             = ,+= , -=, /= 

/*

let y=8;

y +=6;

document.writeln(y +"<br>");

let m=8;
m -=6;
document.writeln(m+"<br>");


let n=8
n /=9;
document.writeln(n+"<br>");

*/
/*
let num1=prompt("fist number");
let num2=prompt("second number");

num1 = parseInt(num1,10);
num2 = parseInt(num2,10);

let sum, sub;

sum = num1+num2;

document.writeln(" = " + sum);
 */

///////////////////////////////////area shapes/////////////////////////
/*
let base=parseFloat(prompt("fast valu"));
let height=parseFloat(prompt("second valu"));

let area= (base*height) /2 ;

document.writeln(area);



let cel=parseFloat(prompt("inter celsius"))

let cels=(cel-35)*(5/9);

document.writeln("fahrenheit=" + cels);



let cel=parseFloat(prompt("inter celsius : "));

let cels=(cel*9/5)+32;

document.writeln("fahrenheit= " + cels);



/// DO This Problem Solv////////////////////////////////////

/*
challenze Requirements:
use arithmetic operators |+, -, * , 1, %) to
eNewlate total expenses by summing multiple expenses such as rent,
 moceries transport, entertaenment.
Apply tax deduetion (eig 10% of income )
caleulate savins percentane (e. n, 20%, of remaining balanee).
update console outpat to display the new caleulation
* Expected console output:
- Personal Budget tracker usen: John Doe
*Total income : $ 5000
*Total expenses: $2300
*Tex Deducted (10% ) ; $ 500
*Remaining Balance , 2200
*savings (20% of Bldance); 440


/// Solv This______________________ ___________________________ ___

*/
/*

let use=("john Done");

let inc=("5000");

let  exp=(2300);

let exps=("return, transport, entertanment = $");

let detex=(inc*0.1);

let wtex=(inc - detex);

let all=(exp+detex);


let bal=( wtex - exp);

let sav=(bal*0.2);



document.writeln("user : " + use + "<br>");

document.writeln("Total Income : $" + inc + "<br>");

document.writeln(exps + exp  + " (expenses) " + " <br>");

document.writeln( "Tex Deducted : $" + detex + "<br>");

document.writeln( " All expenses : $" + all + "<br>");

document.writeln("Remaining Balance : $" +bal+ "<br>")

document.writeln("savings balance : $" + sav)

*/



//relational operator///////////////////////////////////////
/*
let n1=30;
let n2=45;

document.writeln(n1 > n2);

let n3=30;
let n4=45;

document.writeln(n1 >= n2);

let n5=30;
let n6=55;

document.writeln(n1 < n2);  

document.writeln(n5 <= n6);

document.writeln(n5==n5);
 document.writeln(n6==n5);
*/
 ////logikal oparetor////////////////

 let numb1=100;
 let numb2=2332;
 let numb3=321;

 document.writeln( numb2>numb1 && numb2>numb3);


document.writeln((numb1>numb2 || numb1>numb3 || numb1<numb2 ) + "<br>" );

let digit=45;
let digit1=50;

document.writeln(!(digit<digit1 )+"\n");
