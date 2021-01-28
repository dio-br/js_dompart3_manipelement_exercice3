let monObjet = { 
    nom: "ayhan",
    age : 23,
}
//OBJECT KEYS
// console.log('____1____');
// //1
let myElements = document.querySelector('div#object').children
console.log(myElements);

// console.log('____2____');
// //2
// console.log(Object.keys(monObjet));
// let prop = Object.keys(monObjet)

// console.log('____3____');
// //3
// prop.forEach(el => {
//     console.log(el);
// });


// console.log('____4____');
// //4
// prop.forEach(el => {
//     console.log(monObjet[el]);
// });

// console.log('____5____');
// prop.forEach((el,i) => {
//     console.log(monObjet[el], i);
// });

// console.log('____6____');
// prop.forEach((el,i) => {
//     myElements[i].innerText = monObjet[el]
// });

// let count=0; 
// for(key in monObjet){
//     console.log(myElements[count]);
//     myElements[count].innerHTML=monObjet[key];
//     count++;
// }


//OBJET VALUE
console.log(Object.values(monObjet));
let valeur = Object.values(monObjet)

valeur.forEach((el,i) => {
    myElements[i].innerText = el
});