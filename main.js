function ActualizarHora(){
    //Variables
    var fecha = new Date(),    
    segundos = fecha.getSeconds(),
    minutos = fecha.getMinutes(),
    horas = fecha.getHours(),
    diaSemana = fecha.getDay(),
    dia = fecha.getDate(),
    mes = fecha.getMonth(),
    year = fecha.getFullYear();
    
    var pHoras = document.getElementById("pHoras"),
    pMinutos = document.getElementById("pMinutos"),
    pSegundos = document.getElementById("pSegundos"),
    pDiaSemana = document.getElementById("pDiaSemana"),
    pDia = document.getElementById("pDia"),
    pMes = document.getElementById("pMes"),
    pYear = document.getElementById("pYear"),
    pSaludo = document.getElementById("Saludo");

    //Fecha
    var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    pDiaSemana.textContent = semana[diaSemana]+",";
    //Mes
    var lista_mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'sAgosto', 
                    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    pDia.textContent = dia;
    pMes.textContent = lista_mes[mes];
    pYear.textContent = year;

    //Hora
    pHoras.textContent = horas;
    if(minutos<10){
        pMinutos.textContent = "0" + minutos;
    }else{
        pMinutos.textContent = minutos;
    }
    if(segundos<10){
        pSegundos.textContent = "0" + segundos;
    }else{
        pSegundos.textContent = segundos;
    }

    //Saludo 
    if(horas>=0 && horas<=12){
        pSaludo.textContent = "Hola, Buenos Días!!"
    }
    if(horas>=13 && horas<=18){
        pSaludo.textContent = "Hola, Buenas Tardes!!"
    }
    if(horas>=19 && horas<=23){
        pSaludo.textContent = "Hola, Buenas Noches!!"
    }

}

setInterval(function(){ 
    ActualizarHora();
}, 1000);


