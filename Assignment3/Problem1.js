// Find the Missing Number
// Given an array of n-1 integers in the range of 1 to n with no duplicates 
// in the array. One of the integers is missing in the array. Find the missing integer.

const arr = [1,2,4,6,3,7,8]; 
const n = 8;

function findMissingNumber(arr, n) {
   
    const totalSum = n * (n + 1) / 2;
    
    var arrSum =0 ;
    for (let i = 0; i < arr.length; i++) {
         
         arrSum +=  arr[i];     
    }
    
    return totalSum - arrSum;
}
console.log(findMissingNumber(arr, n)); 

