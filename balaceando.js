


module.exports = (m1, m2) => {
	console.log('m1', m1)
	console.log('m2', m2)
  // const molCoefs = m1.name.split('^')
  // const coef = molCoefs[molCoefs.length-1]
  // console.log('molCoefs', molCoefs)
  //  começa pelos metais
  // verifica se tem a mesma quantidade de cada lado
	// const result = (m1.nox[0]+m1.nox[1]) + (m1.nox[0]+m1.nox[1])

  const result = (m1.atoms[0].nox+m1.atoms[1].nox) + (m1.atoms[0].nox+m1.atoms[1].nox)
  console.log(m1.name + ' + ' + m2.name + ' -> ')
  console.log('result', result)

  let mOUT1 = {}
  let mOUT2 = {}
	if(!result){
    // Se é GAS e o GAS ficou sozinho
    // então seu coefiente SEMPRE é 2
    if(m1.atoms[0].name==='H') {
      const coefCl = m2.atoms[0].nox * -m1.atoms[1].nox
      const coefH = 2
      console.log('coefCl', coefCl)
      mOUT1 = m2.atoms[0].name+m1.atoms[1].name+coefCl
      mOUT2 = m1.atoms[0].name+coefH
      console.log('mOUT1', mOUT1)
      console.log('mOUT2', mOUT2)

      return mOUT1 +' + '+ mOUT2
    }
    else {
      return m2.atoms[0]+m1.atoms[1]+' + '+m1.atoms[0]+m2.atoms[1]
    }

  }
	// return !result
}

