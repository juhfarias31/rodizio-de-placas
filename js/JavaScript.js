function Rodizio(){
    var texto = document.querySelector("#texto");
    var placa = document.getElementById("placa").value;
    var semana = document.getElementById("semana").value;

    alert(placa);
    alert(semana);

if ((placa == 1 || placa == 2) && (semana == 1)) {
    texto.innerHTML = "Não Pode Circular";
}

else if ((placa == "3" || placa == "4") && (semana == "2")){
    texto.innerHTML = "Não Pode Circular";
}

else if ((placa == "5" || placa == "6") && (semana == "3")){
    texto.innerHTML = "Não Pode Circular";
}

else if ((placa == "7" || placa == "8") && (semana == "4")) {
    texto.innerHTML = "Não Pode Circular";
}

else if ((placa == "9" || placa == "0") && (semana == "5")) {
    texto.innerHTML = "Não Pode Circular";
}
else{
    texto.innerHTML = "Pode Circular";
}
}