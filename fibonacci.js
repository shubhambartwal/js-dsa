//0,1,1,2,3,5,8
//f(n)
const fabonacci=(n)=>{
   const arr=[0,1]
   for(let i=2;i<=n;i++){
arr.push(arr[i-1]+arr[i-2])
   }
   return arr[n]
}
const res= fabonacci(5)
console.log(res)