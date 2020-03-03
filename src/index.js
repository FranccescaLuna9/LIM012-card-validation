import validator from "./validator.js";
/*console.log(validator.isValid(''));*/
let pg1 , pg2 , pg3 , pg4 ;
  document.getElementById("pagtarjeta").style.display="none";
  document.getElementById("pagvalida").style.display="none";
  document.getElementById("paginvalida").style.display="none";

  /*boton de inicio*/
  const btnInicio = document.getElementById("btnOK");
  btnInicio.addEventListener("click", () => {
  document.getElementById("paginaprincipal").style.display="none";
  document.getElementById("pagtarjeta").style.display = "block";
  document.getElementById("pagvalida").style.display="none";
  document.getElementById("paginvalida").style.display="none";
});

/*boton validar*/
const btnValidar = document.getElementById('btn');
btnValidar.addEventListener("click", () => {
 const numeroTarjeta= document.getElementById("digitoTarj").value;
 const prueba1 = validator.isValid(numeroTarjeta);
 
 console.log(prueba1);

 if( prueba1 == true ){
  document.getElementById("paginaprincipal").style.display="none";
  document.getElementById("pagtarjeta").style.display="none";
  document.getElementById("pagvalida").style.display="block";
  document.getElementById("paginvalida").style.display="none";
 }else{
  document.getElementById("paginaprincipal").style.display="none";
  document.getElementById("pagtarjeta").style.display="none";
  document.getElementById("pagvalida").style.display="none";
  document.getElementById("paginvalida").style.display="block";
 }
  
})


  btn.addEventListener("click",valid);

   let boton = document.getElementById("btn")

  let mascara = ()=>{
const numero = document.getElementById("numberCreditCard").value;
    

   alert(validator.maskify(numero))

  }

   boton1.addEventListener("click",mascara);



















