window.onload = function() {
    let temperatura = document.getElementById('promTemp');
    let humedad = document.getElementById('promHum');
    let alimento = document.getElementById('promComida');
    let agua = document.getElementById('promAgua');
    let alimentoPsemana = document.getElementById('avgFood');
    let aguaPsemana = document.getElementById('avgWater');
    
    var xhttp = new XMLHttpRequest;
    const url = './cleanJson.json';
    xhttp.open("GET",url,true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let response = JSON.parse(this.response);
            updateTempt(response);
            updateHumedad(response);
            updateAlimento(response);
            updateAgua(response);
            updateAlimP(response);
            updateAguaP(response);
        }
    }
    function updateTempt(response){
        var mes = (1440*30);
        var lastMonth = 0 ;
        var temp = 0;
        if(response.length>mes){lastMonth = response.length-mes;};
        for(lastMonth;lastMonth<response.length;lastMonth++){
            temp = temp + response[lastMonth].TempNumber;
        }
        temp = Math.round((temp/response.length)*10)/10;
        temperatura.innerHTML = temp + " °C";
    }
    function updateHumedad(response){
        var mes = (1440*30);
        var lastMonth = 0 ;
        var temp = 0;
        if(response.length>mes){lastMonth = response.length-mes;};
        for(lastMonth;lastMonth<response.length;lastMonth++){
            temp = temp + response[lastMonth].HumNumber;
        }
        temp = Math.round((temp/response.length)*10)/10;
        humedad.innerHTML = temp + " %";
        
    }
    function updateAlimento(response){
        var mes = (1440*30);
        var lastMonth = 0 ;
        var temp = 0;
        if(response.length>mes){lastMonth = response.length-mes;};
        for(lastMonth;lastMonth<response.length;lastMonth++){
            temp = temp + response[lastMonth].FoodNumber;
        }
        temp = Math.round((temp/response.length)*10)/10;
        alimento.innerHTML = temp + " mg";        
    }
    function updateAgua(response){
        var mes = (1440*30);
        var lastMonth = 0 ;
        var temp = 0;
        if(response.length>mes){lastMonth = response.length-mes;};
        for(lastMonth;lastMonth<response.length;lastMonth++){
            temp = temp + response[lastMonth].WaterNumber;
        }
        temp = Math.round((temp/response.length)*10)/10;
        agua.innerHTML = temp + " ml";
        
    }
    function updateAlimP(response){
        var mes = (10080);
        var lastMonth = 0 ;
        var temp = 0;
        if(response.length>mes){lastMonth = response.length-mes;};
        for(lastMonth;lastMonth<response.length;lastMonth++){
            temp = temp + response[lastMonth].FoodNumber;
        }
        temp = Math.round((temp/response.length)*10)/10;
        alimentoPsemana.innerHTML = temp + " mg";
        
    }
    function updateAguaP(response){
        var mes = (10080);
        var lastMonth = 0 ;
        var temp = 0;
        if(response.length>mes){lastMonth = response.length-mes;};
        for(lastMonth;lastMonth<response.length;lastMonth++){
            temp = temp + response[lastMonth].WaterNumber;
        }
        temp = Math.round((temp/response.length)*10)/10;
        aguaPsemana.innerHTML = temp + " ml";
    }
}
