import validator from "./validator.js";

// import validator from './validator.js';

const btn = document.getElementById ('btn');

let valid = ()=>{

  const numero = document.getElementById("numberCreditCard").value;
  validator.isValid(numero);

  if(validator.isValid(numero)==true){
    alert("tarjeta valida")
  }else{
    alert("tarjeta invalida")
  }

  
}

btn.addEventListener("click",valid);


let boton1 = document.getElementById("btn1")

let mascara = ()=>{
  const numero = document.getElementById("numberCreditCard").value;
  

  alert(validator.maskify(numero))

}

boton1.addEventListener("click",mascara)



















// const btn = document.getElementById('btn') ;
// btn.addEventListener('click', () => {
//   const numberCreditCard = document.getElementById("numberCreditCard").value;
//   const arrayTarjeta = numberCreditCard.split("");
//   const arrayInvertido = arrayTarjeta.reverse();
  
//   for( let i = 0; i < arrayInvertido.length; i = i+2 ) {
//     if (i % 2 == 1 ) {
//       const arrayInvertido = arrayInvertido.join ().split("");
//     const numero = arrayInvertido *2;
     
//     console.log(numero);
    
//     }
    
    
    

//   }

  
  
// })
// 78kooooou