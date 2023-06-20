const product_name = document.querySelector('.product')
const value_num = document.querySelector('.value-for-product')
const box_products = document.querySelector('.box-appears-products')
const final_value_products = document.querySelector('.final-purchase-price')
const button_inf = document.querySelector('.button-inf')
const button_final = document.querySelector('.button-final')
const table = document.querySelector('tbody')
const final_value_number = document.querySelector('.final-purchase-price')

let numbers = []

const products_for_box_products = () => {


    const convert_number = (new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value_num.value))

    table.innerHTML += `<tr><td>${product_name.value}</td><td>${convert_number}</td></tr>`

    const transform__in_number = parseFloat(value_num.value)

    numbers.push(transform__in_number)

    console.log(numbers)

    if (numbers.length === 2) { button_final.removeAttribute('disabled') }

    return numbers
}

const sum_final_for_products = () => {

    const number = numbers.reduce((acc, value) => {
        return acc + value
    }, 0)

    const the_final = (new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(number))

    final_value_number.innerHTML = `O valor total da compra foi de ${the_final}`

    table.innerHTML = `<tr><td>Produtos :</td><td>Valor :</td></tr>`

    button_final.setAttribute('disabled', true)

    numbers = []
}

product_name.addEventListener('change', () => { `${value_num.removeAttribute('readonly')} ${product_name.setAttribute('readonly', true)}` })

value_num.addEventListener('change', () => { `${button_inf.removeAttribute('disabled')} ${value_num.setAttribute('readonly', true)}` })

button_inf.addEventListener('click', () => {
    `${product_name.value = ''} 
   ${product_name.removeAttribute('readonly')}${value_num.value = ''}${button_inf.setAttribute('disabled', true)}`
})
