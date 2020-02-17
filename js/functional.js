const card = document.querySelector('#card'),
        btnOpenform = document.querySelector('#btn-open-form'),
        form = document.querySelector('#card-form'),
        cardNumber = document.querySelector('#card .number'),
        cardName = document.querySelector('#card .name'),
        logo = document.querySelector('#logo'),
        firm = document.querySelector('#card .firm p'),
        monthExpiration = document.querySelector('#card .month'),
        yearExpiration = document.querySelector('#card .year'),
        ccv = document.querySelector('#card .ccv')

const InitFront = () => {
    if (card.classList.contains('active')){
        card.classList.remove('active')
    }
}

// rotation card func
card.addEventListener('click', () => {
    card.classList.toggle('active');
})

// rotation button & open form func
btnOpenform.addEventListener('click', () => {
    btnOpenform.classList.toggle('active')
    form.classList.toggle('active')
})

// select monthExpiration
for(i=1 ; i<=12; i++){
    let option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    form.selectMonth.appendChild(option)
}
// select yearExpiration
const actualYear = new Date().getFullYear();
for(let i = actualYear; i <= actualYear + 8; i++){
    let option = document.createElement('option')
    option.value = i;
    option.innerText = i;
    form.selectYear.appendChild(option)
}

// input card number
form.inputNumber.addEventListener('keyup', (e) => {
    let InputValue = e.target.value;

    form.inputNumber.value = InputValue
	// del spaces
	.replace(/\s/g, '')
	// del letter
	.replace(/\D/g, '')
	//space between 4 numbers
	.replace(/([0-9]{4})/g, '$1 ')
	// del last space
	.trim()

    cardNumber.textContent = InputValue;

    if(InputValue == ''){
        cardNumber.textContent = '#### #### #### ####';
        logo.innerHTML = '';
    }

    if(InputValue[0] == 4){
        logo.innerHTML = '';
        const img = document.createElement('img');
        img.src = 'img/logos/visa.png';
        logo.appendChild(img);
    }
    else if (InputValue[0] == 5) {
        logo.innerHTML = '';
        const img = document.createElement('img')
        img.src = 'img/logos/mastercard.png';
        logo.appendChild(img)
    }

    InitFront();

})

// card author name
form.inputName.addEventListener('keyup', (e) => {
    let InputValue = e.target.value

    form.inputName.value = InputValue.replace(/[0-9]/g, '');
    cardName.textContent = InputValue;
    firm.textContent = InputValue;
    if(InputValue = ''){
        cardName.textContent = 'Ariel C';
    }

    InitFront();
})

// select months
form.selectMonth.addEventListener('change', (e) => {
    monthExpiration.textContent = e.target.value;
    InitFront()
})
// select year
form.selectYear.addEventListener('change', (e) => {
    yearExpiration.textContent = e.target.value.slice(2);
    InitFront()
})


// CCV
form.inputCCV.addEventListener('keyup', () => {
    if(!card.classList.contains('active')){
        card.classList.toggle('active');
    }

    form.inputCCV.value = form.inputCCV.value
    // del spaces
    .replace(/\s/g, '')

    // del letters
    .replace(/\D/g, '')

    ccv.textContent = form.inputCCV.value;
})
