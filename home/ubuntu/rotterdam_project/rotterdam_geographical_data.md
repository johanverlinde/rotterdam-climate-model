# Rotterdam Geographical Data Sources

## 3D Building Models

### ArcGIS Rotterdam Buildings Layer
- **Source**: ArcGIS Scene Service by esri_3d
- **Description**: 3D models of buildings for Rotterdam, The Netherlands
- **Last Updated**: May 1, 2020
- **Features**:
  - Complete 3D building models for Rotterdam
  - Can be used in ArcGIS Pro projects or the Online Scene viewer
  - Includes data provided by the City of Rotterdam
- **Access Method**: Available through ArcGIS Scene Viewer or ArcGIS Pro
- **URL**: https://www.arcgis.com/home/item.html?id=6db845826cec4ebc8d6306b5c0061f7a

## Vector Map Data

### NextGIS Rotterdam Basemap
- **Source**: OpenStreetMap data with special processing
- **Description**: Daily updated vector map that includes 30 data categories
- **Last Updated**: Daily (Current as of March 20, 2025)
- **Features**:
  - Administrative boundaries
  - Road network
  - Buildings
  - Water features
  - Points of interest
  - City infrastructure
- **Format**: Available in GeoPackage format (compatible with QGIS)
- **URL**: https://data.nextgis.com/en/region/NL-CITY-002/base/

## Elevation and Topography Data

### NextGIS Rotterdam Elevation Data
- **Source**: Copernicus DEM
- **Description**: Digital elevation model for Rotterdam area
- **Last Updated**: April 1, 2023
- **Features**:
  - Geographically referenced regular raster at 30m resolution
  - Elevation contours (topography) with customizable step intervals
  - Elevation hillshade image
- **Formats**:
  - Vector layers: GeoPackage (QGIS)
  - Raster layers: GeoTIFF
  - Default contour line step: 5m
- **URL**: https://data.nextgis.com/en/region/NL-CITY-002/dem/

## Additional Resources

### Rotterdam Digital Twin Initiative
- The City of Rotterdam is developing a digital twin of the city
- Includes 3D vector and image data of above-ground and underground infrastructure
- Potentially valuable for detailed modeling of the city's infrastructure

### CADMAPPER
- Provides instant CAD files for any location on earth
- Transforms data from public sources such as OpenStreetMap, NASA, and USGS
- Could be used to generate base CAD files of Rotterdam for import into 3D modeling software
- URL: https://cadmapper.com/

## Data Acquisition Strategy

For our Rotterdam climate adaptation 3D model, we should:

1. **Base Geographical Data**: Use the NextGIS Rotterdam Basemap for comprehensive city layout, including administrative boundaries, road networks, and basic building footprints.

2. **3D Building Models**: Incorporate the ArcGIS Rotterdam Buildings Layer for detailed 3D representations of the city's buildings.

3. **Topography**: Utilize the NextGIS Rotterdam Elevation Data to accurately represent the city's terrain, which is crucial for modeling water flow and flood risks.

4. **Climate Adaptation Features**: Overlay the geographical data with the locations of existing climate adaptation measures (green roofs, water squares, urban water buffers, etc.) identified in our research.

This combination of data sources will provide a comprehensive geographical foundation for our 3D model of Rotterdam, allowing us to effectively showcase the benefits of climate adaptive measures throughout the city.
