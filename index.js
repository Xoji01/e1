let discount = prompt('Какая скидка?')

let totalSale = 0

let total = 0

let max = {}

let min = {}

let average = 0

let arr = [

    {

        name: 'Milk',

        price: 3.25

    },

    {

        name: 'Coffee',

        price: 1.5

    },

    {

        name: 'Ice Cream',

        price: 7.85

    },

    {

        name: 'Tomatos',

        price: 4.14

    },

    {

        name: 'Onion',

        price: 2.25

    }

]

let arr_sale = []

// * // 1. Сохранить самый дорогой товар в переменную`max`*

// * // 2. Сохранить самый дешевый товар в переменную`min`*

// * // 3. Сохранить общую цену без скидок в переменную`total`*

// * // 4. Сохранить общую цену со скидкой в переменную`totalSale`*

// * // 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную `arr_sale`*

// * // 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*

// * // * Писать весь код в функции `setup()`*

// * // ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

const setup = () => {
    let max = 0
    let qq = 0


    arr.forEach((it)=>{
        if (it.price > max) 
           { max = it.price
              qq++}  
    } ) 
    max=arr[qq]
console.log(max)

let min = 0 
let mm = 0
arr.forEach((it)=>{
    if (it.price > min) 
       { min = it.price
          mm++}   min=arr[mm]
} ) 
console.log(min)
total = 0
arr.forEach((it)=>{total+=it.price})
console.log('Общая цена без скидок'  +  total)
let totalSale = 0
let picesoskidka = 0

    arr.forEach((it)=>{
         totalSale += it.price - (it.price*picesoskidka)/ 100
    })
    console.log(totalSale)
    arr_sale = arr.map((item) => {
    return item = {names: item.name, price : discount * item.price /100}})
    console.log (arr_sale)
    
     let average = (arr.reduce((dolar, averagePrice) => dolar + averagePrice.price, 0)/ arr.length ) 
    console.log("Средняя цена" + average)
}

setup()

// arr.forEach((it)=>{
//     if (it.price > min) 
//        { min = it.price
//           mm++}
// })  