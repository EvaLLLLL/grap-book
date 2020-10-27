const addQrcode = () => {
	const width = document.documentElement.clientWidth
	
	if (width > 500) {
		const divLeft = document.createElement('div')
		divLeft.innerText = '手机扫码体验'
		divLeft.className = 'qrcode-left'
		
		const divRight = document.createElement('div')
		divRight.innerText = '手机扫码体验'
		divRight.className = 'qrcode-right'
		
		const imgLeft = document.createElement('img');
		imgLeft.src = 'https://i.loli.net/2020/10/28/Ho9gVMtYP51d3zJ.png';
		
		const imgRight = document.createElement('img');
		imgRight.src = 'https://i.loli.net/2020/10/28/Ho9gVMtYP51d3zJ.png';
		
		divLeft.appendChild(imgLeft)
		document.body.appendChild(divLeft);
		
		divRight.appendChild(imgRight)
		document.body.appendChild(divRight)
	}
}

export default addQrcode
