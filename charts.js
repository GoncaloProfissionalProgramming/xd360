 // Load the Visualization API and the corechart package.
 google.charts.load('current', {'packages':['corechart']});

 // Set a callback to run when the Google Visualization API is loaded.
 google.charts.setOnLoadCallback(ColumndrawChart);
 google.charts.setOnLoadCallback(LinedrawChart);
 google.charts.setOnLoadCallback(CircledrawChart1);
 google.charts.setOnLoadCallback(CircledrawChart2);
 google.charts.setOnLoadCallback(BardrawChart);

 // Callback that creates and populates a data table,
 // instantiates the pie chart, passes in the data and
 // draws it.
 function ColumndrawChart() {

   // Create the data table.
   var data = new google.visualization.DataTable();
   data.addColumn('string', '');
   data.addColumn('number', '');
   data.addRows([
	 ['1ºTrimestre|Q1', 150000],
	 ['2ºTrimestre|Q2', 1000],
	 ['3ºTrimestre|Q3', 15000],
	 ['4ºTrimestre|Q4', 1]
	
   ]);

   // Set chart options
   var options = {
				  'width':1695,
				  'height':192,};

   // Instantiate and draw our chart, passing in some options.
   var chart = new google.visualization.ColumnChart(document.getElementById('CanvasT'));
   chart.draw(data, options);
 }

 function LinedrawChart() {
	var data = google.visualization.arrayToDataTable([
	  ['Year', ''],
	  ['2013',  1000],
	  ['2014',  1170],
	  ['2015',  660],
	  ['2016',  1030]
	]);

	var options = {
	 
	  hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
	  vAxis: {minValue: 0}
	};

	var chart = new google.visualization.AreaChart(document.getElementById('myCanvas'));
	chart.draw(data, options);
  }

  function CircledrawChart1() {
	var data = google.visualization.arrayToDataTable([
	  ['Task', 'Hours per Day'],
	  ['Work',     11],
	  ['Eat',      2],
	  ['Commute',  2],
	  ['Watch TV', 2],
	  ['Sleep',    7]
	]);

	var options = {
	  title: 'My Daily Activities',
	  pieHole: 0.4,
	  'width':809,
	  'height':325,
	  
	};

	var chart = new google.visualization.PieChart(document.getElementById('CanvasVendedores'));
	chart.draw(data, options);
  }

  function CircledrawChart2() {
	var data = google.visualization.arrayToDataTable([
	  ['Task', 'Hours per Day'],
	  ['Work',     11],
	  ['Eat',      2],
	  ['Commute',  2],
	  ['Watch TV', 2],
	  ['Sleep',    7]
	]);

	var options = {
	  title: 'My Daily Activities',
	  pieHole: 0.4,
	  'width':809,
	  'height':325,
	};

	var chart = new google.visualization.PieChart(document.getElementById('CanvasTerminais'));
	chart.draw(data, options);
  }

  function BardrawChart() {
	var data = google.visualization.arrayToDataTable([
	  ['Opening Move', 'Percentage'],
	  ["King's pawn (e4)", 44],
	  ["Queen's pawn (d4)", 31],
	  ["Knight to King 3 (Nf3)", 12],
	  ["Queen's bishop pawn (c4)", 10],
	  ['Other', 3]
	]);

	var options = {
	  title: 'Chess opening moves',
	  width: 1694,
	  legend: { position: 'none' },
	  chart: { title: 'Chess opening moves',
			   subtitle: 'popularity by percentage' },
	  bars: 'horizontal', // Required for Material Bar Charts.
	  axes: {
		x: {
		  0: { side: 'top', label: 'Percentage'} // Top x-axis.
		}
	  },
	  bar: { groupWidth: "90%" }
	};

	var chart = new google.visualization.BarChart(document.getElementById('FamiliasCanvas'));
    chart.draw(data, options);
  };

