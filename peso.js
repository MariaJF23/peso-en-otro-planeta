function calcular(){
	//Declarar las variables
	var N1,N2,Ca;
	//Recuperrar los valores de las cajas de texto y asignar alas 
	N1=parseInt(document.getElementsById("Num1").value);
	N2=parseInt(document.getElementsById("Num2").value);
	//Realiza las operaciones
	Ca=(N1*N2/9.8);
	//Mostrar el resultadoen la caja de texo.
	document.getElementsById("Cal").value=Ca;
}
function borrar(){
	document.getElementsById("Num1").value="";
	document.getElementsById("Num2").value="";
	document.getElementsById("Cal").value="";
}