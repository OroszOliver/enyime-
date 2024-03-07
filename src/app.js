/*
File: index.html
Author: Orosz Olivér Arnold
Copyright: 2024-03-07, Orosz Olivér Arnold
Group: Szoft 1-I-N
Date: 2024-03-07
Github: https://github.com/OroszOliver/
Licenc: GNU GPL
*/
const AsideInput = document.querySelector("#Aside")
const BsideInput = document.querySelector("#Bside")
const CsideInput = document.querySelector("#Cside")
const DsideInput = document.querySelector("#Dside")
const teruletInput = document.querySelector("#terulet")
const calcButton = document.querySelector("#calcterulet")

calcBtn.addEventListener('click', () => {
    startCalc();
})


function startCalc(){
	const Aside = AsideInput.value
	const Bside = BsideInput.value
	const Cside = CsideInput.value
	const Dside = DsideInput.value
	const felkerulet = (Aside + Bside + Cside +Dside)/2
    const terulet = (Math.sqrt(felkerulet))
    console.log('Terület: ', terulet)
	teruletInput.value = terulet
}
