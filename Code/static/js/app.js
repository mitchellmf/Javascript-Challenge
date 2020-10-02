// from data.js ;

// Arrays to hold movie scores
var var_sighting = [];

// selected_datetime = d3.select("#datetime") ;
selected_datetime = "1/13/2010" ; 

// Use a for loop to iterate through the UFO sightings
for (var i = 0; i < data.length; i++) {

  // Call up each sighting to the ratings count
  var sighting = data[i].datetime;

  // If the UFO sightings happened on the specified date, add it to the list of UFO sightings
  if (sighting == selected_datetime) {
    var_sighting.push(data[i]);
  }
}

// Print results
console.log(var_sighting);

// //////////////////////////////////////////

var data = var_sighting ;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO sighting data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each UFO sighting
data.forEach(function(sighting) {
  console.log(sighting);
});

// Step 2:  Use d3 to append one table row `tr` for each UFO sighting object
data.forEach(function(sighting) {
  console.log(sighting);
  var row = tbody.append("tr");
});

// Step 3:  Use `Object.entries` to console.log each UFO sighting value
data.forEach(function(sighting) {
  console.log(sighting);
  var row = tbody.append("tr");

  Object.entries(sighting).forEach(function([key, value]) {
    console.log(key, value);
  });
});

// Step 4: Use d3 to append 1 cell per UFO sighting value (weekday, date, high, low)
data.forEach(function(sighting) {
  console.log(sighting);
var row = tbody.append("tr");

  Object.entries(sighting).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value in the UFO sighting object
    var cell = row.append("td");
  });
});

// Step 5: Use d3 to update each cell's text with UFO sighting values (weekday, date, high, low)
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


