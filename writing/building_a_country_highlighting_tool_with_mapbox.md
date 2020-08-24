---
title: "Building a Country Highlighting Tool With Mapbox"
date: 2017-07-27T12:47:00.000Z
cover_image: https://i.imgur.com/vINLBHg.png
---

For a recent project, we needed to create a dynamic map that highlighted the areas in which our client had done work. After evaluating the requirements and looking into our options, we decided to build this using [Mapbox](http://mapbox.com/). Their integration with [OpenStreetMap](https://www.openstreetmap.org/) and ability to easily customize the tilesets and style on our map was an instant hook.

Let’s see what we’re building.

{% codepen "https://codepen.io/wuz/pen/ayOwjY/", "default-tab=js,result" %}

In this example, we are going to create a pop up that shows some basic stats about the country. This method can be used for any kind of Mapbox tileset, but we're using data from [Natural Earth Data](http://www.naturalearthdata.com/downloads/10m-cultural-vectors/). Below is a link for the vector tileset we are using. Click the download countries link on that page and let’s get started!

[![getting your access token](https://wuz.fyi/static/7f97ce40e3b7dea3a2640e7740a4ecc2/5cc77/access_token.png)](/static/7f97ce40e3b7dea3a2640e7740a4ecc2/9199c/access_token.png)

To begin building, you’ll need to create a [Mapbox Studio account](http://mapbox.com/studio). Once you get signed up, you’ll need to get your API access token. Login to your Mapboxaccount and click into the Account button on the bottom left of the dashboard. Then on API access tokens on the top right. Look for your Default Public Token.

> The next couple steps assume that you are using local files to run this code. If you want to play around with it in Codepen, [here is a quick template](https://codepen.io/wuz/pen/Mvaavy?editors=0010)that has the start of the project.

Go ahead and copy then paste it into a new Javascript file named `main.js` like this:

```js
mapboxgl.accessToken =
  'pk.eyJ1IjoiYnlmcm9zdC1hcnRpY2xlcyIsImEiOiJjajVsZ3NwZGczMWNtMnFyeTR2cHRnajZ4In0.HOjYrueiLWlhLfhsDCa7wQ'; // Replace with your token
```

Now we just need some basic HTML boilerplate. Create a file called index.html and add the following:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Awesome Map</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="map"></div>
    <script src="https://api.mapbox.com/mapbox-gl-js/v0.38.0/mapbox-gl.js"></script>
    <script src="main.js"></script>
  </body>
</html>
```

Now let’s add some styles. Create a style.css and add this:

```css
#map {
  height: 500px;
  width: 1000px;
}
#map .mapboxgl-popup-content {
  padding: 10px;
  max-width: 300px;
  padding-top: 20px;
}
#map .mapboxgl-popup-content ul {
  list-style: none;
  margin: 0;
  padding: 0;
  float: left;
}

#map .mapboxgl-popup-content ul h3 {
  margin: 0 0 10px 0;
}

#map .mapboxgl-popup-content img {
  float: left;
  width: 30px;
  margin-right: 10px;
}
```

If you load up your page, you probably won’t see anything yet. Our next step is to add a map. Add the following code to main.js:

```js
mapboxgl.accessToken =
  'pk.eyJ1IjoiYnlmcm9zdC1hcnRpY2xlcyIsImEiOiJjajVsZ3NwZGczMWNtMnFyeTR2cHRnajZ4In0.HOjYrueiLWlhLfhsDCa7wQ'; // Replace with your token

