// Boundary elements of a Matrix
// Given a matrix of size n x m. Print the boundary elements of the matrix. 
// Boundary elements are those elements that are not surrounded by elements in all 
// four directions, i.e. elements in the first row, first column, last row, and last column

function printBoundaryElements(matrix) {
    let n = matrix.length;    
    let m = matrix[0].length; 

    if (n === 1) {
        console.log(matrix[0]);
        return;
    }
    if (m === 1) {
        for (let i = 0; i < n; i++) {
            console.log(matrix[i][0]);
        }
        return;
    }

    for (let j = 0; j < m; j++) {
        console.log(matrix[0][j]);
    }

    for (let i = 1; i < n - 1; i++) {
        console.log(matrix[i][m - 1]);
    }

    for (let j = m - 1; j >= 0; j--) {
        console.log(matrix[n - 1][j]);
    }

    for (let i = n - 2; i > 0; i--) {
        console.log(matrix[i][0]);
    }
}

let matrix = [
    [1, 2, 3],
    [5, 6, 7],
    [1, 2, 3]
];

printBoundaryElements(matrix);


 
