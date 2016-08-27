// const inComposta = [1,1]
// const inSimples = [1]
// const outComposto = [1,3]
// const outSimples = [2]
const inSimples = [1] // A
const inComposta = [1, 3] // B
const outComposto = [1, 2] // C - A
const outSimples = [1] // D - B

const etapa1 = (inM,out) => {
	out.forEach((el, i)=>{
		out[i] = inM[1]*out[i]
	console.log ('out', out)
	})	
}
etapa1(inComposta, outComposto)

const etapa2 = (inM,out) => {
	if (inM[1]===out[1]) {
		//os dois estão igualados
	}
	else {
		inM.forEach((el, i)=>{
			inM[i] *= (out[1]/inM[1])
		console.log ('inM', inM)
		})	
	}

}
etapa2(inComposta, outComposto)

const etapa3 = (inComposta,outComposto) => {
	if (outComposto[1]===inComposta[1]) {
		//os dois estão igualados
	}
	else {
		outComposto.forEach((el, i)=>{
			outComposto[i] = el*2
		// console.log ('inComposta', inComposta)
		})	
		// outComposto[1] = outComposto[1]*2 // 2 é o MDC de 6 e 3
		// // o 2 é o MDC dos Cl
		// outComposto[0] = outComposto[0]*2 // 2 é o MDC de 6 e 3
	// console.log ('outComposto', outComposto)
	}

}
etapa3(inComposta, outComposto)

const etapa4 = (inComposta,outSimples) => {
	if (inComposta[0]===outSimples[0]) {
		//os dois estão igualados
	}
	else {
		outSimples[0] = (inComposta[0]/outSimples[0])*outSimples[0]
		// 2 é o MDC de 6 e 3
		// o 2 é o MDC dos Cl
	// console.log ('outSimples', outSimples)
	}

}
etapa4(inComposta, outSimples)

const etapa5 = (inSimples,outComposto) => {
	if (inSimples[0]===outComposto[0]) {
		//os dois estão igualados
	}
	else {
		inSimples[0] = outComposto[0]*inSimples[0]
		// 2 é o MDC de 6 e 3
		// o 2 é o MDC dos Cl
	console.log ('inSimples', inSimples)
	}

}
etapa5(inSimples, outComposto)

console.log ('inSimples', inSimples)
console.log ('inComposta', inComposta)
console.log ('outComposto', outComposto)
console.log ('outSimples', outSimples)

 //  2 Ag + 2 HNO3 -> 2 AgNO3 + H2