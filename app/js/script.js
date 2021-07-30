const bill = Number(document.querySelector('.bill__amount').innerHTML)
const tipButtons = Number(document.querySelectorAll('tipBtn').innerHTML)
const costumBtn = Number(document.queryselector('costumTip').innerHTML)
const persons = Number(document.querySelector('.num__people').innerHTML)
const warningMessage =  document.querySelector('.warning')
const tipOutput = document.querySelector('.tip_output')
const totalOutput = document.querySelector('.total_output')
const resetBtn = document.querySelector('.reset')

document.querySelectorAll('.tipBtn').forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.innerHTML)
        let tipPercent = button.innerHTML
        let tipValue = tipPercent / 100

        

        if (bill.value && persons.value) {
            let totalTip = (bill * tipValue) / persons
            totalTip = totalTip.toFixed(2)

            let totalBill = (bill / persons) + totalTip
            totalBill = totalBill.toFixed(2)

            document.getElementById('tip_output').innerHTML = `${totalTip}`
            document.getElementById('total_output').innerHTML = `${totalBill}`
        } else {
           warningMessage.classList.add('warning--active')

           setTimeout(function () {
                warningMessage.classList.removes('warning--active')
            }, 8000)
        }
    })
})