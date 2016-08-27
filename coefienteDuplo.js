// const inComposta = [1,1]
// const inSimples = [1]
// const outComposto = [1,3]
// const outSimples = [2]
const compostoA = [2, 1] // A
const compostoB = [1, 1] // B
const compostoC = [1, 1] // C - A
const compostoD = [2, 1] // D - B
const compostos = [
	compostoA,
	compostoB,
	compostoC,
	compostoD
]

// compostos.map((el, i) => {
// 	if (el[0]>1) {}
// 	if (el[1]>1) {
	//chama função que acha primeiro coef>1
		let coefIn = compostoA[0]
		//chama função que busca o mesmo 
		//elemento em outra molécula
		let mesmoAtomo = compostoC
	// }
// })
		if (coefIn!==compostoC[0]) {
			// busca próximo coef>1 
			const multiCoefC = (el, i) => {
				compostoC[i] = compostoC[i]*coefIn
			}
			compostoC.forEach(multiCoefC)
			console.log ('compostoC', compostoC)
		}
		//pega elemento que foi modificado
		//e não está balanceado
		coefIn = compostoC[1]
		//chama função que busca o mesmo 
		//elemento em outra molécula

			mesmoAtomo = compostoB
			if (coefIn!==compostoB[1]) {

				const multiCoefB = (el, i) => {
					compostoB[i] = compostoB[i]*coefIn
				}
				compostoB.forEach(multiCoefB)
				console.log ('compostoB', compostoB) 	
			}
			// pega o elemento que ainda não foi balanceado
			coefIn = compostoB[0] 
		//chama função que busca o mesmo 
		//elemento em outra molécula
			mesmoAtomo = compostoD
			if (coefIn!==compostoD[0]) {

				const multiCoefB = (el, i) => {
					compostoB[i] = compostoB[i]*coefIn
				}
				compostoB.forEach(multiCoefB)
				console.log ('compostoB', compostoB) 	
			}
			else {
				// encontrou coef de mesmo valor
			}
		// const multiCoef = (el, i) => {
		// 	compostoC[i] = compostoC[i]*coefIn
		// }
		// mesmoAtomo.forEach(multiCoef)
		// console.log('compostoC', compostoC)



// const etapa1 = (inM,out) => {
// 	out.forEach((el, i)=>{
// 		out[i] = inM[1]*out[i]
// 	console.log ('out', out)
// 	})	
// }
// etapa1(inComposta, outComposto)

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
// etapa2(inComposta, outComposto)

// const etapa3 = (inComposta,outComposto) => {
// 	if (outComposto[1]===inComposta[1]) {
// 		//os dois estão igualados
// 	}
// 	else {
// 		outComposto.forEach((el, i)=>{
// 			outComposto[i] = el*2
// 		// console.log ('inComposta', inComposta)
// 		})	
// 		// outComposto[1] = outComposto[1]*2 // 2 é o MDC de 6 e 3
// 		// // o 2 é o MDC dos Cl
// 		// outComposto[0] = outComposto[0]*2 // 2 é o MDC de 6 e 3
// 	// console.log ('outComposto', outComposto)
// 	}

// }
// etapa3(inComposta, outComposto)

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

// const etapa5 = (inSimples,outComposto) => {
// 	if (inSimples[0]===outComposto[0]) {
// 		//os dois estão igualados
// 	}
// 	else {
// 		inSimples[0] = outComposto[0]*inSimples[0]
// 		// 2 é o MDC de 6 e 3
// 		// o 2 é o MDC dos Cl
// 	console.log ('inSimples', inSimples)
// 	}

// }
// etapa5(inSimples, outComposto)

// console.log ('inSimples', inSimples)
// console.log ('inComposta', inComposta)
// console.log ('outComposto', outComposto)
// console.log ('outSimples', outSimples)

//  //  2 Ag + 2 HNO3 -> 2 AgNO3 + H2