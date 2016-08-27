const compA = [{
  estado: 'aq', 
  atomos: 
  [
    {name: 'Na', coeficiente: 1, indice: 2}, 
    {name: 'S', coeficiente: 1, indice: 1}]
  }]
   // A
const compB = [{
  estado: 'aq', 
  atomos: 
  [
  {name: 'H', coeficiente: 1, indice: 1}, 
  {name: 'Cl', coeficiente: 1, indice: 1}]
  }] // B
const compC = [{
  estado: 's', 
  atomos: 
  [
  {name: 'Na', coeficiente: 1, indice: 1}, 
  {name: 'Cl', coeficiente: 1, indice: 1}]
  }] // C - A
const compD = [{
  estado: 'g', 
  atomos: 
  [
  {name: 'H', coeficiente: 1, indice: 2}, 
  {name: 'S', coeficiente: 1, indice: 1}]
  }] // D - B
const comps = [
  compA,
  compB,
  compC,
  compD
]

console.log ('comps', comps)