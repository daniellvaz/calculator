const keyboard = document.querySelector('.keyboard')
  
const operators = [1, 2, 3, '-', 4, 5, 6, '+',7, 8, 9, '*', '.',0, '=' ,'/']

const insertOperators = operators.map((value) => `
  <buttom class="btn-keyboard">
    <p>${value}</p>  
  </buttom>
`).join('')

keyboard.innerHTML = insertOperators

const btn = document.querySelectorAll('.btn-keyboard')

const equal = (value) => {
  const expression = value

  btn[14].addEventListener('click', () => {
    const screen = document.querySelector('#screen-container')
    const total = eval(expression)
    screen.innerHTML = total
  })
}

const insertValueIntoScreen = element => {
  const screen = document.querySelector('#screen-container')
  const expression = screen.innerHTML += element   

  equal(expression)
}

const getvalue = value => { 
  
  if (value <= 2) {
    insertValueIntoScreen(value + 1)
  }
  if (value == 3) {
     insertValueIntoScreen(' - ')
  }
  if (value == 4 || value == 5 || value == 6) {
    insertValueIntoScreen(value)
  }
  if (value == 7) {
    insertValueIntoScreen(' + ')
  }
  if (value == 8 || value == 9 || value == 10) {
    insertValueIntoScreen(value - 1)
  }
  if(value == 11) {
    insertValueIntoScreen(' * ')
  }
  if(value == 12) {
    insertValueIntoScreen('.')
  }
  if(value == 13) {
    insertValueIntoScreen(value - value)
  }
  if(value === 14) {
    insertValueIntoScreen('')
  }
  if(value == 15) {
    insertValueIntoScreen('/')
  }
}

btn.forEach((_, i) => {
  btn[i].addEventListener('click', () => {
    getvalue(i)
  })
})