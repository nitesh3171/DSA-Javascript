// Find the Common Elements in All Rows of a Matrix
// Given a matrix, write a program to find all common elements present in all rows of the matrix.

function findCommonElements(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

   
    let commonMap = new Map();
    for (let j = 0; j < cols; j++) {
        commonMap.set(matrix[0][j], 1);
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (commonMap.has(matrix[i][j]) && commonMap.get(matrix[i][j]) === i) {
                commonMap.set(matrix[i][j], i + 1);
            }
        }
    }

    let commonElements = [];
    for (let [key, value] of commonMap.entries()) {
        if (value === rows) {
            commonElements.push(key);
        }
    }

    return commonElements;
}

let matrix = [
    [1, 2, 1, 4, 8],
    [3, 7, 8, 5, 1],
    [8, 7, 7, 3, 1],
    [8, 1, 2, 7, 9]
];

let result = findCommonElements(matrix);
console.log(result); 
