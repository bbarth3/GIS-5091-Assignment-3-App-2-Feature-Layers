require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], (Map, MapView, FeatureLayer) => {
        const map = new Map({
          basemap: "hybrid"
        });

        const view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 10,
          center: [-90.1994, 38.6270]
          
          
        });

      
        var featureLayer_1 = new FeatureLayer({
  url: "https://services1.arcgis.com/iZ1vJauJB0D1lbhI/arcgis/rest/services/Enriched_School_Districts/FeatureServer"
});

map.add(featureLayer_1);

var featureLayer_2 = new FeatureLayer({
  url: "https://services2.arcgis.com/yL7v93RXrxlqkeDx/arcgis/rest/services/StLGunCrime11012016/FeatureServer"
});

map.add(featureLayer_2);
      });
