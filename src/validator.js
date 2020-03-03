const validator = {
  isValid : (numero) => {
    let array1= Array.from(numero);
    let sumaTotal= 0;
    let arrayInvertido= array1.reverse();
    for (let i = 0; i <= arrayInvertido.length-1; i++){
     if(i % 2 == 0) {
      sumaTotal+= parseInt(arrayInvertido[i]);
    } else if (2*arrayInvertido[i] < 10) {
      sumaTotal+= parseInt(2*arrayInvertido[i]);
    } else {
      let num1 = (2*arrayInvertido[i]).toString();
      let pos1 = parseInt(num1.charAt(0));
      let pos2 = parseInt(num1.charAt(1));
      let suma = pos1 + pos2;
      sumaTotal += suma;
    }
 }
  if ( sumaTotal % 10 == 0) {
  return true
} else {
  return false
 }
},
maskify: (numero) => {
  let first= numero.slice(-4);
  let cadena="";
  for ( let i = 0; i < numero.length-4 ; i++) {
    cadena+= "#";
  }
  return cadena +  first;
}
};

export default validator;
