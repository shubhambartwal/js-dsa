//rearranging different char in a word.
// rat ->art = true
const  isAnagram=(s,t)=>{
//approach 1=>
s=s.split("").sort().join("")
t=t.split("").sort().join("")
if(s===t)return true
else return false
}
const res=isAnagram("rat","art")
console.log(res)