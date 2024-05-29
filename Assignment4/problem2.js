// Transpose of a Matrix
// Given a 2D array (matrix), write a program to find its transpose.

function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let transposedMatrix = [];

    for (let i = 0; i < cols; i++) {
        transposedMatrix[i] = [];
        for (let j = 0; j < rows; j++) {
            transposedMatrix[i][j] = matrix[j][i];
        }
    }

    return transposedMatrix;
}


let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let transposedMatrix = transposeMatrix(matrix1);
console.log(transposedMatrix);
