//[1,2,3,4,5,6,7] k=[3]=>[5,6,7,1,2,3,4]
function rotate(arr,k){

//approcah 1
// const rot=arr.splice(arr.length-k,arr.length)
// arr.unshift(...rot)

//approach 2
arr=arr.reverse()
let i=0
k=k-1
while(i<k){
let temp=arr[i]
arr[i]=arr[k]
arr[k]=temp
i++;
k--;
}


console.log(arr)
}
rotate([1,2,3,4,5,6,7],3)