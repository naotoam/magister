
// Dataset de pruebas
// Paper: https://reader.elsevier.com/reader/sd/pii/037722179390182M?token=08F7346F590A72223B09DA63C10FAAEC2D6E89893F4A3DEE67EA629C66F51EB2087F1C89119B1F0B5154494188AA22D5&originRegion=us-east-1&originCreation=20210529152855

// # 1 : Time seed 88325120
// Tiempo obtenido: 1278
// Tiempo de ejecución: 0.088 sec
// Comentario: Se obtiene el mismo tiempo que en el paper
// var principalMatrix = {
//     j1: [27, 92, 75, 94, 18, 41, 37, 58, 56, 20,  2, 39, 91, 81, 33, 14, 88, 22, 36, 65],
//     j2: [79, 23, 66,  5, 15, 51,  2, 81, 12, 40, 59, 32, 16, 87, 78, 41, 43, 94,  1, 93],
//     j3: [22, 93, 62, 53, 30, 34, 27, 30, 54, 77, 24, 47, 39, 66, 41, 46, 24, 23, 68, 50],
//     j4: [93, 22, 64, 81, 94, 97, 54, 82, 11, 91, 23, 32, 26, 22, 12, 23, 34, 87, 59,  2],
//     j5: [38, 84, 62, 10, 11, 93, 57, 81, 10, 40, 62, 49, 90, 34, 11, 81, 51, 21, 39, 27]
// }

// # 2 : Time seed 573109518
// Tiempo obtenido: 1438
// Tiempo de ejecución: 0.104 sec
// Comentario: NO se obtiene el mismo tiempo que en el paper
// var principalMatrix = {
//     j1: [37, 36,  1,  4, 64, 74, 32, 67, 73,  7, 78, 64, 98, 60, 89, 49,  2, 79, 79, 53],
//     j2: [59, 16, 90,  3, 76, 74, 22, 30, 89, 61, 39, 15, 69, 57,  9, 13, 71,  2, 34, 49],
//     j3: [65, 94, 96, 47, 35, 34, 84,  3, 60, 34, 70, 57,  8, 74, 13, 37, 87, 71, 89, 57],
//     j4: [70,  3, 43, 14, 26, 83, 26, 65, 47, 94, 75, 30,  1, 71, 46, 87, 78, 76, 75, 55],
//     j5: [94, 98, 63, 83, 19, 79, 54, 78, 29,  8, 38, 97, 61, 10, 37, 16, 78, 96,  9, 91]
// }

// # 3 : Time seed 2021925980
// Tiempo obtenido: 1351
// Tiempo de ejecución: 0.108 sec
// Comentario: NO se obtiene el mismo tiempo que en el paper
// var principalMatrix = {
//     j1: [34, 20, 57, 47, 62, 40, 74, 94,  9, 62, 86, 13, 78, 46, 83, 52, 13, 70, 40, 60],
//     j2: [ 5 ,48 ,80 ,43 ,34 , 2 ,87 ,68 ,28 ,84 ,30 ,35 ,42 ,39 ,85 ,34 ,36 , 9 ,96 ,84],
//     j3: [86, 35,  5, 93, 74, 12, 40, 95, 80,  6, 92, 14, 83, 49, 36, 38, 43, 89, 94, 33],
//     j4: [28, 39, 55, 21, 25, 88, 59, 40, 90, 18, 33, 10, 59, 92, 15, 77, 31, 85, 85, 99],
//     j5: [ 8 ,91 ,45 ,55 ,75 ,18 ,59 ,86 ,45 ,89 ,11 ,54 ,38 ,41 ,64 ,98 ,83 ,36 ,61 ,19]
// }

// # 4 : Time seed 1369363414
// Tiempo obtenido: 1368
// Tiempo de ejecución: 0.121 sec
// Comentario: NO se obtiene el mismo tiempo que en el paper
// var principalMatrix = {
//     j1: [15, 64, 64, 48,  9, 91, 27, 34, 42,  3, 11, 54, 27, 30,  9, 15, 88, 55, 50, 57],
//     j2: [28,  4, 43, 93,  1, 81, 77, 69, 52, 28, 28, 77, 42, 53, 46, 49, 15, 43, 65, 41],
//     j3: [77, 36, 57, 15, 81, 82, 98, 97, 12, 35, 84, 70, 27, 37, 59, 42, 57, 16, 11, 34],
//     j4: [ 1, 59, 95, 49, 90, 78,  3, 69, 99, 41, 73, 28, 99, 13, 59, 47,  8, 92, 87, 62],
//     j5: [45, 73, 59, 63, 54, 98, 39, 75, 33,  8, 86, 41, 41, 22, 43, 34, 80, 16, 37, 94]
// }

// FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
var principalMatrix = {
    j1: [74, 21, 58,  4, 21, 28, 58, 83, 31, 61, 94, 44, 97, 94, 66,  6, 37, 22, 99, 83],
    j2: [28,  3, 27, 61, 34, 76, 64, 87, 54, 98, 76, 41, 70, 43, 42, 79, 88, 15, 49, 72],
    j3: [89, 52, 56, 13,  7, 32, 32, 98, 46, 60, 23, 87,  7, 36, 26, 85,  7, 34, 36, 48],
    j4: [60, 88, 26, 58, 76, 98, 29, 47, 79, 26, 19, 48, 95, 78, 77, 90, 24, 10, 85, 55],
    j5: [54, 66, 12, 57, 70, 82, 99, 84, 16, 41, 23, 11, 68, 58, 30,  5,  5, 39, 58, 31],
    j6: [92, 11, 54, 97, 57, 53, 65, 77, 51, 36, 53, 19, 54, 86, 40, 56, 79, 74, 24,  3],
    j7: [9 , 8 ,88 ,72 ,27 ,22 ,50 , 2 ,49 ,82 ,93 ,96 ,43 ,13 ,60 ,11 ,37 ,91 ,84 ,67],
    j8: [4 ,18 ,25 ,28 ,95 ,51 ,84 ,18 , 6 ,90 ,69 ,61 ,57 , 5 ,75 , 4 ,38 ,28 , 4 ,80],
    j9: [25, 15, 91, 49, 56, 10, 62, 70, 76, 99, 58, 83, 84, 64, 74, 14, 18, 48, 96, 86],
    j10: [15, 84,  8, 30, 95, 79,  9, 91, 76, 26, 42, 66, 70, 91, 67,  3, 98,  4, 71, 62]
}

// 20 x 20 -> se congela
// var principalMatrix = {
//     j1: [50, 90, 39, 34, 66, 81, 27, 48, 46, 68, 48, 92, 78, 84, 93, 39, 43,  1, 65, 87],
//     j2: [78, 56,  9, 43, 84, 73, 66, 38, 83, 57, 97, 52, 77, 13, 12,  2, 65, 93, 39,  1],
//     j3: [36, 43, 10, 19, 55, 48, 85, 70, 82, 39, 91, 82, 85, 17,  6, 54, 87, 85,  4, 72],
//     j4: [85, 88, 60, 98,  4, 99, 53, 21, 33, 53, 63, 18, 45, 29, 43, 41, 80,  4, 31, 19],
//     j5: [ 9, 92, 98, 44, 51,  8, 31, 15, 47, 31, 80, 83, 20, 84, 69, 49, 93, 39, 13, 88],
//     j6: [75, 64, 96, 95, 22, 41, 26, 33, 68,  9, 81, 28, 61, 69, 37, 57, 36, 80, 96, 74],
//     j7: [46, 94,  6, 19, 20, 51, 85, 92, 43, 75, 70, 70, 36, 31, 76, 63, 89, 46, 25, 88],
//     j8: [73,  3, 56, 73, 80, 82, 36, 98, 90, 46, 10, 46, 65, 83, 75, 47, 61, 28, 59, 22],
//     j9: [71, 49, 36, 87,  8, 25, 76, 73, 80,  6,  6, 33, 79, 10, 93, 65, 26, 73, 42, 18],
//     j10: [ 7, 40, 33, 64,  5, 25, 89, 95, 58, 83, 28, 35, 74,  5,  6,  9,  3,  2, 35, 41],
//     j11: [49, 49, 15, 18, 65, 55,  1, 79, 10, 37, 77, 80, 79, 84, 93, 21, 85, 64, 46, 35],
//     j12: [ 3, 53, 59,  7, 65, 58, 24, 55, 26, 40, 89, 94, 51, 74, 54, 86, 22, 83, 19, 44],
//     j13: [60, 88, 15, 26, 11, 16, 55, 59, 81, 53, 92, 23, 55, 79, 13, 89,  2, 17, 97, 41],
//     j14: [12, 47, 46, 17, 43, 16, 91, 94, 73, 89, 12, 58, 25, 24, 55,  1, 67,  3,  1, 71],
//     j15: [75, 19, 60, 87, 27, 48, 72, 88, 48, 59, 74, 86, 49, 94, 15, 95, 41, 94, 15, 71],
//     j16: [31, 61, 47, 32, 34, 69, 32,  1,  1, 80, 19, 57, 98, 37, 31, 51, 66, 38, 62, 72],
//     j17: [70, 78, 41,  9, 47, 94, 26, 65, 17, 42, 59, 80,  7, 75, 63, 96,  7, 10, 47, 38],
//     j18: [20, 78, 38, 26, 64, 62, 11, 38, 68, 37, 74,  9, 65, 16, 38, 85, 50, 62, 39, 97],
//     j19: [88, 30, 34, 33, 21,  7, 94, 10, 73, 85, 82, 62, 99, 67, 61, 10,  4, 70, 31, 49],
//     j20: [ 9, 41, 22, 34, 83, 55,  3,  8, 75, 30, 57, 65, 89, 60, 90, 84, 74, 17,  2, 19]
// }

