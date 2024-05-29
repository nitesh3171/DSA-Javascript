// Rotate a Matrix by 90 Degrees
// Given a 2D array (matrix), write a program to rotate the matrix by 90 degrees clockwise.

function rotateMatrix90Clockwise(matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    
    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
    
    return matrix;
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let rotatedMatrix = rotateMatrix90Clockwise(matrix);
console.log(rotatedMatrix);
