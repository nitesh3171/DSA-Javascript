// Find the Intersection of Two Arrays
// Given two arrays, write a program to find their intersection. The intersection should 
// contain only the unique elements present in both arrays.

function findIntersection(arr1, arr2) {
    var intersection = [];
    
    var set = new Set(arr1);
    
    for (var i = 0; i < arr2.length; i++) {
        if (set.has(arr2[i]) && !intersection.includes(arr2[i])) {
            intersection.push(arr2[i]);
        }
    }
    
    return intersection;
}

var arr1 = [1,2,2,1];
var arr2 = [2,2];
console.log(findIntersection(arr1, arr2)); 
