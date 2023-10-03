for (let i = 1; i <= 5; i++) {
    let a = '* ';
    console.log(a.repeat(i));
}

const counter = 5;
const star = "*";
let tmp;
for (let i = 1; i <= counter; i++) {
  tmp = "";
  for (let j = 1; j <= i; j++) {
    tmp += star + " ";
  }
  console.log(tmp);
}

// let nama = "Binar";

// if (nama === "Binar") {
//     console.log("Halo nama saya Binar");
// }
// if (nama === "Budi") {
//     console.log("Halo nama saya Budi");
// }
