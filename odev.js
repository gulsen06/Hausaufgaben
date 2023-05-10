// 1-Kullanıcıdan aldığı iki sayını toplamını bulan program

let Sayi1 = prompt("1. sayiyi gir:");
let Sayi2 = prompt("2. sayiyi gir:");
let toplam = Number(Sayi1) + Number(Sayi2);
document.write("sayilarin toplami:", "<b/><i/>", toplam);

// 2-Kullanıcıdan//  aldığı yaş bilgisini gün sayısına dönüştüren program (1 yıl 365 gün) document.writ
const now = new Date();
const year = now.getFullYear();
let birthyear = +prompt("dogum yilini gir");
console.log("Siz", (year - birthyear) * 365, "günlüksünüz");

// 3- İki futcol takımınız var.Her bir takımın maç sonucunu 0-10 arasında bir değer olarak alıp iki takımdan 1.nin ikinciyi yenip yenmediğini true/ false olarak dönen program
// 1.takım : 6
//2. takım : 2

let aTakimi = Math.trunc(Math.random() * 10);
console.log("1.takimin gol sayisi: ", aTakimi);
let bTakimi = Math.trunc(Math.random() * 10);
console.log("2.takimin gol sayisi: ", bTakimi);
if (aTakimi > bTakimi) {
  console.log("1. takim yenmis mi : ", (aTakimi = true));
} else {
  console.log("1. takim yenmis mi : ", (aTakimi = false));
}

// 4-İki değeri kullanıcıdan alıp kıyaslama yapan sonucu true false olarak dönen program

let num1 = +prompt("Bir sayi girin: ");
console.log(num1);
let num2 = +prompt("Bir sayi girin: ");
console.log(num2);
if (num1 > num2) {
  console.log("1 sayi 2. sayidan büyük mü ", true);
} else if (num1 == num2) {
  console.log("1 sayi 2. sayidan büyük mü ", false, "esit");
} else {
  console.log("1 sayi 2. sayidan büyük mü ", false);
}
