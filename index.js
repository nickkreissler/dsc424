

const dat = require('./uscities.csv')
console.log(dat)

Plotly.d3.csv(dat, function(err, rows){
  console.log(rows)
  console.log(err)
  //var classArray = unpack(rows, 'class');
  //var classes = [...new Set(classArray)];

  function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }
  //console.log(classArray)
  //var data = classes.map(function(classes) {
  //   var rowsFiltered = rows.filter(function(row) {
  //       return (row.class === classes);
  //   });
  //   return {
  //      type: 'scattermapbox',
  //      name: classes,
  //      lat: unpack(rowsFiltered, 'reclat'),
  //      lon: unpack(rowsFiltered, 'reclong')
  //   };
  // });

  // var layout = {
	//  title: 'Meteorite Landing Locations',
	//  font: {
	// 	 color: 'white'
	//  },
  //   dragmode: 'zoom',
  //   mapbox: {
  //     center: {
  //       lat: 38.03697222,
  //       lon: -90.70916722
  //     },
  //     domain: {
  //       x: [0, 1],
  //       y: [0, 1]
  //     },
  //     style: 'dark',
  //     zoom: 1
  //   },
  //   margin: {
  //     r: 20,
  //     t: 40,
  //     b: 20,
  //     l: 20,
  //     pad: 0
  //   },
  //   paper_bgcolor: '#191A1A',
  //   plot_bgcolor: '#191A1A',
  //   showlegend: true,
	//  annotations: [{
	// 	 x: 0,
  //      y: 0,
  //      xref: 'paper',
  //      yref: 'paper',
	// 	 text: 'Source: <a href="https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh" style="color: rgb(255,255,255)">NASA</a>',
	// 	 showarrow: false
	//  }]
  // };

  // Plotly.setPlotConfig({
  //   mapboxAccessToken: "pk.eyJ1Ijoibmlja2tyZWlzc2xlciIsImEiOiJjazJ4dGFwcHUwMHl0M21waXAzMzRhb3ltIn0.tQR6g0HdZm6twT8eq0vXDg"
  // });

  // Plotly.plot('graph', data, layout);
})