var map = new mapboxgl.Map({
  container: 'map', //this is the id of the container you want your map in
  style: 'mapbox://styles/mapbox/light-v9', // this controls the style of the map. Want to see more? Try changing 'light' to 'simple'.
  minZoom: 2, // We want our map to start out pretty zoomed in to start.
});
```

> If you used the Codepen template from above, you should already have everything up to this point.

{% codepen "https://codepen.io/wuz/pen/NvGGjQ/" "default-tab=js,result" %}

At this point, we need to load in our custom tileset in Mapbox Studio. If you haven’t already, download the Natural Earth Data from earlier. Open Mapbox Studio and click on Tilesets. From there click on “New tileset”

[![the new tileset button](https://wuz.fyi/static/df1071a162ab3b23c92b230933a0045a/5cc77/new_tileset.png)](/static/df1071a162ab3b23c92b230933a0045a/e198c/new_tileset.png)

Upload the entire zip file you downloaded from Natural Earth Data.

[![uploading the tile set](https://wuz.fyi/static/f519c413c22958e7609e3d564f60565f/5cc77/upload.png)](/static/f519c413c22958e7609e3d564f60565f/0a9c2/upload.png)

Wait for it to finish uploading and processing.

[![waiting for the upload to finish](https://wuz.fyi/static/8ad67a0f5ddb65c3a68640ff32abc3ca/fddbb/waiting.png)](/static/8ad67a0f5ddb65c3a68640ff32abc3ca/fddbb/waiting.png)

Once it’s done, click into your custom tileset.

[![your custom tileset](https://wuz.fyi/static/13c9e42945e1f2a4e825c9b51e8624e2/5cc77/custom_tileset.png)](/static/13c9e42945e1f2a4e825c9b51e8624e2/232f1/custom_tileset.png)

We need to load this custom tileset into your map now. We create a function on map load. Create a custom event listener and call addLayer inside it.

[![mapid](https://wuz.fyi/static/e2cf2d185ae105634fe10c988d5a98af/02744/mapid.png)](/static/e2cf2d185ae105634fe10c988d5a98af/02744/mapid.png)

<figcaption>Copy your map ID</figcaption>

Look for the Map ID on the right hand side bar.

[![copyname](https://wuz.fyi/static/ce944423236e16ad5984bce1c429a636/5cc77/copyname.png)](/static/ce944423236e16ad5984bce1c429a636/6ff5e/copyname.png)

<figcaption>Copy the name starting with ne_</figcaption>

You’ll also need the source layer name, which is that bit starting with `ne_`. Grab this and the Map ID and add them to your JS code.

```js
mapboxgl.accessToken =
  'pk.eyJ1IjoiYnlmcm9zdC1hcnRpY2xlcyIsImEiOiJjajVsZ3NwZGczMWNtMnFyeTR2cHRnajZ4In0.HOjYrueiLWlhLfhsDCa7wQ'; // Replace with your token

var map = new mapboxgl.Map({
  container: 'map', //this is the id of the container you want your map in
  style: 'mapbox://styles/mapbox/light-v9', // this controls the style of the map. Want to see more? Try changing 'light' to 'simple'.
  minZoom: 2, // We want our map to start out pretty zoomed in to start.
});

map.on('load', function() {
  //On map load, we want to do some stuff
  map.addLayer({
    //here we are adding a layer containing the tileset we just uploaded
    id: 'countries', //this is the name of our layer, which we will need later
    source: {
      type: 'vector',
      url: 'mapbox://', // <--- Add the Map ID you copied here
    },
    'source-layer': '', // <--- Add the source layer name you copied here
    type: 'fill',
    paint: {
      'fill-color': '#52489C', //this is the color you want your tileset to have (I used a nice purple color)
      'fill-outline-color': '#F2F2F2', //this helps us distinguish individual countries a bit better by giving them an outline
    },
  });
});
```

We should now have loaded the tileset and your map should look something like this:

{% codepen "https://codepen.io/wuz/pen/WEQQav/" "default-tab=js,result" %}

Right now this isn’t super helpful. All of the countries are showing, which makes it hard to distinguish anything. Let’s filter the data a bit.

For this, we want to filter by [ISO Alpha3 Codes](http://www.nationsonline.org/oneworld/country_code_list.htm), which exist in our tileset under the ID “ADM0\_A3\_IS”.

We add a line to the load function to start filtering:

```js
mapboxgl.accessToken =
  'pk.eyJ1IjoiYnlmcm9zdC1hcnRpY2xlcyIsImEiOiJjajVsZ3NwZGczMWNtMnFyeTR2cHRnajZ4In0.HOjYrueiLWlhLfhsDCa7wQ'; // Replace with your token

var map = new mapboxgl.Map({
  container: 'map', //this is the id of the container you want your map in
  style: 'mapbox://styles/mapbox/light-v9', // this controls the style of the map. Want to see more? Try changing 'light' to 'simple'.
  minZoom: 2, // We want our map to start out pretty zoomed in to start.
});

