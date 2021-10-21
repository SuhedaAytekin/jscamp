console.log("merhaba kodlama.io") // sonuna ; virgülde koysak farketmez

//yorum satırı



let dolarBugun = 9.30
var dolarDun = 9.20
dolarDun = "9.20"
{
  var dolarDun = 9.10  
}
console.log(dolarDun)
//euroDun = 11
const euroDun = 11.2


console.log(euroDun)

//array
//camelCasing //değişken tanılamaları kullanım şekli
let konutKredileri = ["Konut kredisi" , "Emlak konut kredisi" , "Kamu konut kredisi" , "özel konut kredileri"]

console.log("<ul>")
for (let i = 0;i<konutKredileri.length;i++ ){
    console.log("<li>" +konutKredileri[i]+ "</li>") //liste elamanı oluştur
    
}
console.log("</ul>")

console.log(konutKredileri)