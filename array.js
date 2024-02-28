//array declearation
// let arr= new Array();
//or
let arr=["apple","mango","banana"]

//length
// console.log(arr1.length)

//add and remove
// arr.push('orange')//add to last
// arr.pop()//delete from last
// arr.unshift('abb')//add to the begining
// arr.shift()//delete from begining

//loops
//for
// for(let i=0;i<arr.length;i++)
// console.log(arr[i])

//while
// let i=0;
// while(i<arr.length){
//     console.log(arr[i])
//     i++
// }

//do while
// let i=0;
// do{
// console.log(arr[i])
// i++
// }while(i<arr.length)

const numbers=[1,2,3,4,5]
//map ->returns an new array ,used for transform/modification
//takes 3 aurg item ,index ,array 
// numbers.map((item,index,array)=>{
//     console.log(item,index,array)
// })
// const n=numbers.map((num)=> num+1)
// console.log(n)

//filter->takes condition and return those who satisfy that condition
//returns a new array
//takes 3 aurg item ,index ,array 
// const m= numbers.filter((num)=>{if(num%2==0){
//     return num
// }})
// console.log(m)

//reduce=>takes  4 aurg (accumulator,item ,index ,array)
//its reduce array down to one value
// const n= numbers.reduce((prev,item)=>{return prev+item},0)//0 is the initial value of prev
// console.log(n)

//some ->return boolean value if condition is satisfy for any element of array
// const res=numbers.some((item)=>item==2)
// console.log(res)//true in this case

//every ->return a bool value if all element satify the condition
// const res=numbers.every((item)=>item>0)
// console.log(res)

//find->return the element if the condition is satisfied else undefined
// const res=numbers.find((item)=>item>3)
// console.log(res)//4

//spread and rest operators
 const num=[8,9,10]
// const finalNums=[...numbers,...num]//spread operator
// console.log(finalNums)
// function sum(...numbers){//rest operator
//     return numbers
// }
// console.log(sum(numbers,num,5,"hello"))

//more array methods

//concat->returns a new array without modifing the older one
// const n=numbers.concat(num)
// console.log(n)

//slice->returns a copy of a section of an array exclude the ending index
// const n= num.slice(0,2)
// const n= num.slice(-2)//last 2 index
// console.log(n)

//splice->remove element from the array if necessary add new elements to array
// in there place returning deleted elements
//it makes changes to original array
//2 variation 1)only delete 2) delete and add new item to that place
// console.log(numbers)
// const m= numbers.splice(1,2,10,11,12,13)
// console.log(m)
// console.log(numbers)

//fill->fills the array with the item 
//ending index is excluded
// numbers.fill(0,1,3)
// console.log(numbers)

//findIndex->return the index of the first element in the array
//where predicate is true -1 otherwise
// const i=numbers.findIndex((item)=>item===2)
// console.log(i)

//flat->remove all the array inside the array and make a single array
//having all the elements of inside array
//provide depth upto which level we have to flaten in my case its 2
// const x=[1,2,3,['a','w','r'],[8,9,6],[11,[5,6]]]
// const sol=x.flat(2)
// console.log(sol)

//reverse
// numbers.reverse()
// console.log(numbers)

//sort
// const unsorted=[5,3,2,7,6,1,2]
// //it take smaller=accending equal=inorder bigger=decending
// unsorted.sort((a,b)=> (a-b))
// console.log(unsorted)
