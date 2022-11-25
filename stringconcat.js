//creating a variable
var greeting="Hello";
var name="World";

//displaying an alert message
var text=alert(greeting+name);

//replacing the letters in a variable and printing the same
var text1="Hello World";
var result=text1.replace(/l/g, "1");
result =result.replace(/o/g, "0");
console.log(result);

//string reverse
function reverseString(str)
{ 
    var newString="";
    for (var i = str.length - 1; i >= 0; i--)
    { 
        newString += str[i]; 
    }
    return newString;
}
console.log(reverseString('hello'));



 