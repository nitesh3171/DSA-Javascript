// Search in a Row-Wise and Column-Wise Sorted Matrix
// Given a matrix where each row and each column is sorted in ascending order, 
// write a program to search for a given number in the matrix.

function searchMatrix(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    let rows = matrix.length;
    let cols = matrix[0].length;
    let row = 0;
    let col = cols - 1;

    while (row < rows && col >= 0) {
        if (matrix[row][col] === target) {
            return true; 
        } else if (matrix[row][col] > target) {
            col--; 
        } else {
            row++; 
        }
    }

    return false; 
}

// Example usage:
let matrix = [
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [27, 29, 37, 48],
    [32, 33, 39, 50]
];
let target = 29;

let result = searchMatrix(matrix, target);
console.log(result); 
