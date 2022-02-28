
let matrix = []
let n = 5
let m = 5
for (let i = 0; i < m; i++) {
    matrix[i] = []
    for (let j = 0; j < n; j++) {
        matrix[i].push(Math.round(Math.random()))
    }
}
let side = 40
console.log(matrix);




function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    frameRate(5)
}

function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if  (matrix[y][x] == 1) {
          
            } else if (matrix[y][x] == 0) {
                fill('#acacac')
            }
            rect(x * side, y * side, side, side)
        }
    }
}

