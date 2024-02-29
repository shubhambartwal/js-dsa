//[12,35,1,10,34,1]->34
//[10,5,10]->5

// Array.from()->it creates array from given values

function secondLargest(Arr){
    //approach 1
    // const uniqArr=Array.from(new Set(Arr))
    // uniqArr.sort((a,b)=> b-a)
    // return (uniqArr.length>=2)?uniqArr[1]:-1

    //approach 2
let largest=-1
let secondlargest=-1;
for(let i=0;i<Arr.length;i++){
    if(Arr[i]>largest){
        secondlargest=largest;
        largest=Arr[i]
    }else if(Arr[i]!=largest && Arr[i]>secondlargest){
        secondlargest=Arr[i];
    }
}
return secondlargest;
}
console.log(secondLargest([12,35,1,10,34,1]))