//https://sci-hub.se/https://www.jstor.org/stable/3007887?seq=1
// Se logra obtener el mismo tiempo
// var principalMatrix = {
//     j1: [3, 10, 4],
//     j2: [30, 4, 5],
//     j3: [2, 5, 3]
// }
//https://www.sciencedirect.com/science/article/pii/S187770581201939X
// Con método heurístico se aproxima, pero no es exacto, según el paper da 49.
// var principalMatrix = {
//     j1: [10, 2, 7, 2, 5],
//     j2: [ 8, 3, 6, 5, 9],
//     j3: [ 3, 7, 1, 3, 4],
//     j4: [ 5, 4, 2, 1, 6]
// }


//https://www.researchgate.net/publication/324160684_Application_of_Branch_and_Bound_algorithm_for_solving_flow_shop_scheduling_problem_comparing_it_with_Tabu_search_algorithm
// método de branch & bound 
// se obtiene el mismo valor y misma permutación
// var principalMatrix = {
//     j1: [77, 11, 82],
//     j2: [34, 92,  8],
//     j3: [88, 36, 30],
//     j4: [ 1 ,98 , 9]
// }
// var principalMatrix = {
//     j0: [ 7, 18, 95 ],
//     j1: [ 62, 92, 1 ],
//     j2: [ 74, 50, 11 ],
//     j3: [ 36, 84, 75 ],
//     j4: [ 91, 4, 69 ],
//     j5: [ 65, 67, 47 ]
//}

// var principalMatrix = {
//     j0: [ 53, 27, 96, 94, 52 ],
//     j1: [ 56, 55, 68, 67, 55 ],
//     j2: [ 81, 34, 67, 14, 66 ],
//     j3: [ 86, 4, 73, 21, 86 ],
//     j4: [ 25, 8, 33, 61, 49 ],
//     j5: [ 43, 46, 63, 34, 53 ],
//     j6: [ 92, 93, 6, 2, 56 ]
// }

var machines = principalMatrix.j1.length;
var _jobsKeys = Object.keys(principalMatrix);
var combinations = perm(_jobsKeys);
//console.log("Combinaciones: ", combinations[22]);
var jobsQ = _jobsKeys.length;

console.log("Maquinas: ", machines, " Jobs: ", jobsQ);
var permTimings = {};

var matrixTimings = {};
var matrixPermutationTimings = [];
for (var k = 0; k < combinations.length; k++) {
    matrixTimings = {};
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
    matrixPermutationTimings.push(matrixTimings);
}
//console.log("Tiempos: ", matrixTimings);
console.log("Tiempos de las permutaciones: ", permTimings);
var a = Object.keys(permTimings).reduce((a, b) => permTimings[a] <= permTimings[b] ? a : b);
console.log("Mejor permutación: ", a, " Tiempo: ", permTimings[a] )
console.log(matrixPermutationTimings[a]);

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