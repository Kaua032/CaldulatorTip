const billInput = document.getElementById('totalPriceInput')
const tipInput = document.getElementById('percent')
const numberPeopleInput = document.getElementById('totalPeopleInput')

const errorMessage = document.getElementById('notNumber')

const totalTip = document.getElementById('tip')
const totalPerPerson = document.getElementById('pricePerPerson')

const button5 = document.getElementById('5')
const button10 = document.getElementById('10')
const button15 = document.getElementById('15')
const button25 = document.getElementById('25')
const button50 = document.getElementById('50')

function calculator(){
    errorMessage.style.display = 'none'
    numberPeopleInput.style.borderColor = 'var(--Very-light-grayish-cyan)'

    if(billInput.value && tipInput.value && numberPeopleInput.value){
        totalTip.innerHTML = `$${(billInput.value*(tipInput.value/100)).toFixed(2)}`
        totalPerPerson.innerHTML = `$${(billInput.value/numberPeopleInput.value).toFixed(2)}`
    }
    else if(billInput.value && tipInput.value){
        totalTip.innerHTML = `$${(billInput.value*(tipInput.value/100)).toFixed(2)}`
        errorMessage.style.display = 'flex'
        numberPeopleInput.style.borderColor = 'red'
    }
    else if(billInput.value && numberPeopleInput.value){
        totalPerPerson.innerHTML = `$${(billInput.value/numberPeopleInput.value).toFixed(2)}`
    }
    else if(billInput.value){
        errorMessage.style.display = 'flex'
        numberPeopleInput.style.borderColor = 'red'
    }
}

function selected(value){
    button5.style.backgroundColor = "var(--Very-dark-cyan)"
    button5.style.color = "var(--White)"
    button10.style.backgroundColor = "var(--Very-dark-cyan)"
    button10.style.color = "var(--White)"
    button15.style.backgroundColor = "var(--Very-dark-cyan)"
    button15.style.color = "var(--White)"
    button25.style.backgroundColor = "var(--Very-dark-cyan)"
    button25.style.color = "var(--White)"
    button50.style.backgroundColor = "var(--Very-dark-cyan)"
    button50.style.color = "var(--White)"

    document.getElementById(`${value}`).style.backgroundColor = 'hsl(172, 67%, 45%)'
    document.getElementById(`${value}`).style.color = 'black'
    tipInput.value = value

    calculator()
}

tipInput.addEventListener('change', () =>{
    selected(tipInput.value)
    calculator()
})
billInput.addEventListener('change', () =>{
    console.log('pamonha')
    calculator()
})
numberPeopleInput.addEventListener('change', () =>{
    calculator()
})

function reset(){
    totalTip.innerHTML = `$0.00`
    totalPerPerson.innerHTML = `$0.00`
    billInput.value = 0
    tipInput.value = 0
    numberPeopleInput.value = 0
}