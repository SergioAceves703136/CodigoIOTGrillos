google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Dias', 77]
  ]);

  var options = {
    width: 500, height: 200,
    redFrom: 90, redTo: 100,
    yellowFrom:75, yellowTo: 90,
    minorTicks: 5
  };
  var chart = new google.visualization.Gauge(document.getElementById('chart_div'));
  chart.draw(data, options);
}