map.on('load', function() {
  //On map load, we want to do some stuff
  map.addLayer({
    //here we are adding a layer containing the tileset we just uploaded
    id: 'countries', //this is the name of our layer, which we will need later
    source: {
      type: 'vector',
      url: 'mapbox://', // <--- Add the Map ID you copied here
    },
    'source-layer': '', // <--- Add the source layer name you copied here
    type: 'fill',
    paint: {
      'fill-color': '#52489C', //this is the color you want your tileset to have (I used a nice purple color)
      'fill-outline-color': '#F2F2F2', //this helps us distinguish individual countries a bit better by giving them an outline
    },
  });

  map.setFilter(
    'countries',
    ['in', 'ADM0_A3_IS'].concat(['USA', 'AUS', 'NGA']),
  ); // This line lets us filter by country codes.
});
```

{% codepen "https://codepen.io/wuz/pen/RZWWEv/" "default-tab=js,result" %}

Much better. Now our map highlights three countries: Nigeria, Australia, and the USA. If we want to add more countries, we can just edit the array of country codes. We could even pull these codes from an API and add them that way.

Finally, let’s make the map interactive. For this, we are going to use the API provided by [REST Countries](https://restcountries.eu/). Luckily, they have an endpoint that accepts ISO Alpha3 codes!

```js
mapboxgl.accessToken =
  'pk.eyJ1IjoiYnlmcm9zdC1hcnRpY2xlcyIsImEiOiJjajVsZ3NwZGczMWNtMnFyeTR2cHRnajZ4In0.HOjYrueiLWlhLfhsDCa7wQ'; // Replace with your token

var map = new mapboxgl.Map({
  container: 'map', //this is the id of the container you want your map in
  style: 'mapbox://styles/mapbox/light-v9', // this controls the style of the map. Want to see more? Try changing 'light' to 'simple'.
  minZoom: 2, // We want our map to start out pretty zoomed in to start.
});

map.on('load', function() {
  //On map load, we want to do some stuff
  map.addLayer({
    //here we are adding a layer containing the tileset we just uploaded
    id: 'countries', //this is the name of our layer, which we will need later
    source: {
      type: 'vector',
      url: 'mapbox://byfrost-articles.74qv0xp0', // <--- Add the Map ID you copied here
    },
    'source-layer': 'ne_10m_admin_0_countries-76t9ly', // <--- Add the source layer name you copied here
    type: 'fill',
    paint: {
      'fill-color': '#52489C', //this is the color you want your tileset to have (I used a nice purple color)
      'fill-outline-color': '#F2F2F2', //this helps us distinguish individual countries a bit better by giving them an outline
    },
  });

  map.setFilter(
    'countries',
    ['in', 'ADM0_A3_IS'].concat(['USA', 'AUS', 'NGA']),
  ); // This line lets us filter by country codes.

  map.on('click', 'countries', function(mapElement) {
    const countryCode = mapElement.features[0].properties.ADM0_A3_IS; // Grab the country code from the map properties.

    fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`) // Using tempalate tags to create the API request
      .then(data => data.json()) //fetch returns an object with a .json() method, which returns a promise
      .then(country => {
        //country contains the data from the API request
        // Let's build our HTML in a template tag
        const html = ` 
        <img src='${country.flag}' /> 
        <ul>
          <li><h3>${country.name}</h3></li>
          <li><strong>Currencies:</strong> ${country.currencies
            .map(c => c.code)
            .join(', ')}</li>
          <li><strong>Capital:</strong> ${country.capital}</li>
          <li><strong>Population:</strong> ${country.population}</li>
          <li><strong>Demonym:</strong> ${country.demonym}</li>
        </ul>
      `; // Now we have a good looking popup HTML segment.
        new mapboxgl.Popup() //Create a new popup
          .setLngLat(mapElement.lngLat) // Set where we want it to appear (where we clicked)
          .setHTML(html) // Add the HTML we just made to the popup
          .addTo(map); // Add the popup to the map
      });
  });
});
```

Now we have an interactive map with highlighted countries!

{% codepen "https://codepen.io/wuz/pen/ayOwjY/" "default-tab=js,result" %}

