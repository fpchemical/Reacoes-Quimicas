// const inComposta = [1,1]
// const inSimples = [1]
// const outcomp = [1,3]
// const outSimples = [2]
const compA = [
	{name: 'Na', coeficiente: 1, indice: 2, calculado: false}, 
	{name: 'S', coeficiente: 1, indice: 1, calculado: false}] // A
const compB = [
	{name: 'H', coeficiente: 1, indice: 1, calculado: false}, 
	{name: 'Cl', coeficiente: 1, indice: 1, calculado: false}] // B
const compC = [
	{name: 'Na', coeficiente: 1, indice: 1, calculado: false}, 
	{name: 'Cl', coeficiente: 1, indice: 1, calculado: false}] // C - A
const compD = [
	{name: 'H', coeficiente: 1, indice: 2, calculado: false}, 
	{name: 'S', coeficiente: 1, indice: 1, calculado: false}] // D - B
const comps = [
	compA,
	compB,
	compC,
	compD
]

const achaMoleculaComAtomoIgual = (molecula, name) => {
	delete comps[comps.indexOf(molecula)]
	let result = 0
	comps.forEach((el, i) => {
		el.forEach((atom, i) => {
			// console.log('atom.name', atom.name)
			if(atom.name === name) {
				// console.log('achei o fdp', el)
				result  = el
			}
		})
	})
	return result
} 
	//chama função que acha primeiro coef>1
		let coefIn = compA[0].indice
		// console.log ('coefIn', coefIn)
		//chama função que busca o mesmo 
		//elemento em outra molécula
		let mesmaMolecula = achaMoleculaComAtomoIgual(compA, compA[0].name)
		// console.log('mesmaMolecula', mesmaMolecula)
		let index = 0
		mesmaMolecula.forEach((el, i) => {
			if(el.name === compA[0].name) index = i
		})
		// let index = mesmaMolecula[mesmaMolecula.indexOf(compA[0].name)]
		// console.log('index', index)
	// }
// })
		if (coefIn!==mesmaMolecula[index].indice) {
			console.log ('mesmaMolecula[index].indice', mesmaMolecula[index].indice)
			// busca próximo coef>1 
			const multiCoefC = (el, i) => {
				compC[i].coeficiente = compC[i].indice*coefIn
			}
			compC.forEach(multiCoefC)
			// console.log ('compC', compC)
		}
		//pega elemento que foi modificado
		//e não está balanceado
		coefIn = compD[0].indice
		//chama função que busca o mesmo 
		//elemento em outra molécula

		// mesmaMolecula = compB
		// mesmaMolecula = achaMoleculaComAtomoIgual(compB, compB[0].name)

		let mesmaMolecula = achaMoleculaComAtomoIgual(compA, compA[0].name)
		// console.log('mesmaMolecula', mesmaMolecula)
		let index = 0
		mesmaMolecula.forEach((el, i) => {
			if(el.name === compA[0].name) index = i
		})

		console.log('mesmaMolecula', mesmaMolecula)
			if (coefIn!==compB[0].indice) {

				const multiCoefB = (el, i) => {
					compB[i].coeficiente = compB[i].indice*coefIn
				}
				compB.forEach(multiCoefB)
				// console.log ('compB', compB) 	
			}
			// pega o elemento que ainda não foi balanceado
			coefIn = compD[0].indice
		//chama função que busca o mesmo 
		//elemento em outra molécula
			// mesmaMolecula = compD
		mesmaMolecula = achaMoleculaComAtomoIgual(compD, compD[0].name)
		console.log('mesmaMolecula', compD[0].name, mesmaMolecula)
			if (coefIn!==compD[0].indice) {

				const multiCoefB = (el, i) => {
					compB[i].coeficiente = compB[i].indice*coefIn
				}
				compB.forEach(multiCoefB)
				// console.log ('compB', compB) 	
			}
			else {
				// encontrou coef de mesmo valor
			}


const mostraCoeficientes = (el, i) => {
	// console.log('coeficiente:'+el[0].name+el[1].name+' ', el[0].coeficiente)
}
comps.forEach(mostraCoeficientes)
const geraMolecula = (comp, second) => {
	let indice = (comp.indice > 1) ? comp.indice : ''
	let coeficiente = ''
	if(!second) coeficiente = (comp.coeficiente > 1) ? comp.coeficiente : ''
	let name = comp.name
	return coeficiente+name+indice
}
const reagente1 = geraMolecula(compA[0])+geraMolecula(compA[1], true)
const reagente2 = geraMolecula(compB[0])+geraMolecula(compB[1], true)
const produto1 = geraMolecula(compC[0])+geraMolecula(compC[1], true)
const produto2 = geraMolecula(compD[0])+geraMolecula(compD[1], true)
const result = reagente1+'+'+reagente2 + ' => ' + produto1+'+'+produto2

console.log ('result', result)


// const etapa1 = (inM,out) => {
// 	out.forEach((el, i)=>{
// 		out[i] = inM[1]*out[i]
// 	console.log ('out', out)
// 	})	
// }
// etapa1(inComposta, outcomp)

// const etapa2 = (inM,out) => {
// 	if (inM[1]===out[1]) {
// 		//os dois estão igualados
// 	}
// 	else {
// 		inM.forEach((el, i)=>{
// 			inM[i] *= (out[1]/inM[1])
// 		console.log ('inM', inM)
// 		})	
// 	}

// }
// etapa2(inComposta, outcomp)

// const etapa3 = (inComposta,outcomp) => {
// 	if (outcomp[1]===inComposta[1]) {
// 		//os dois estão igualados
// 	}
// 	else {
// 		outcomp.forEach((el, i)=>{
// 			outcomp[i] = el*2
// 		// console.log ('inComposta', inComposta)
// 		})	
// 		// outcomp[1] = outcomp[1]*2 // 2 é o MDC de 6 e 3
// 		// // o 2 é o MDC dos Cl
// 		// outcomp[0] = outcomp[0]*2 // 2 é o MDC de 6 e 3
// 	// console.log ('outcomp', outcomp)
// 	}

// }
// etapa3(inComposta, outcomp)

// const etapa4 = (inComposta,outSimples) => {
// 	if (inComposta[0]===outSimples[0]) {
// 		//os dois estão igualados
// 	}
// 	else {
// 		outSimples[0] = (inComposta[0]/outSimples[0])*outSimples[0]
// 		// 2 é o MDC de 6 e 3
// 		// o 2 é o MDC dos Cl
// 	// console.log ('outSimples', outSimples)
// 	}

// }
// etapa4(inComposta, outSimples)

// const etapa5 = (inSimples,outcomp) => {
// 	if (inSimples[0]===outcomp[0]) {
// 		//os dois estão igualados
// 	}
// 	else {
// 		inSimples[0] = outcomp[0]*inSimples[0]
// 		// 2 é o MDC de 6 e 3
// 		// o 2 é o MDC dos Cl
// 	console.log ('inSimples', inSimples)
// 	}

// }
// etapa5(inSimples, outcomp)

// console.log ('inSimples', inSimples)
// console.log ('inComposta', inComposta)
// console.log ('outcomp', outcomp)
// console.log ('outSimples', outSimples)

//  //  2 Ag + 2 HNO3 -> 2 AgNO3 + H2