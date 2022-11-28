function nextLargest(array,value)
{
    let x=0;
    let dist=[];
    for(var i=0;i<array.length;i++)
    {
        if(value==array[i])
        {
            x=i;
        }
    }

    for(var i=0;i<array.length;i++)
    {
       if(array[i]>value)
       {
         var temp=Math.abs(x-i);
         dist.push(temp);
       }
    }
     let result;
    let dummy;
    for(var i=0;i<dist.length-1;i++)
    {
      dummy=Math.min(...dist);
    }
    result=array[dummy+x];
    console.log(result);
}

var arr=[1,4,3,2,5,7];
nextLargest(arr,1);