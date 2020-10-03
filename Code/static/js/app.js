// from data.js ;

// Arrays to hold movie scores



// //////////////////////////////////////////


// Get a reference to the table body
var tbody = d3.select("tbody");

function handleClick () {
// Step 5: Use d3 to update each cell's text with UFO sighting values (weekday, date, high, low)
console.log("clicked")
var selected_datetime = d3.select("#datetime").property("value")
filtered = data.filter(row => row.datetime == selected_datetime)

tbody.html("")

filtered.forEach(function(sighting) {
  console.log(sighting);
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(function([key, value]) {
    console.log(key, value);

    // Append a cell to the row for each value in the UFO sighting object
    var cell = row.append("td");
    cell.text(value);
  });
});

}

d3.selectAll("#filter-btn").on("click", handleClick);
