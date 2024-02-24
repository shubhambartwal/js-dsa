//121->true
//10 ->false;
 
const isPalindrome=(x)=>{
    return x<0?false:x===+x.toString().split("").reverse().join("")
}
const res=isPalindrome(121);
console.log(res)