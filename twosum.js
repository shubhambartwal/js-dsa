//[3,2,4],target=6 op-[1,2]

const twoSum=function (nums,target){
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target)
            return [i,j]
        }
    }
    return []
}
const res=twoSum([3,2,4],6)
console.log(res)