// Count Frequency of Elements
// Given an array of n integers, write a program to count the frequency of each element in the array.

function countFrequency(arr) {
    var frequency = {};
    
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        
        if (frequency[element]) {
            frequency[element]++;
        } 
      
        else {
            frequency[element] = 1;
        }
    }
    
    return frequency;
}


var arr = [1,2,2,3,3,3,4,4,4,4];
console.log(countFrequency(arr)); 
