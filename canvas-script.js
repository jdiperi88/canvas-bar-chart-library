window.onload = () => {
	var min = 1;
	var max = 200;

	// chart data
	var data = [
		{ label: "Jan", value: getRandomInt(min, max) },
		{ label: "Feb", value: getRandomInt(min, max) },
		{ label: "March", value: getRandomInt(min, max) },
		{ label: "April", value: getRandomInt(min, max) },
		{ label: "May", value: getRandomInt(min, max) },
		{ label: "June", value: getRandomInt(min, max) },
		{ label: "July", value: getRandomInt(min, max) },
		{ label: "August", value: getRandomInt(min, max) },
		{ label: "September", value: getRandomInt(min, max) }
	];

	//char specs
	var targetId = "chart";
	var canvasWidth = 600;
	var canvasHeight = 450;

	//create chart
	var chart = new BarChart(targetId, canvasWidth, canvasHeight, data);
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
	}
};
