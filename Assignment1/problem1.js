// Two Sum problem
var nums = [7, 11, 15, 1, 8];
var target = 16;

var twoSum = function(nums, target) {
    for(i=0;i<=nums.length-1;i++)
    {
            for(j=i+1;j<=nums.length-1;j++)
            {
                const sum = Number(nums[i])+Number(nums[j]);
                if(sum === target)
                {
                    return [i,j];
                } 
             }
              
    }
};
 
var result = twoSum(nums, target);
console.log(result); 