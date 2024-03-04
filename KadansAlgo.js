//find the subarray with largest sum
// [-2,1,-3,4,-1,2,1,-5,4]->6 [4,-1,2,1]
function maxSubArray(nums){
    let maxSum=nums[0]
   //approach 1
    // for(let i=0;i<nums.length ;i++){
    //     let currSum=0;
    //     for(let j=i+1;j<nums.length;j++){
    //         currSum=currSum+nums[j];
          
    //       maxSum=Math.max(currSum,maxSum)
    //     }
    // }

//kadane algo
sum=0
for(let i=0;i<nums.length  ;i++){
sum+=nums[i];
maxSum=Math.max(maxSum,sum)
if(sum<0)
sum=0

}


    return maxSum
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
