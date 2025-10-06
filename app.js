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
/*
 let numb1=100;
 let numb2=2332;
 let numb3=321;

 document.writeln( numb2>numb1 && numb2>numb3);


document.writeln((numb1>numb2 || numb1>numb3 || numb1<numb2 ) + "<br>" );

let digit=45;
let digit1=50;

document.writeln(!(digit<digit1 )+"\n");
*/
/*
let mmm=7;

if(mmm %3== 0)
document.writeln("true");

else if(mmm %3 == 1)
document.writeln("false");

else if(mmm %3 == 1)
    document.writeln("right");

else 
document.writeln("incorrect");
*/
/*
let num=prompt("submit your Mark");



if(num < 0 || num > 100)
document.writeln("Invalid");

else if(num >=80 && num<=100)
document.writeln("A+");

else if(num >=70 && num <=79)
document.writeln("A");

else if(num>=60 && num<=69)
document.writeln("A-");

else if(num >=50 && num <= 59)
document.writeln("B+");

else if(num >=45 && unm <=49)
document.writeln("B");

else if(num >=40 && num <=44)
document.writeln("B-");

else if(num >=35 && num <=39)
document.writeln("c");


else if(num >=33 && num <=34)
document.writeln("D");

else
document.writeln("F");



/*

আপনি JavaScript (বা TypeScript) দিয়ে হয়তো নিচের মতোভাবে করতে পারবেন — আমি এখানে দুই ধাপে আলফাবেট ও ভাওয়েল/কনসোনেন্ট চিনে বের করার একটি উদাহরণ দিচ্ছি:

ধাপ ১: একটি স্ট্রিং থেকে আলফাবেট (অক্ষর) গুলো নির্বাচন করা

ধরা যাক, আপনার কাছে একটি স্ট্রিং আছে, যেখানে অনেক ধরনের ক্যারেক্টার আছে (সংখ্যা, স্পেস, বিশেষ চিহ্ন ইত্যাদি)। আপনি শুধু “a–z” বা “A–Z” ক্যারেক্টারগুলো নিতে চান। আপনি নিচের মতো RegExp ব্যবহার করতে পারেন:

function extractAlphabets(str) {
  // গ্লোবাল ওঃকেস ইনসেন্সিটিভ (g,i) ফ্ল্যাগ দিয়ে সব অক্ষরগুলো পাবো
  // [A-Za-z] — শুধু ইংরেজি বড় ও ছোট অক্ষর
  const matches = str.match(/[A-Za-z]/g);
  if (matches) {
    return matches.join("");  // একটি স্ট্রিং হবে, যেখানে শুধু অক্ষর আছে
  } else {
    return "";  // যদি কোনো অক্ষর না থাকে
  }
}

// উদাহরণ:
const mixed = "H3llo, W0rld!123";
const alphabets = extractAlphabets(mixed);
console.log(alphabets);  // “HlloWrld”


বিস্তারিত:

str.match(/[A-Za-z]/g) — এটি একটি অ্যারে রিটার্ন করে, যেখানে স্ট্রিংয়ের প্রতিটি অক্ষর যদি [A-Za-z] প্যাটার্নে মেলে, তা থাকবে।

matches.join("") — অ্যারেটির সব উপাদান (অক্ষর) একটি স্ট্রিংয়ে মিলান করবে।

ধাপ ২: প্রতিটি অক্ষর ভাওয়েল (vowel) নাকি কনসোনেন্ট (consonant) তা নির্ধারণ করা

একটি অক্ষর ভাওয়েল কি না, সেটা চেক করার জন্য একটি সেট বা অ্যারে ব্যবহার করা যায়। উদাহরণস্বরূপ:

function isVowel(ch) {
  // ছোট অক্ষরেই কাজ করি — যদি বড় অক্ষর আসে, তাহলে toLowerCase() দিয়ে কাজ হবে
  const lower = ch.toLowerCase();
  return ["a", "e", "i", "o", "u"].includes(lower);
}

function classifyAlphabets(str) {
  const alphabets = extractAlphabets(str);
  const result = [];
  for (const ch of alphabets) {
    if (isVowel(ch)) {
      result.push({ char: ch, type: "vowel" });
    } else {
      result.push({ char: ch, type: "consonant" });
    }
  }
  return result;
}

// উদাহরণ:
const mixed2 = "AbCdE123XyZ!";
const classified = classifyAlphabets(mixed2);
console.log(classified);
// ফলাফল হবে কিছুটা এইভাবে:
// [
//   { char: "A", type: "vowel" },
//   { char: "b", type: "consonant" },
//   { char: "C", type: "consonant" },
//   { char: "d", type: "consonant" },
//   { char: "E", type: "vowel" },
//   { char: "X", type: "consonant" },
//   { char: "y", type: "consonant" },
//   { char: "Z", type: "consonant" }
// ]

একসাথে একটি কোড ব্লকে সমন্বয়

নিচে পুরো কোড একত্রে:

function extractAlphabets(str) {
  const matches = str.match(/[A-Za-z]/g);
  return matches ? matches.join("") : "";
}

function isVowel(ch) {
  const lower = ch.toLowerCase();
  return ["a","e","i","o","u"].includes(lower);
}

function classifyAlphabets(str) {
  const alphabets = extractAlphabets(str);
  const result = [];
  for (const ch of alphabets) {
    result.push({
      char: ch,
      type: isVowel(ch) ? "vowel" : "consonant"
    });
  }
  return result;
}

// ব্যবহার:
const text = "Hello, OpenAI 2025!";
console.log(classifyAlphabets(text));

কিছু বাড়তি দিক

যদি আপনি ইংরেজির পাশাপাশি অন্য ভাষার অক্ষর (যেমন বাংলা) ও বিবেচনায় নিতে চান, তাহলে RegExp ও ভাওয়েল সেট পরিবর্তন করতে হবে।

যদি স্ট্রিং খুব বড় হয়, performance বিবেচনা করতে হবে — তবে সাধারণ ক্ষেত্রে এই পন্থা ঠিকঠাক চলে।

ফলাফল আপনি চাইলে একটি ম্যাপ (object) বা স্ট্রিং আকারেও নিতে পারেন, যেমন “A: vowel, B: consonant, …” ইত্যাদি


আপনি যদি চান, আমি একটি **ব্রাউজার পরিবেশে রান করানো ছোট একটি HTML+JS উদাহরণ তৈরি করে দিতে পারি (যাতে আপনি সরাসরি ওয়েব পেজে দেখে চালাতে পারেন) — কি করবেন?

*/
/////////////////////////////////////////////////////////////////////

//input a letter and it is vowel or consonant using switch-------------------

/*
let number=prompt("any number ");

switch(number){
  case"0":
  document.writeln("zero");
  break;

  case"1":
  document.writeln("one");
  break;

  case"2":
  document.writeln("two");
  break;


  default:
  document.writeln("invalid");
  break;
}
  */ /*
 let number=prompt("any laters");

 number=number.toLowerCase();

switch(number){
  case"a":
  document.writeln("vowel");
  break;

  case"e":
  document.writeln("vowel");
  break;

  case"i":
  document.writeln("vowel");
  break;


  default:
  document.writeln("invalid");
  break;
}
  */
 /*
 let digits=prompt("nay digit");
 digits=digits.toLowerCase();

 switch (digits) {

  case "a" :
    case "e" :
      case "i":
        case "o":
          case "u":
            document.writeln("vowel");
            break ;




 }
            */

 for(let R = 0; R<=50; R=R+1){
document.writeln("riyan" + "");

 }

 
 for(let R = 0; R<=1000; R=R+1){
document.writeln(R+ "");

 }
