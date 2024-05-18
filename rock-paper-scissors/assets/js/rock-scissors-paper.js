let hamleler = ["taş", "kağıt", "makas"]; // [diziler için kullanılır]


let bilgisayarHamle = hamleler[Math.round(Math.random() * 2)];

let oyuncuHamle = "kağıt";

console.log(bilgisayarHamle, oyuncuHamle);

if(oyuncuHamle === bilgisayarHamle) {
  alert('berabere');
} else if (oyuncuHamle === 'taş' && bilgisayarHamle === 'makas') {
  alert('oyuncu kazandı');
} else if(oyuncuHamle === 'makas' && bilgisayarHamle === 'kağıt') {
  alert('oyuncu kazandı');
} else if (oyuncuHamle === 'kağıt' && bilgisayarHamle === 'taş') {
  alert('oyuncu kazandı');
} else {
  alert('oyuncu kaybetti');
}
