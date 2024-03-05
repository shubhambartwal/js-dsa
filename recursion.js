// function multiply(arr){
//     let product=1
//     for(let i=0;i<arr.length;i++){
//         product*=arr[i]
//     }
//     return product;
// }
//  console.log(multiply([1,2,3,4,5]))

//recursive approach
// function mulrecur(arr)
// {
//     console.log(arr)
//     if(arr.length<=0)
//     {
//         return 1
//     }

//     return arr[arr.length-1]*mulrecur(arr.slice(0,arr.length-1))
// }
// console.log(mulrecur([1,2,3,4,5]))

// factorial of n
// n=>5*4*3*2*1
// function factorial(n)
// {if(n==0)
//     return 1
//     return n*factorial(n-1)
// }
// console.log(factorial(5))

//rangeOfNumbers->ip->1,5->op->1,2,3,4,5
// function rangeOfNumbers(starNum,endNum){
//     if(endNum<starNum)
//     return[]
// const number=rangeOfNumbers(starNum,endNum-1)
// number.push(endNum)
// return number
// }
// console.log(rangeOfNumbers(1,5))

//palindrome 
//121->true


//fabonacii
//[0,1,1,2,3,5,8...]
// function fabonaci(n){
//     if(n<=1)
//     return n;
// return fabonaci(n-1)+fabonaci(n-2)
// }
// console.log(fabonaci(15))

// reverse string

//all possible subset or power set
