//bar.js
//bar chart library
//09/13/18 version 1.0

function BarChart(targetId, width, height, data) {
	//base
	var chart = this;
	chart.configureChart(targetId, width, height, data);
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
	chart.axeRatio = 10; // in terms of percentage
	chart.verticalMargin = (chart.height * chart.axeRatio) / 100;
	chart.horizontalMargin = (chart.width * chart.axeRatio) / 100;
	chart.axeColor = "black";
	chart.axeWidth = 0.75;

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
