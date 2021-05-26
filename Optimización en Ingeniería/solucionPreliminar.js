
var principalMatrix = {
    j1: [2, 3, 1],
    j2: [1, 5, 4]
}
// var principalMatrix = {
//     j1: [54, 83, 15, 71, 77, 36, 53, 38, 27, 87, 76, 91, 14, 29, 12, 77, 32, 87, 68, 94],
//     j2: [79,  3, 11, 99, 56, 70, 99, 60,  5, 56,  3, 61, 73, 75, 47, 14, 21, 86,  5, 77],
//     j3: [16, 89, 49, 15, 89, 45, 60, 23, 57, 64,  7,  1, 63, 41, 63, 47, 26, 75, 77, 40],
//     j4: [66, 58, 31, 68, 78, 91, 13, 59, 49, 85, 85,  9, 39, 41, 56, 40, 54, 77, 51, 31],
//     j5: [58, 56, 20, 85, 53, 35, 53, 41, 69, 13, 86, 72,  8, 49, 47, 87, 58, 18, 68, 28]
// }

// var principalMatrix = {
//     j1: [26, 38, 27, 88, 95, 55, 54, 63, 23, 45, 86, 43, 43, 40, 37, 54, 35, 59, 43, 50],
//     j2: [59, 62, 44, 10, 23, 64, 47, 68, 54,  9, 30, 31, 92,  7, 14, 95, 76, 82, 91, 37],
//     j3: [78, 90, 64, 49, 47, 20, 61, 93, 36, 47, 70, 54, 87, 13, 40, 34, 55, 13, 11,  5],
//     j4: [88, 54, 47, 83, 84,  9, 30, 11, 92, 63, 62, 75, 48, 23, 85, 23,  4, 31, 13, 98],
//     j5: [69, 30, 61, 35, 53, 98, 94, 33, 77, 31, 54, 71, 78,  9, 79, 51, 76, 56, 80, 72]
// }

//https://sci-hub.se/https://www.jstor.org/stable/3007887?seq=1
// Se logra obtener el mismo tiempo
var principalMatrix = {
    j1: [3, 10, 4],
    j2: [30, 4, 5],
    j3: [2, 5, 3]
}

var machines = principalMatrix.j1.length;
var _jobsKeys = Object.keys(principalMatrix);
var combinations = perm(_jobsKeys);
//console.log("Combinaciones: ", combinations);
var jobsQ = _jobsKeys.length;

console.log("Maquinas: ", machines, " Jobs: ", jobsQ);
var permTimings = {};

var matrixTimings = {};
for (var k = 0; k < combinations.length; k++) {
    var jobsKeys = combinations[k];
    for (var j = 0; j < jobsQ; j++) {
        var jobsTiming = [];
        for (var i = 0; i < machines; i++) {
            // primer trabajo en primera máquina
            if (i == 0 && j == 0) {
                jobsTiming.push([0, principalMatrix[jobsKeys[j]][0]]);
            }
            // primer trabajo en máquinas posteriores
            else if (j == 0) {
                var lastOut = jobsTiming[jobsTiming.length - 1][1];
                var afterOut = lastOut + principalMatrix[jobsKeys[j]][i];
                jobsTiming.push([lastOut, afterOut]);
            }
            // segundos trabajos en adelante y primera máquina
            else if (i == 0) {
                var outFirstMachine = matrixTimings[jobsKeys[j - 1]][0][1];
                var afterOut = outFirstMachine + principalMatrix[jobsKeys[j]][i];
                jobsTiming.push([outFirstMachine, afterOut]);
            }
            // segundos trabajos en adelante y de la segunda máquina en adelante
            else {
                var outMachineBefore = jobsTiming[jobsTiming.length - 1][1];
                var outSameMachineJobBefore = matrixTimings[jobsKeys[j - 1]][i][1];
                // caso en que la máquina aún no había terminado del trabajo anterior
                if (outSameMachineJobBefore > outMachineBefore) {
                    var afterOut = outSameMachineJobBefore + principalMatrix[jobsKeys[j]][i];
                    jobsTiming.push([outSameMachineJobBefore, afterOut]);
                }
                // caso en que la máquina estaba disponible, pero la anterior aún no había terminada
                else {
                    var afterOut = outMachineBefore + principalMatrix[jobsKeys[j]][i];
                    jobsTiming.push([outMachineBefore, afterOut]);
                }
            }
        }
        matrixTimings[jobsKeys[j]] = jobsTiming;
    }
    // guardamos el último tiempo de la última máquina del último trabajo
    permTimings[k] = matrixTimings[jobsKeys[jobsQ-1]][machines-1][1];
}
console.log("Tiempos: ", matrixTimings);
//console.log("Tiempos de las permutaciones: ", permTimings);
var a = Object.keys(permTimings).reduce((a, b) => permTimings[a] <= permTimings[b] ? a : b);
console.log("Mejor permutación: ", a, " Tiempo: ", permTimings[a] )


// función que obtiene todas las permutaciones de un arreglo, esto escala n!
function perm(xs) {
    let ret = [];

    for (let i = 0; i < xs.length; i = i + 1) {
        let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));

        if (!rest.length) {
            ret.push([xs[i]])
        } else {
            for (let j = 0; j < rest.length; j = j + 1) {
                ret.push([xs[i]].concat(rest[j]))
            }
        }
    }
    return ret;
}