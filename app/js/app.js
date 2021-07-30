const bill = document.querySelector('.bill__amount')
const tipButtons = document.querySelectorAll('.tipBtn')
const customBtn = document.querySelector('.customTip')
const persons = document.querySelector('.num__people')
const warningMessage = document.querySelector('.warning')
const tipOutput = document.querySelector('#tip_output')
const totalOutput = document.querySelector('#total_output')
const resetBtn = document.querySelector('.reset')

//---EventListeners---//
bill.addEventListener('input', setBillValue)
tipButtons.forEach(button => {
    button.addEventListener('click', handleclick)
})
customBtn.addEventListener('input', setCustomTipValue)
persons.addEventListener('input', setPersonValue)
resetBtn.addEventListener('click', reset)

//Set default values 
let billValue = 0.0
let personValue = 0.0
let tipValue = 0

//---Functions---//
//Set values for inputs
function setBillValue() { 
    billValue = parseFloat(bill.value)
    calculateTip()
}

function handleclick(event) {
    tipButtons.forEach(button => {
        //Remove active class
        if (event.target.innerHTML != button.innerHTML) {
            button.classList.remove('active')

        } else if (event.target.innerHTML == button.innerHTML) {
                button.classList.add('active')
                tipValue = parseFloat(button.innerHTML) / 100
        }

        if (personValue <= 0 || persons.value === '') {
            warningMessage.classList.add('show__warning')
            
            if (warningMessage.classList.contains('show__warning')) {
                setTimeout(() => {
                    warningMessage.classList.remove('show__warning')
                }, 5000)
            }
            
        }

        //Revove active class from tipBtn when resetBtn is clicked
        if (resetBtn()) {
            button.classList.remove('active')
        }
        
    })

    calculateTip()
    customBtn.value = ''
    //console.log(button.innerHTML)
}

function setCustomTipValue() {
    //Convert input into float
    tipValue = parseInt(customBtn.value) / 100
    //console.log(customTipValue)

    tipButtons.forEach(button => {
        button.classList.remove('active')
    })

    if (customBtn.value !== '') {
        calculateTip()
    }
}


function setPersonValue() {
    //Convert input into float 
    personValue = parseFloat(persons.value)

    if (personValue <= 0 || persons.value === '') {
        warningMessage.classList.add('show__warning')

        setTimeout(() => {
            warningMessage.classList.remove('show__warning')
        }, 5000)
    }

    calculateTip()
    //console.log(personValue)
}

function calculateTip() {
    if (personValue >= 1) {
        let tipFinal = (tipValue * billValue) / personValue
        let billFinal = (billValue / personValue ) + tipFinal

        //Display outputs
        tipOutput.innerHTML = '$ ' + tipFinal.toFixed(2)
        console.log(tipFinal)
        totalOutput.innerHTML = '$ ' + billFinal.toFixed(2)
   } 
}

function reset() {
    bill.value = '0.0'
    setBillValue()

    persons.value = '0'
    setPersonValue()

    //Remove warning message if still showing
    warningMessage.classList.remove('show__warning')
}

function buttonSound(audio) {
    var audio = new Audio('button-sound.mp3')
    audio.play()
}

