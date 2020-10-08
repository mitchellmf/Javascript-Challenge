// from data.js ;

// Get a reference to the table body
var tbody = d3.select("tbody");

function buildtable(data) {
  data.forEach(function(sighting) {
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

// //////////////////////////////////////////


function handleClick () {
// Step 5: Use d3 to update each cell's text with UFO sighting values (weekday, date, high, low)
console.log("clicked")
var selected_datetime = d3.select("#datetime").property("value")
if (selected_datetime) {
  filtered = data.filter(row => row.datetime == selected_datetime)
}
else {
filtered = data
}

tbody.html("")
buildtable(filtered)
}

buildtable(data)

d3.selectAll("#filter-btn").on("click", handleClick);
