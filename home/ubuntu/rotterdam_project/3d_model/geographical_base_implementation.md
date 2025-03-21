# Rotterdam 3D Model - Geographical Base Implementation

## Terrain and Water Features

### Nieuwe Maas River
```
// SketchUp Ruby code for creating the river surface
river_surface = Sketchup.active_model.entities.add_face([0,0,0], [1000,0,0], [1000,500,0], [0,500,0])
river_surface.material = "Water"
river_surface.back_material = "Water"
river_material = river_surface.material
river_material.color = Sketchup::Color.new(65, 105, 225, 200) // Semi-transparent blue
```

### Riverbanks and Embankments
```
// North bank (city center side)
north_bank = Sketchup.active_model.entities.add_face([0,0,0], [1000,0,0], [1000,-200,5], [0,-200,5])
north_bank.material = "Concrete"
north_bank_material = north_bank.material
north_bank_material.color = Sketchup::Color.new(200, 200, 200)

// South bank (Wilhelminapier side)
south_bank = Sketchup.active_model.entities.add_face([0,500,0], [1000,500,0], [1000,700,5], [0,700,5])
south_bank.material = "Concrete"
south_bank_material = south_bank.material
south_bank_material.color = Sketchup::Color.new(200, 200, 200)
```

## Key Landmarks and Buildings

### Wilhelminapier Area

#### De Rotterdam Building
```
// Base footprint
de_rotterdam_base = Sketchup.active_model.entities.add_face([800,550,5], [850,550,5], [850,600,5], [800,600,5])
// Extrude to create three connected towers
de_rotterdam_base.pushpull(150)
// Split into three tower segments
// Add details and textures
```

#### Hotel New York
```
// Base footprint
hotel_ny_base = Sketchup.active_model.entities.add_face([700,520,5], [740,520,5], [740,560,5], [700,560,5])
// Extrude main building
hotel_ny_base.pushpull(30)
// Add copper domes
dome1 = Sketchup.active_model.entities.add_circle([710,530,35], [0,0,1], 10)
dome1_face = Sketchup.active_model.entities.add_face(dome1)
dome1_face.pushpull(10)
// Add details and textures
```

#### World Port Center
```
// Base footprint
wpc_base = Sketchup.active_model.entities.add_face([600,540,5], [640,540,5], [640,580,5], [600,580,5])
// Extrude main building
wpc_base.pushpull(120)
// Add details and textures
```

#### Luxor Theater
```
// Base footprint with distinctive shape
luxor_base = Sketchup.active_model.entities.add_face([500,530,5], [550,530,5], [560,560,5], [490,560,5])
// Extrude main building
luxor_base.pushpull(25)
// Add roof details
// Add details and textures
```

### Erasmus Bridge
```
// Main bridge deck
bridge_deck = Sketchup.active_model.entities.add_face([400,200,5], [600,500,5], [590,505,5], [390,205,5])
// Add bridge pylon
pylon_base = Sketchup.active_model.entities.add_circle([500,350,5], [0,0,1], 5)
pylon_face = Sketchup.active_model.entities.add_face(pylon_base)
pylon_face.pushpull(140)
// Add cables
// Add details and textures
```

### City Center Elements
```
// Create simplified building blocks for city center
// North of the river
for i in 0..5
  for j in 0..5
    building_base = Sketchup.active_model.entities.add_face([100+i*80,-50-j*80,5], [150+i*80,-50-j*80,5], [150+i*80,-100-j*80,5], [100+i*80,-100-j*80,5])
    height = 20 + rand(60)
    building_base.pushpull(height)
  end
end
```

## Interactive Framework Setup

### Layer Organization
```
// Create layers for different elements
model = Sketchup.active_model
layers = model.layers
base_terrain_layer = layers.add("Base Terrain")
water_layer = layers.add("Water")
buildings_layer = layers.add("Buildings")
infrastructure_layer = layers.add("Infrastructure")
climate_adaptation_layer = layers.add("Climate Adaptation")
weather_effects_layer = layers.add("Weather Effects")
```

### Scene Setup
```
// Create scenes for different views
pages = model.pages
overview_scene = pages.add("Overview")
wilhelminapier_scene = pages.add("Wilhelminapier")
erasmus_bridge_scene = pages.add("Erasmus Bridge")
aerial_scene = pages.add("Aerial View")
```

### Dynamic Components
```
// Create component definitions for interactive elements
definitions = model.definitions
building_with_roof = definitions.add("Building with Green Roof")
// Add geometry to component
// Add attribute dictionary for interactive properties
building_with_roof.set_attribute("dynamic_attributes", "green_roof_active", "false")
```

## Technical Implementation Notes

This pseudocode represents the approach for implementing the geographical base model in SketchUp Pro. The actual implementation will involve:

1. Creating the terrain and water features with proper textures
2. Modeling stylized but recognizable versions of key landmarks
3. Setting up the layer structure for interactive elements
4. Creating scenes for different viewpoints
5. Preparing dynamic components for climate adaptation features

The model will be optimized for interactive performance while maintaining visual clarity to effectively demonstrate Rotterdam's climate adaptation measures.
