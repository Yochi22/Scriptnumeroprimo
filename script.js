var n1,primo;
n1=parseInt (prompt("introduce un numero"));
i=2;
primo=true;

while (i<n1){
   if(n1%i==0) {
       primo=false;
   }
   i++;
}

if (primo==true){
   document.write("El número introducido es primo");

}
else{
   document.write("El número introducido no es primo");
}