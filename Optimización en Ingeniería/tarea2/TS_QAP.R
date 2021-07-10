# arr de la lista tabu y la lista de los vecinos encontrados
# esta función debe devolver la mejor solución sin que haya sido prohibido
# o a menos que este todo prohibido nos, quedaremos con la mejor solución
# si es que la encuentra
# i = tamaño de la intensidad, cuyo valor por defecto es 1
BuscarVecinoTabu <- function(tabuArr, sv, fit, i = 1){
  pos_min = which.min(sv)
  # si el movimiento no esta prohibido para es min
  if(tabuArr[pos_min][i] == 0){
    r = list(pos = pos_min, fit = sv[pos_min])
    return(r)
  }
  new_sv = sort(sv, decreasing = F)
  temporal = 0
  for (j in 2:length(sv)) {
    min = new_sv[j]
    pos_real = match(c(min), sv)
    if(tabuArr[pos_real][i] == 0){
      r = list(pos = min, fit = sv[pos_real])
      return(r)
    }
    else{
      #si la encuentra en la memoria, se revisa si es mejor solución de igual manera.
      if(min < fit & min < temporal){
        temporal = min
      }
    }
  }
  valor_min_tabu = match(c(temporal), sv)
  r = list(pos = valor_min_tabu, fit = temporal)
  return(r)
}

restar = function(x){
  if(x > 0){
    x-1
  }
  else{
    0
  }
}

TS_QAP<-function(filename, repeticiones){
  
  instancia<-readQAP(filename)

  #tabu_medium <- list()
  rep <- 0
  sol <- sample(1:instancia$n,instancia$n,replace=F)
  fitness<-evaluarQAP(sol,instancia$f,instancia$d)
  largo = length(sol)
  tabu_long <- matrix(0, nrow = largo, ncol = largo)
  tabu_short <- matrix(0, nrow = largo, ncol = largo)
  print("solucion inicial")
  print(sol)
  #variables que deben ser dinámicas
  t_corto = 5
  #
  
  while (rep < repeticiones) {
    #Se guardaran las soluciones, donde la posicion indica la permutacions realizada
    #En este caso serán solo 25 permutaciones, ya que el último elemento no puede permutar, bajo la lógica
    #del swap. sv = soluciones vecinas
    sv = matrix(nrow = 1, ncol = largo-1)
    #Vamos a generar soluciones vecinas
    for (i in 1:25) {
      vecino<-swap(sol,i,i+1)
      Cvecino<-evaluarQAP(vecino,instancia$f,instancia$d)
      sv[i] <- Cvecino
    }
    #print("soluciones vecinas")
    #print(sv)
    #encuentro la posición del swap realizado
    #guardo este movimiento en la memoria de corto plazo si es que no lo ha sido anteriormente
    p = BuscarVecinoTabu(tabu_short, sv, fitness, 1)
    pos = as.integer(p["pos"])
    tabu_short[pos,pos+1] = t_corto
    tabu_short = apply(tabu_short,c(1, 2), restar)
    sol <-swap(sol,pos, pos+1)
    rep <- rep + 1
  }
  e = evaluarQAP(sol,instancia$f,instancia$d)
  return(list(ts = tabu_short, sol = sol, fit = e))
}

TS_QAP('bur26a.dat', 20)
