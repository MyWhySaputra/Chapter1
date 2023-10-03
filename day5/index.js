// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// let person1 = new Person("Wayan", 20);
// let person2 = new Person("Budi", 21);

// console.log(person1);
// console.log(person2);

class Mahasiswa {

    // static property
    static rektor = "Budi Setiawan";

    constructor(nama, alamat) {
        this.nama = nama
        this.alamat = alamat
    }

    // instance method
    perkenalan() {
        return `Halo nama saya ${this.nama}, alamas saya ${this.alamat}`
    }
}

// static method
Mahasiswa.kelas = (i) => {
    return `Sekarang ia ada di kelas ${i}`;
}

Mahasiswa.prototype.tugas = function (j) {
    return `tugas ${this.nama} adalah ${j}`;
}

// instance property
let mahasiswa1 = new Mahasiswa(`Budi`, `semarang`);

console.log(mahasiswa1.perkenalan());
console.log(Mahasiswa.kelas('XII'));
console.log(mahasiswa1.tugas(`PBO`));

// class Human {

//     static isLivingOnEarth = true;
//     constructor(name, address) {
//         this.name = name;
//         this.address = address;
//     }
//     introduce() {
//         console.log(`Halo nama saya ${this.name}`);
//     }
// }

// console.log(Human.isLivingOnEarth);

// Human.prototype.greet = (name) => {
//     console.log(`Hi ${name}, I'm ${this.name}`);
// }

// Human.destroy = (thing) => {
//     console.log(`${thing} will be destroyed`);
// }

// let person = new Human("Budi Setiawan", "Jakarta");
// console.log(person);

// console.log(person instanceof Human);
// console.log(person.introduce());
// console.log(person.greet("Donald Trump"));
// console.log(Human.destroy("Earth"));

// class Toyota {

//     // static property
//     static founder = 'Kiichiro Toyoda'

//     // constructor method
//     constructor(jenisMesin, roda, codeRakitan, tonase) {
//         this.jenisMesin = jenisMesin
//         this.roda = roda
//         this.codeRakitan = codeRakitan
//         this.tonase = tonase
//     }

//     // instance method
//     avanza() {
//         // return string we get the value from constructor method
//         return `kendaraan penumpang ${this.roda} ber-mesin ${this.jenisMesin}
//         Buatan Lokal atau ${this.codeRakitan} dengan tonase maksimal ${this.tonase}
//         `
//     }

//     // cekSales(num) {
//     //     return `
//     //     Penjualan toyota rata-rata adalah ${num}
//     //     `
//     // }
// }

// Toyota.prototype.ayla = function (transmisi) {
//     return `kendaraan penumpang ${this.roda} ber-mesin ${this.jenisMesin}
//     Buatan Lokal atau ${this.codeRakitan} dengan tonase maksimal ${this.tonase} dengan transmisi ${transmisi}
//     `
// }

// Toyota.cekSales = function () {
//     return ` Penjualan toyota rata-rata adalah 10000 `
// }

// let toyota = new Toyota('bensin', '4', 'CKD', '1 Ton')
// // console.log(toyota.cekSales(10000))

// // console.log(toyota.ayla('otomatis'))
// // console.log(toyota instanceof Toyota)
// // console.log(Toyota.cekSales())

// console.log(Toyota.founder)