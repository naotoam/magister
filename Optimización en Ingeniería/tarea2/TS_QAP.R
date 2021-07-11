# arr de la lista tabu y la lista de los vecinos encontrados
# esta función debe devolver la mejor solución sin que haya sido prohibido
# o a menos que este todo prohibido nos, quedaremos con la mejor solución
# si es que la encuentra
# i = tamaño de la intensidad, cuyo valor por defecto es 1
BuscarVecinoTabu <- function(tabuShortArr, tabuMediumArr, sv, fit, i = 1){
  #pos_min = which.min(sv)
  # si el movimiento no esta prohibido para es min
  #if(tabuArr[pos_min][i_] == 0){
  #  r = list(pos = pos_min, fit = sv[pos_min])
  #  return(r)
  #}
  new_sv = sort(sv, decreasing = F)
  temporal = 0
  
  #comportamiento de memoria de mediano plazo, guardamos los top 5 vecinos.
  for (k in 1:5) {
    min = new_sv[k]
    pos_real = as.numeric(match(c(min), sv))
    i_ = as.numeric(pos_real + i)
    if(i_ > 26){
      i_ = as.numeric(i_ -26)
    }
    tabuMediumArr[pos_real,i_] = as.integer(tabuMediumArr[pos_real,i_]) + 1
  }
  #comportamiento de memoria de corto plazo
  for (j in 1:length(sv)) {
    min = new_sv[j]
    pos_real = match(c(min), sv)
    i_ = pos_real + i
    if(i_ > 26){
      i_ = i_ -26
    }
    #si no está prohibido, devuelve el mejor valor de la vecindad.
    if(tabuShortArr[pos_real, i_] == 0){
      r = list(pos = pos_real, fit = sv[pos_real], tsm = as.matrix(tabuMediumArr))
      return(r)
    }
    #si está prohibido, entonces devolverá el siguiente mejor valor de la vecindad
    #siempre cuando sea mejor que el fit actual
    else{
      #si la encuentra en la memoria, se revisa si es mejor solución de igual manera.
      if(min < fit & min < temporal){
        temporal = min
      }
    }
  }
  valor_min_tabu = match(c(temporal), sv)
  r = list(pos = valor_min_tabu, fit = temporal,  tsm = as.matrix(tabuMediumArr))
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

  #
  rep <- 0
  sol <- sample(1:instancia$n,instancia$n,replace=F)
  fitness<-evaluarQAP(sol,instancia$f,instancia$d)
  largo = length(sol)
  tabu_long <- matrix(0, nrow = largo, ncol = largo)
  tabu_medium <- matrix(0, nrow = largo, ncol = largo)
  tabu_short <- matrix(0, nrow = largo, ncol = largo)
  print("solucion inicial")
  print(sol)
  #variables que deben ser dinámicas
  t_corto = 5
  t_mediano = 10
  #
  
  while (rep < repeticiones) {
    #Se guardaran las soluciones, donde la posicion indica la permutacions realizada
    #En este caso serán solo 25 permutaciones, ya que el último elemento no puede permutar, bajo la lógica
    #del swap. sv = soluciones vecinas
    sv = matrix(nrow = 1, ncol = largo-1)
    # intensificación
    for (j in 1:5) {
      #Vamos a generar soluciones vecinas
      for (i in 1:25) {
        ij_ = i+j
        if( ij_>26){
          ij_ = ij_ - 26
        }
        vecino<-swap(sol,i, ij_)
        Cvecino<-evaluarQAP(vecino,instancia$f,instancia$d)
        sv[i] <- Cvecino
      }
      #encuentro la posición del swap realizado
      #guardo este movimiento en la memoria de corto plazo si es que no lo ha sido anteriormente
      p = BuscarVecinoTabu(tabu_short, tabu_medium, sv, fitness, j)
      pos = as.integer(p["pos"])
      #prohibición
      j_ = pos + j
      if(j_>26){
        j_ = j_ - 26
      }
      tabu_short[pos,j_] = t_corto
      tabu_short = apply(tabu_short,c(1, 2), restar)
      sol <-swap(sol,pos, j_)
      tabu_medium = p$tsm
    }
    rep <- rep + 1
  }
  e = evaluarQAP(sol,instancia$f,instancia$d)
  return(list(ts = tabu_short, sol = sol, fit = e, tsm = tabu_medium))
}

TS_QAP('bur26a.dat', 10)

