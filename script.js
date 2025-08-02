let sueldo=0,aumento,nuevoSueldo,acum=0,i=0; noValidos=0;

while(sueldo!=-1){
    sueldo=Number(prompt("Ingrese un sueldo"));
if((sueldo>=0) && (sueldo<1000)){
    aumento=sueldo*0.15;
    nuevoSueldo=sueldo+aumento;
    acum=acum+nuevoSueldo;
    i++;
    alert("El aumento es del 15% Q"+aumento+" el nuevo sueldo es Q"+nuevoSueldo)
}else if(sueldo>=1000){
    aumento=sueldo*0.12;
    nuevoSueldo=sueldo+aumento;
    acum=acum+nuevoSueldo;
    i++;
    alert("El aumento es del 12% Q"+aumento+" el nuevo sueldo es Q"+nuevoSueldo)
}else{
    if(sueldo===-1){
        alert("Orale");
    }else{
        alert("Revise el monto");
          noValidos++
    }
}
}
document.getElementById("respuesta").innerHTML="La suma de los nuevos sueldos es "+acum;
document.getElementById("contador").innerHTML="Se ingresaron nuevos sueldos"+i;
document.getElementById("novalidos").innerHTML="la cantidad de sueldos no validos es" +noValidos;