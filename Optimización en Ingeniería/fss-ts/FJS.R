readFJS<-function(name){ 
  a <- read.delim(name,header=FALSE, sep ="")
  n<-as.integer(a[1,1])
  m<-as.integer(a[2,1])
  fl<-a[3:(n+2),1:m]
  mat = matrix(unlist(fl), ncol = m, byrow = TRUE)
  d <- list(n=n, f= mat, m=m)
  return(d)
}

swap<-function(sol, i, j){
  piv<-sol[i,]
  sol[i,]<-sol[j,]
  sol[j,]<-piv
  return(sol)
}

# Asumimos que la instancia es una matriz de largo nxn
evaluarFJS<-function(instancia, jobs, machines){
  matrixTimings = matrix(nrow=jobs, ncol = machines*2)
  for(j in 1:jobs){
    jobsTiming <- matrix(nrow = 1, ncol = machines*2)
    for(i in 1:machines){
      if(i == 1 & j == 1){
        jobsTiming[1,2*i-1] = 0
        jobsTiming[1,2*i] = instancia[1,1]
      }
      else if(j == 1){
        lastOut = jobsTiming[1, 2*i-2]
        afterOut = lastOut + instancia[j,i]
        jobsTiming[1,2*i-1] = lastOut
        jobsTiming[1,2*i] = afterOut
      }
      else if(i == 1){
        outFirstMachine = matrixTimings[j-1, 2*i]
        afterOut = outFirstMachine + instancia[j, i]
        jobsTiming[1,2*i-1] = outFirstMachine
        jobsTiming[1,2*i] = afterOut
      }
      else{
        outMachineBefore = jobsTiming[1, 2*i-2]
        outSameMachineBefore = matrixTimings[j-1, i*2]
        if(outSameMachineBefore > outMachineBefore){
          afterOut = outSameMachineBefore + instancia[j, i]
          jobsTiming[1,2*i-1] = outSameMachineBefore
          jobsTiming[1,2*i] = afterOut
        }
        else{
          afterOut = outMachineBefore + instancia[j, i]
          jobsTiming[1,2*i-1] = outMachineBefore
          jobsTiming[1,2*i] = afterOut
        }
      }
    }
    matrixTimings[j,] = jobsTiming
  }
  return(matrixTimings[jobs, 2*machines])
}
instancia = readFJS("data2.dat")
instancia
evaluarFJS(instancia$f, instancia$n, instancia$m)

