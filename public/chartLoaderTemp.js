google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'Day');
  data.addColumn('number', 'Temperatura');
  var xhttp = new XMLHttpRequest;
  const url = './cleanJson.json';
  xhttp.open("GET",url,true);
  xhttp.send();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      let response = JSON.parse(this.response)
      i=1;
      var lastMonth = 0 ;
      if(response.length>60){lastMonth = response.length-60;};
      for(lastMonth;lastMonth<response.length;lastMonth++){
        var tt = response[lastMonth].TempNumber;
        newRow = [i,tt];
        data.addRow(newRow); 
        i++;
      }
      var options = {
        title: 'Temperatura',
        curveType: 'function',
        legend:'none',
        vAxis: {title: 'Grados Centigrados'},
        colors: ['#e0440e'],
        hAxis: { 
          title: 'Minutos',
          gridlines: { count: 10 } }
      };
      var chart = new google.visualization.LineChart(document.getElementById('curve_chart1'));
      chart.draw(data, options);
      
    }
  } 
}
