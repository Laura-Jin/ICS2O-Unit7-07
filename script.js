document.getElementById('calculate').addEventListener('click', calculateButton)

let firstNum = 0
let secondNum = 0
let result = 0

function calculateButton () {
  firstNum = document.getElementById('first').value
  firstNum = parseInt(firstNum)
  secondNum = document.getElementById('second').value
  secondNum = parseInt(secondNum)
  result = parseInt(result)

  for (let i = 0; i < firstNum; i++) {
    result = result + secondNum
  }

  document.getElementById('answer').innerHTML = result

}
