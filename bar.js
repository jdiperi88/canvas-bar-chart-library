//bar.js
//bar chart library
//09/13/18 version 1.0

function BarChart(targetId, width, height, data) {
	//base
	var chart = this;
	//specify config
	chart.configureChart(targetId, width, height, data);

	//pre operations
	chart.performPreOperations();

	//draw chart
	chart.drawChart();

	console.log(chart);
}

BarChart.prototype.configureChart = function(targetId, width, height, data) {
	var chart = this;

	//canvas specs from outside
	chart.setCanvasParameters(targetId, width, height, data);

	//chart specs
	chart.setChartParameters();
};

BarChart.prototype.setCanvasParameters = function(
	targetId,
	width,
	height,
	data
) {
	var chart = this;

	//canvas specs from outside
	chart.id = targetId;
	chart.width = width;
	chart.height = height;
	chart.data = data;
};

BarChart.prototype.setChartParameters = function() {
	var chart = this;
	//axis configurations
	chart.axisRatio = 10; // in terms of percentage
	chart.verticalMargin = (chart.height * chart.axisRatio) / 100;
	chart.horizontalMargin = (chart.width * chart.axisRatio) / 100;
	chart.axisColor = "black";
	chart.axisWidth = 0.75;

	//label configurations
	chart.fontRatio = 3; // in terms of percentage
	chart.fontFamily = "times";
	chart.fontStyle = "normal";
	chart.fontWeight = "300";
	chart.fontColor = "#666";
	chart.verticalFontSize = (chart.height * chart.fontRatio) / 100;
	chart.horizontalFontSize = (chart.width * chart.fontRatio) / 100;

	//Guidelines config
	chart.guidelineColor = "#e5e5e5";
	chart.guidelineWidth = 0.5;
};

BarChart.prototype.performPreOperations = function() {
	var chart = this;

	// create canvas
	chart.createCanvas();

	//get data
	chart.handleData();

	// prepare data
	chart.prepareData();
};

BarChart.prototype.createCanvas = function() {
	//base
	var chart = this;

	var canvas = document.createElement("canvas");
	canvas.id = chart.id + "-" + Math.random();
	canvas.width = chart.width;
	canvas.height = chart.height;

	// append canvas to target container
	document.getElementById(chart.id).innerHTML = ""; // sets a clean container
	document.getElementById(chart.id).appendChild(canvas); // add canvas to clean container

	//add canvas to chart object
	chart.canvas = canvas;
	chart.context = canvas.getContext("2d");
};

BarChart.prototype.handleData = function() {
	//base
	var chart = this;

	//data sets
	chart.labels = [];
	chart.values = [];

	//handle data
	chart.data.forEach(function(item) {
		chart.labels.push(item.label);
		chart.values.push(item.value);
	});
};

BarChart.prototype.prepareData = function() {
	var chart = this;

	// global var
	chart.itemNum = chart.data.length;
	chart.maxValue = Math.max.apply(null, chart.values);
	chart.minValue = Math.min.apply(null, chart.values);

	// Axis specs
	chart.verticalAxisWidth - chart.height - 2 * chart.verticalMargin; // bottom and top margins
	chart.horizontalAxisWidth - chart.width - 2 * chart.horizontalMargin; // left and right

	//label specs
	chart.verticalUpperBound = Math.ceil(chart.max / 10) * 10;
	chart.verticalLabelFreq = chart.verticalUpperBound / chart.itemsNum;
	chart.horizontalLabelFreq = chart.horizontalAxisWidth / chart.itemsNum;
};

BarChart.prototype.drawChart = function() {
	// base
	var chart = this;

	//vertical axis
	chart.drawVerticalAxis();
};

BarChart.prototype.drawVerticalAxis = function() {
	var chart = this;

	// vertical axis
	chart.context.beginPath();
	chart.context.strokeStyle = chart.axisColor;
	chart.context.lineWidth = chart.axisWidth;
	chart.context.moveTo(chart.horizontalMargin, chart.verticalMargin);
	chart.context.lineTo(
		chart.horizontalMargin,
		chart.height - chart.verticalMargin
	);
	chart.context.stroke();
};
