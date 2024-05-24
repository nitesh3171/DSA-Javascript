// Find the Second Largest Element
// Given an array of n integers, write a program to find the second largest element in the array.


function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array should have at least two elements";
    }

    var largest = -Infinity;
    var secondLargest = -Infinity;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    if (secondLargest === -Infinity) {
        return "There is no second largest element";
    }

    return secondLargest;
}


var arr = [12,35,1,10,34,1]; 
console.log(findSecondLargest(arr)); 
