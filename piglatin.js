var text = "How are you doing today";
var myArray = text.split(" ");

function pigLatin(myArray){
{

    let letter=myArray.charAt(0);
    var arr=[];
    arr=myArray.slice(1);
    arr=arr+letter+"ay";
    myArray++;
    return arr;

}
}

console.log(myArray.map(pigLatin));





