//[1,1,1,2,2,3,3,3,4]=>[1,2,3,4]
function removedup(arr){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]==arr[i+1])
        arr.splice(arr[i+1],1)
        i--;
    }
    console.log(arr)
}
removedup([1,1,1,2,2,3,3,3,4]);