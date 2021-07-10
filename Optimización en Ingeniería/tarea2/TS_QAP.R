TS_QAP<-function(filename){
  
  instancia<-readQAP(filename)
  tabu_short <- list()
  tabu_medium <- list()
  tabu_long <- list()
  rep <- 0
  while (rep < 2) {
    sol <- sample(1:instancia$n,instancia$n,replace=F)
    print(sol)
    
    fitness<-evaluarQAP(sol,instancia$f,instancia$d)
    tabu_short[rep] <- fitness
    rep <- rep + 1
  }
  return(tabu_short)
}
