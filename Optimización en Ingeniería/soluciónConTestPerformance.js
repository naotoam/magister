//var randomInterger = Math.floor(Math.random() * 100) + 1;
const sets = 10;
BeginTest();


function BeginTest(){
    for(var maxMachine = 1; maxMachine < sets; maxMachine++){
        for(var maxJobs = 1; maxJobs < sets; maxJobs++){
            console.log("Máquinas: "+maxMachine, "Jobs: ",maxJobs)
            var matrix = CreateMatrix(maxMachine, maxJobs);
            console.time('Perfomance')
            Execute(matrix);
            console.log("-------------------------------");
            console.timeEnd('Perfomance')
        }
    }
}

function CreateMatrix (maxMachines, maxJobs) {
    principalMatrix = {};
    for(var job = 0; job < maxJobs; job++){
        var machineTimes = [];
        for(var machine = 0; machine < maxMachines; machine++){
            machineTimes.push(Math.floor(Math.random() * 100) + 1);
        }
        
        principalMatrix["j"+job] = machineTimes;
    }
    console.log("Matriz de tiempos: ", principalMatrix);
    return principalMatrix;
}

function Execute(principalMatrix) {
    var machines = principalMatrix.j0.length;
    var _jobsKeys = Object.keys(principalMatrix);
    var combinations = perm(_jobsKeys);
    //console.log("Combinaciones: ", combinations[22]);
    var jobsQ = _jobsKeys.length;

    //console.log("Maquinas: ", machines, " Jobs: ", jobsQ);
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
        permTimings[k] = matrixTimings[jobsKeys[jobsQ - 1]][machines - 1][1];
        matrixPermutationTimings.push(matrixTimings);
    }
    //console.log("Tiempos: ", matrixTimings);
    //console.log("Tiempos de las permutaciones: ", permTimings);
    var a = Object.keys(permTimings).reduce((a, b) => permTimings[a] <= permTimings[b] ? a : b);
    console.log("Mejor permutación: ", a, " Tiempo: ", permTimings[a]);
    console.log(combinations[a]);
    //console.log(matrixPermutationTimings[a]);

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
}
