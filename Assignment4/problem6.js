// Find the Saddle Point in a Matrix
// A saddle point is an element of the matrix which is the minimum element in
//  its row and the maximum in its column. Write a program to find the saddle point in the matrix.

function findSaddlePoint(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {
        let minRowValue = matrix[i][0];
        let minColIndex = 0;
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] < minRowValue) {
                minRowValue = matrix[i][j];
                minColIndex = j;
            }
        }

        let isSaddlePoint = true;
        for (let k = 0; k < rows; k++) {
            if (matrix[k][minColIndex] > minRowValue) {
                isSaddlePoint = false;
                break;
            }
        }

        if (isSaddlePoint) {
            return { row: i, column: minColIndex, value: minRowValue };
        }
    }

    return null;
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let saddlePoint = findSaddlePoint(matrix);
if (saddlePoint) {
    console.log(`Saddle Point found at row ${saddlePoint.row}, column ${saddlePoint.column} with value ${saddlePoint.value}`);
} else {
    console.log("No Saddle Point found in the matrix.");
}
