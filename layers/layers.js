ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32632").setExtent([574918.770132, 453617.075087, 578594.416624, 455830.445630]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_SATELLITE_1 = new ol.layer.Tile({
            'title': 'SATELLITE',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PARCELLES_2 = new ol.format.GeoJSON();
var features_PARCELLES_2 = format_PARCELLES_2.readFeatures(json_PARCELLES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_PARCELLES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARCELLES_2.addFeatures(features_PARCELLES_2);
var lyr_PARCELLES_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PARCELLES_2, 
                style: style_PARCELLES_2,
                interactive: true,
                title: '<img src="styles/legend/PARCELLES_2.png" /> PARCELLES'
            });
var format_BATIMENTS_3 = new ol.format.GeoJSON();
var features_BATIMENTS_3 = format_BATIMENTS_3.readFeatures(json_BATIMENTS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_BATIMENTS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATIMENTS_3.addFeatures(features_BATIMENTS_3);
var lyr_BATIMENTS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATIMENTS_3, 
                style: style_BATIMENTS_3,
                interactive: true,
                title: '<img src="styles/legend/BATIMENTS_3.png" /> BATIMENTS'
            });
var format_Parcellesnonbaties_4 = new ol.format.GeoJSON();
var features_Parcellesnonbaties_4 = format_Parcellesnonbaties_4.readFeatures(json_Parcellesnonbaties_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_Parcellesnonbaties_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcellesnonbaties_4.addFeatures(features_Parcellesnonbaties_4);
var lyr_Parcellesnonbaties_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcellesnonbaties_4, 
                style: style_Parcellesnonbaties_4,
                interactive: true,
                title: '<img src="styles/legend/Parcellesnonbaties_4.png" /> Parcelles non baties'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SATELLITE_1.setVisible(false);lyr_PARCELLES_2.setVisible(true);lyr_BATIMENTS_3.setVisible(true);lyr_Parcellesnonbaties_4.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_SATELLITE_1,lyr_PARCELLES_2,lyr_BATIMENTS_3,lyr_Parcellesnonbaties_4];
lyr_PARCELLES_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'SUPERFICIE': 'SUPERFICIE', 'PROPRIETAI': 'requerant', 'CONTACT': 'contact', 'TF_N°': 'titre foncier', 'SURFACE_BA': 'BATI', 'SURFAC_NB': 'SURFAC_NB', 'BLOC': 'BLOC', 'N°_PARCEL': 'N°_PARCEL', 'N°_LOT': 'N°_LOT', });
lyr_BATIMENTS_3.set('fieldAliases', {'id': 'id', 'TYPE_BATI': 'TYPE_BATI', 'SURFACE_BA': 'SURFACE_BA', 'Surf_BATI': 'Surf_BATI', 'm2': 'm2', 'Surf_BATIE': 'Surf_BATIE', 'S_BATI': 'S_BATI', 'H_batiment': 'H_batiment', });
lyr_Parcellesnonbaties_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'SUPERFICIE': 'SUPERFICIE', 'PROPRIETAI': 'PROPRIETAI', 'CONTACT': 'CONTACT', 'TF_N°': 'TF_N°', 'SURFACE_BA': 'SURFACE_BA', 'SURFAC_NB': 'SURFAC_NB', 'BLOC': 'BLOC', 'N°_PARCEL': 'N°_PARCEL', 'N°_LOT': 'N°_LOT', });
lyr_PARCELLES_2.set('fieldImages', {'OBJECTID': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'SUPERFICIE': 'TextEdit', 'PROPRIETAI': 'ExternalResource', 'CONTACT': 'CheckBox', 'TF_N°': 'ExternalResource', 'SURFACE_BA': 'TextEdit', 'SURFAC_NB': 'TextEdit', 'BLOC': 'TextEdit', 'N°_PARCEL': 'TextEdit', 'N°_LOT': 'TextEdit', });
lyr_BATIMENTS_3.set('fieldImages', {'id': '', 'TYPE_BATI': '', 'SURFACE_BA': '', 'Surf_BATI': '', 'm2': '', 'Surf_BATIE': '', 'S_BATI': '', 'H_batiment': '', });
lyr_Parcellesnonbaties_4.set('fieldImages', {'OBJECTID': '', 'Shape_Leng': '', 'Shape_Area': '', 'SUPERFICIE': '', 'PROPRIETAI': '', 'CONTACT': '', 'TF_N°': '', 'SURFACE_BA': '', 'SURFAC_NB': '', 'BLOC': '', 'N°_PARCEL': '', 'N°_LOT': '', });
lyr_PARCELLES_2.set('fieldLabels', {'SUPERFICIE': 'header label', 'PROPRIETAI': 'no label', 'CONTACT': 'no label', 'TF_N°': 'no label', 'SURFACE_BA': 'no label', 'SURFAC_NB': 'no label', 'BLOC': 'no label', 'N°_PARCEL': 'no label', 'N°_LOT': 'inline label', });
lyr_BATIMENTS_3.set('fieldLabels', {'id': 'no label', 'TYPE_BATI': 'header label', 'SURFACE_BA': 'no label', 'Surf_BATI': 'no label', 'm2': 'no label', 'Surf_BATIE': 'no label', 'S_BATI': 'no label', 'H_batiment': 'no label', });
lyr_Parcellesnonbaties_4.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'SUPERFICIE': 'no label', 'PROPRIETAI': 'no label', 'CONTACT': 'inline label', 'TF_N°': 'no label', 'SURFACE_BA': 'header label', 'SURFAC_NB': 'inline label', 'BLOC': 'no label', 'N°_PARCEL': 'header label', 'N°_LOT': 'no label', });
lyr_Parcellesnonbaties_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});