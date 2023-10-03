// function declaration

// function luasSegitiga(a,t) {
//     let hasil = (1 / 2) * a * t
//     return hasil
// }

// function volumeKubus(s) {
//     let hasil = s * s * s
//     return hasil
// }

// function volumeTabung(r,t) {
//     let hasil = 3.14 * (r ** 2) * t
//     return hasil
// }

// let Segitiga = luasSegitiga(10, 5)
// let Kubus = volumeKubus(5)
// let Tabung = volumeTabung(10, 5)

// console.log(Segitiga)
// console.log(Kubus)
// console.log(Tabung)

// function expression

// const luasSegitiga = function (a, t) {
//     let hasil = (1 / 2) * a * t
//     return hasil
// }

// console.log(luasSegitiga(10, 5))

// // function recursive

// function calculateFactorial(n) {
//     if (n === 1) {
//         return 1
//     } else {
//         return n * calculateFactorial(n - 1)
//     }
// }

// console.log(calculateFactorial(5))

// function computeFactorial(num) {
//     let result = 1
//     for (let i = 1; i <= num; i++) {
//         result *= i
//     }
//     return result
// }

// console.log(computeFactorial(5))

// function arrow

// const luasSegitiga = (a, t) => (1 / 2) * a * t
// const volumeKubus = s => s * s * s
// const volumeTabung = (r, t) => 3.14 * (r ** 2) * t

// console.log(`Hasil Luas Segitiga = ${luasSegitiga(10, 5)}`)
// console.log(`Hasil Volume Kubus = ${volumeKubus(5)}`)
// console.log(`Hasil Volume Tabung = ${volumeTabung(10, 5)}`)


// buatkan sebuah function yg bernama getRouletWinner dengan param array object player
// dengan field player name dan birth_year
// dimana function ini akan memanggil function gameLogic dengan param array of player objects
// secara random akan memilih salah satu pemenang dari param
// dan akan memanggil function checkAgeWinner dimana akan memvalidasi return pemenang dari gamelogic
// apabila pemenang berusia lebih dari 50 tahun hari ini maka
// akan console pemenang dan hadiah x 100 serta total hadiah x100
// jika tidak maka akan console selamat anda menang dengan total hadiah saja

// let player = [
//     {
//         name: 'fadhil',
//         birth_year: 1940
//     },
//     {
//         name: 'agil',
//         birth_year: 2000
//     },
//     {
//         name: 'rasyad',
//         birth_year: 2001
//     }
// ]

// let grandPrize = 100
// let jackpotWinner = 100

// function getRouletWinner(params) {

//     let gameWinner = gameLogic(params)

//     console.log(gameWinner)
//     let checkWinner = checkAgeWinner(gameWinner)

//     if (checkWinner) {
//         console.log(`congratulation to ${gameWinner.name}`)
//         console.log(`you will be rewarded ${grandPrize} x ${jackpotWinner}`)
//         console.log(`total prize will be ${grandPrize * jackpotWinner}`)
//     } else {
//         console.log(`congratulation to ${gameWinner.name}`)
//         console.log(`total prize will be ${grandPrize * jackpotWinner}`)
//     }
//     return
// }


// function gameLogic(params) {
//     let indexWinner = Math.floor(Math.random() * params.length)
//     console.log(`ini index pemenangnya ${indexWinner}`)
//     let winner = params[indexWinner]

//     return winner
// }

// function checkAgeWinner(params) {

//     // check winner age
//     const winnerBirthYear = params.birth_year
//     const now = new Date()
//     const currentYear = now.getFullYear()

//     const playerAge = currentYear - winnerBirthYear

//     if (playerAge > 50) {
//         return true
//     }

//     return false
// }

// getRouletWinner(player)

// coba - coba

// function loopingFunction(n) {
//     console.log(n)
//     if (n <= 0) {
//         return 0
//     } else {
//         return n + loopingFunction(n - 1)
//     }
// }

// console.log(loopingFunction(5))



// // declaration
// function declarationMultiply(...num1) {

//     let resp

//     for (const key of num1) {
//         if (!resp) {
//             resp = key
//         } else {
//             resp *= key
//         }
//     }

//     return resp
// }

// // arrow function
// let arrowMultiply = (...num1) => {

//     let resp

//     for (const key of num1) {
//         if (!resp) {
//             resp = key
//         } else {
//             resp *= key
//         }
//     }

//     return resp

// }
// // expression
// let expressionMultiply = (...num1) => {

//     let resp

//     for (const key of num1) {
//         if (!resp) {
//             resp = key
//         } else {
//             resp *= key
//         }
//     }

//     return resp

// }

// console.log(arrowMultiply(4, 5, 5))
// console.log(declarationMultiply(4, 5, 5))
// console.log(expressionMultiply(4, 5, 5))

// const perkalian1 = (a, b) => a * b

// const perkalian2 = function (a, b) {
//     return a * b
// }

// function perkalian3(a,b) {
//     return a * b
// }


function pengurangan(n) {
    if (n <= 0) {
        return 
    } else {
        pengurangan(n - 10)
    }
}

console.log(pengurangan(100))
