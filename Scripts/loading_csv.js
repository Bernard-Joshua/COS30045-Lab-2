d3.csv("/Data/wombats.csv", function (data) {
	console.log(data);
	wombatSightings = data;

	// Calling the function.
	barChart(wombatSightings);
});

function barChart(dataset) {
	const w = 500;
	const h = 200;

	const svg = d3
		.select("#chart") // Reference the id of the HTML element not the body.
		.append("svg")
		.attr("width", w)
		.attr("height", h);

	svg.selectAll("rect")
		.data(dataset)
		.enter()
		.append("rect")
		.attr("x", (d, i) => i * (w / dataset.length))
		.attr("y", (d, i) => h - 4 * d.wombats) // Reference the column-name to get the values.
		.attr("width", 35)
		.attr("height", (d, i) => 4 * d.wombats)
		.attr("fill", "navy");
		

		// Adding the Labels.
		svg.selectAll("text")
		.data(dataset)
		.enter()
		.append("text")
		.attr("x", (d, i) => i * (w / dataset.length))
		.attr("y", (d, i) => h - 4 * d.wombats)
		.text((d) => d.wombats);
}
