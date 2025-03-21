# Rotterdam 3D Model - Interactive Controls Implementation

## User Interface Design

### Control Panel Layout
```
// Create main control panel
model = Sketchup.active_model
ui_layer = model.layers.add("User Interface")

// Create control panel component
definitions = model.definitions
control_panel = definitions.add("Control Panel")

// Add background and frame
panel_bg = control_panel.entities.add_face([0,0,0], [200,0,0], [200,150,0], [0,150,0])
panel_bg.material = "Panel"
panel_material = panel_bg.material
panel_material.color = Sketchup::Color.new(240, 240, 240, 200)

// Add title
title_text = control_panel.entities.add_text("Rotterdam Climate Adaptation", [10, 140, 0])
title_text.material = "Text"
title_text.material.color = Sketchup::Color.new(0, 0, 0)

// Create instance of control panel
panel_instance = model.entities.add_instance(control_panel, Geom::Transformation.new([50, 50, 200]))
panel_instance.layer = ui_layer
```

### Climate Measures Controls

#### Green Roof Controls
```
// Add green roof section to control panel
green_roof_title = control_panel.entities.add_text("Green Roofs", [10, 120, 0])
green_roof_title.material = "Text"
green_roof_title.material.color = Sketchup::Color.new(0, 100, 0)

// Add toggle button
green_roof_toggle = control_panel.entities.add_face([10, 110, 0], [30, 110, 0], [30, 100, 0], [10, 100, 0])
green_roof_toggle.material = "Button"
green_roof_toggle.material.color = Sketchup::Color.new(200, 200, 200)
green_roof_toggle_text = control_panel.entities.add_text("ON/OFF", [35, 105, 0])

// Add coverage slider
green_roof_slider_bg = control_panel.entities.add_face([10, 90, 0], [150, 90, 0], [150, 85, 0], [10, 85, 0])
green_roof_slider_bg.material = "SliderBG"
green_roof_slider_bg.material.color = Sketchup::Color.new(220, 220, 220)

green_roof_slider = control_panel.entities.add_face([10, 90, 0], [80, 90, 0], [80, 85, 0], [10, 85, 0])
green_roof_slider.material = "Slider"
green_roof_slider.material.color = Sketchup::Color.new(60, 120, 40)

green_roof_slider_text = control_panel.entities.add_text("Coverage: 50%", [10, 75, 0])

// Add attribute dictionary for interactive properties
control_panel.set_attribute("control_attributes", "green_roof_active", "true")
control_panel.set_attribute("control_attributes", "green_roof_coverage", "50")
```

#### Water Square Controls
```
// Add water square section to control panel
water_square_title = control_panel.entities.add_text("Water Squares", [10, 60, 0])
water_square_title.material = "Text"
water_square_title.material.color = Sketchup::Color.new(0, 0, 150)

// Add toggle button
water_square_toggle = control_panel.entities.add_face([10, 50, 0], [30, 50, 0], [30, 40, 0], [10, 40, 0])
water_square_toggle.material = "Button"
water_square_toggle.material.color = Sketchup::Color.new(200, 200, 200)
water_square_toggle_text = control_panel.entities.add_text("ON/OFF", [35, 45, 0])

// Add water level slider
water_level_slider_bg = control_panel.entities.add_face([10, 30, 0], [150, 30, 0], [150, 25, 0], [10, 25, 0])
water_level_slider_bg.material = "SliderBG"
water_level_slider_bg.material.color = Sketchup::Color.new(220, 220, 220)

water_level_slider = control_panel.entities.add_face([10, 30, 0], [80, 30, 0], [80, 25, 0], [10, 25, 0])
water_level_slider.material = "Slider"
water_level_slider.material.color = Sketchup::Color.new(65, 105, 225)

water_level_slider_text = control_panel.entities.add_text("Water Level: 50%", [10, 15, 0])

// Add attribute dictionary for interactive properties
control_panel.set_attribute("control_attributes", "water_square_active", "true")
control_panel.set_attribute("control_attributes", "water_level", "50")
```

### Weather Controls

#### Weather Condition Selector
```
// Create weather control panel
weather_panel = definitions.add("Weather Control Panel")

// Add background and frame
weather_bg = weather_panel.entities.add_face([0,0,0], [200,0,0], [200,150,0], [0,150,0])
weather_bg.material = "Panel"
weather_bg.material.color = Sketchup::Color.new(240, 240, 240, 200)

// Add title
weather_title = weather_panel.entities.add_text("Weather Simulation", [10, 140, 0])
weather_title.material = "Text"
weather_title.material.color = Sketchup::Color.new(0, 0, 0)

// Add weather condition buttons
normal_button = weather_panel.entities.add_face([10, 120, 0], [90, 120, 0], [90, 105, 0], [10, 105, 0])
normal_button.material = "Button"
normal_button.material.color = Sketchup::Color.new(200, 200, 200)
normal_text = weather_panel.entities.add_text("Normal", [15, 112, 0])

rain_button = weather_panel.entities.add_face([10, 100, 0], [90, 100, 0], [90, 85, 0], [10, 85, 0])
rain_button.material = "Button"
rain_button.material.color = Sketchup::Color.new(100, 100, 255)
rain_text = weather_panel.entities.add_text("Heavy Rain", [15, 92, 0])

heat_button = weather_panel.entities.add_face([10, 80, 0], [90, 80, 0], [90, 65, 0], [10, 65, 0])
heat_button.material = "Button"
heat_button.material.color = Sketchup::Color.new(255, 100, 100)
heat_text = weather_panel.entities.add_text("Extreme Heat", [15, 72, 0])

storm_button = weather_panel.entities.add_face([10, 60, 0], [90, 60, 0], [90, 45, 0], [10, 45, 0])
storm_button.material = "Button"
storm_button.material.color = Sketchup::Color.new(100, 100, 150)
storm_text = weather_panel.entities.add_text("Storm Surge", [15, 52, 0])

// Add intensity slider
intensity_title = weather_panel.entities.add_text("Weather Intensity", [10, 35, 0])

intensity_slider_bg = weather_panel.entities.add_face([10, 25, 0], [150, 25, 0], [150, 20, 0], [10, 20, 0])
intensity_slider_bg.material = "SliderBG"
intensity_slider_bg.material.color = Sketchup::Color.new(220, 220, 220)

intensity_slider = weather_panel.entities.add_face([10, 25, 0], [80, 25, 0], [80, 20, 0], [10, 20, 0])
intensity_slider.material = "Slider"
intensity_slider.material.color = Sketchup::Color.new(150, 150, 150)

intensity_text = weather_panel.entities.add_text("Intensity: 50%", [10, 10, 0])

// Add attribute dictionary for weather properties
weather_panel.set_attribute("weather_attributes", "condition", "normal")
weather_panel.set_attribute("weather_attributes", "intensity", "50")

// Create instance of weather panel
weather_instance = model.entities.add_instance(weather_panel, Geom::Transformation.new([300, 50, 200]))
weather_instance.layer = ui_layer
```

## Interactive Control Functions

### Climate Measure Control Functions

#### Green Roof Toggle Function
```
// Create function to handle green roof toggle
def toggle_green_roofs
  model = Sketchup.active_model
  control_panel = model.definitions["Control Panel"].instances.first
  
  // Get current state
  current_state = control_panel.get_attribute("control_attributes", "green_roof_active")
  new_state = (current_state == "true") ? "false" : "true"
  
  // Update control panel state
  control_panel.set_attribute("control_attributes", "green_roof_active", new_state)
  
  // Update toggle button appearance
  toggle_button = nil
  control_panel.definition.entities.grep(Sketchup::Face).each do |face|
    if face.material && face.material.name == "Button" && face.bounds.center.y.to_i == 105
      toggle_button = face
      break
    end
  end
  
  if toggle_button
    if new_state == "true"
      toggle_button.material.color = Sketchup::Color.new(60, 120, 40)
    else
      toggle_button.material.color = Sketchup::Color.new(200, 200, 200)
    end
  end
  
  // Update green roof visibility in model
  model.definitions["Green Roof"].instances.each do |instance|
    instance.set_attribute("dynamic_attributes", "active", new_state)
    instance.visible = (new_state == "true")
  end
  
  // Update temperature visualization if in heat wave mode
  weather_panel = model.definitions["Weather Control Panel"].instances.first
  if weather_panel.get_attribute("weather_attributes", "condition") == "extreme_heat"
    visualize_cooling_effect(new_state == "true")
  end
end
```

#### Green Roof Coverage Function
```
// Create function to handle green roof coverage slider
def set_green_roof_coverage(percentage)
  model = Sketchup.active_model
  control_panel = model.definitions["Control Panel"].instances.first
  
  // Update control panel state
  control_panel.set_attribute("control_attributes", "green_roof_coverage", percentage.to_s)
  
  // Update slider appearance
  slider = nil
  slider_bg = nil
  control_panel.definition.entities.grep(Sketchup::Face).each do |face|
    if face.material && face.material.name == "Slider" && face.bounds.center.y.to_i == 87
      slider = face
    elsif face.material && face.material.name == "SliderBG" && face.bounds.center.y.to_i == 87
      slider_bg = face
    end
  end
  
  if slider && slider_bg
    // Calculate new width based on percentage
    total_width = slider_bg.bounds.width
    new_width = total_width * (percentage.to_f / 100.0)
    
    // Update slider width
    points = slider.outer_loop.vertices.map { |v| v.position }
    points[1].x = points[0].x + new_width
    points[2].x = points[0].x + new_width
    slider.outer_loop.vertices.each_with_index do |v, i|
      v.position = points[i]
    end
  end
  
  // Update text
  control_panel.definition.entities.grep(Sketchup::Text).each do |text|
    if text.text.include?("Coverage")
      text.text = "Coverage: #{percentage}%"
      break
    end
  end
  
  // Update green roof coverage in model
  model.definitions["Green Roof"].instances.each do |instance|
    if instance.get_attribute("dynamic_attributes", "active") == "true"
      instance.set_attribute("dynamic_attributes", "coverage", percentage.to_s)
      
      // Update geometry based on coverage
      // This would involve complex geometry manipulation in the actual implementation
    end
  end
  
  // Update temperature visualization if in heat wave mode
  weather_panel = model.definitions["Weather Control Panel"].instances.first
  if weather_panel.get_attribute("weather_attributes", "condition") == "extreme_heat"
    visualize_cooling_effect(true)
  end
end
```

#### Water Square Toggle Function
```
// Create function to handle water square toggle
def toggle_water_squares
  model = Sketchup.active_model
  control_panel = model.definitions["Control Panel"].instances.first
  
  // Get current state
  current_state = control_panel.get_attribute("control_attributes", "water_square_active")
  new_state = (current_state == "true") ? "false" : "true"
  
  // Update control panel state
  control_panel.set_attribute("control_attributes", "water_square_active", new_state)
  
  // Update toggle button appearance
  toggle_button = nil
  control_panel.definition.entities.grep(Sketchup::Face).each do |face|
    if face.material && face.material.name == "Button" && face.bounds.center.y.to_i == 45
      toggle_button = face
      break
    end
  end
  
  if toggle_button
    if new_state == "true"
      toggle_button.material.color = Sketchup::Color.new(65, 105, 225)
    else
      toggle_button.material.color = Sketchup::Color.new(200, 200, 200)
    end
  end
  
  // Update water square state in model
  model.definitions["Water Square"].instances.each do |instance|
    instance.set_attribute("dynamic_attributes", "active", new_state)
    
    // Toggle visibility of dry/wet states
    instance.definition.entities.grep(Sketchup::Face).each do |face|
      if face.material && face.material.name == "Water"
        face.hidden = !(new_state == "true")
      elsif face.material && face.material.name == "Pavement"
        face.hidden = (new_state == "true")
      end
    end
  end
  
  // Update water storage visualization
  show_water_storage(new_state == "true")
end
```

#### Water Level Function
```
// Create function to handle water level slider
def set_water_level(percentage)
  model = Sketchup.active_model
  control_panel = model.definitions["Control Panel"].instances.first
  
  // Update control panel state
  control_panel.set_attribute("control_attributes", "water_level", percentage.to_s)
  
  // Update slider appearance
  slider = nil
  slider_bg = nil
  control_panel.definition.entities.grep(Sketchup::Face).each do |face|
    if face.material && face.material.name == "Slider" && face.bounds.center.y.to_i == 27
      slider = face
    elsif face.material && face.material.name == "SliderBG" && face.bounds.center.y.to_i == 27
      slider_bg = face
    end
  end
  
  if slider && slider_bg
    // Calculate new width based on percentage
    total_width = slider_bg.bounds.width
    new_width = total_width * (percentage.to_f / 100.0)
    
    // Update slider width
    points = slider.outer_loop.vertices.map { |v| v.position }
    points[1].x = points[0].x + new_width
    points[2].x = points[0].x + new_width
    slider.outer_loop.vertices.each_with_index do |v, i|
      v.position = points[i]
    end
  end
  
  // Update text
  control_panel.definition.entities.grep(Sketchup::Text).each do |text|
    if text.text.include?("Water Level")
      text.text = "Water Level: #{percentage}%"
      break
    end
  end
  
  // Update water level in model
  model.definitions["Water Square"].instances.each do |instance|
    if instance.get_attribute("dynamic_attributes", "active") == "true"
      instance.set_attribute("dynamic_attributes", "water_level", percentage.to_s)
      
      // Adjust water level visualization
      max_depth = 2.0 // meters
      current_depth = max_depth * (percentage.to_f / 100.0)
      
      instance.definition.entities.grep(Sketchup::Face).each do |face|
        if face.material && face.material.name == "Water"
          // Adjust water surface height
          transformation = Geom::Transformation.new([0, 0, -2 + current_depth])
          face.transform!(transformation)
        end
      end
    end
  end
  
  // Update water storage visualization
  show_water_storage(true)
end
```

### Weather Control Functions

#### Weather Condition Selection
```
// Create function to handle weather condition selection
def select_weather_condition(condition)
  model = Sketchup.active_model
  weather_panel = model.definitions["Weather Control Panel"].instances.first
  
  // Update weather panel state
  weather_panel.set_attribute("weather_attributes", "condition", condition)
  
  // Update button appearances
  buttons = {
    "normal" => nil,
    "heavy_rain" => nil,
    "extreme_heat" => nil,
    "storm_surge" => nil
  }
  
  weather_panel.definition.entities.grep(Sketchup::Face).each do |face|
    if face.material && face.material.name == "Button"
      y = face.bounds.center.y.to_i
      case y
      when 112
        buttons["normal"] = face
      when 92
        buttons["heavy_rain"] = face
      when 72
        buttons["extreme_heat"] = face
      when 52
        buttons["storm_surge"] = face
      end
    end
  end
  
  // Reset all buttons
  buttons.each do |cond, button|
    if button
      if cond == condition
        button.material.color = Sketchup::Color.new(100, 255, 100) // Highlight selected
      else
        case cond
        when "normal"
          button.material.color = Sketchup::Color.new(200, 200, 200)
        when "heavy_rain"
          button.material.color = Sketchup::Color.new(100, 100, 255)
        when "extreme_heat"
          button.material.color = Sketchup::Color.new(255, 100, 100)
        when "storm_surge"
          button.material.color = Sketchup::Color.new(100, 100, 150)
        end
      end
    end
  end
  
  // Get intensity
  intensity = weather_panel.get_attribute("weather_attributes", "intensity").to_i
  
  // Apply weather effects based on condition
  case condition
  when "normal"
    create_rain_particles(0)
    visualize_water_accumulation(0)
    visualize_temperature(20)
    visualize_cooling_effect(false)
    simulate_water_level_rise(0)
    update_floating_structures(0)
  when "heavy_rain"
    create_rain_particles(intensity)
    visualize_water_accumulation(intensity)
    visualize_temperature(15)
    visualize_cooling_effect(false)
    simulate_water_level_rise(intensity * 0.2)
    update_floating_structures(intensity * 0.2)
  when "extreme_heat"
    create_rain_particles(0)
    visualize_water_accumulation(0)
    visualize_temperature(25 + (intensity * 0.1))
    visualize_cooling_effect(true)
    simulate_water_level_rise(0)
    update_floating_structures(0)
  when "storm_surge"
    create_rain_particles(intensity * 0.8)
    visualize_water_accumulation(intensity * 0.8)
    visualize_temperature(18)
    visualize_cooling_effect(false)
    simulate_water_level_rise(intensity)
    update_floating_structures(intensity)
  end
  
  // Update climate features for weather response
  control_panel = model.definitions["Control Panel"].instances.first
  
  if control_panel.get_attribute("control_attributes", "green_roof_active") == "true"
    coverage = control_panel.get_attribute("control_attributes", "green_roof_coverage").to_i
    
    case condition
    when "heavy_rain"
      water_retention = [intensity * coverage / 100.0 * 50, 100].min // Cap at 100%
      model.definitions["Green Roof"].instances.each do |instance|
        instance.set_attribute("dynamic_attributes", "water_retention", water_retention.to_s)
      end
    when "extreme_heat"
      visualize_cooling_effect(true)
    end
  end
  
  if control_panel.get_attribute("control_attributes", "water_square_active") == "true"
    water_level = control_panel.get_attribute("control_attributes", "water_level").to_i
    
    case condition
    when "heavy_rain"
      new_level = [water_level + (intensity * 0.5), 100].min // Cap at 100%
      set_water_level(new_level)
    when "storm_surge"
      new_level = [water_level + (intensity * 0.3), 100].min // Cap at 100%
      set_water_level(new_level)
    end
  end
end
```

#### Weather Intensity Control
```
// Create function to handle weather intensity slider
def set_weather_intensity(percentage)
  model = Sketchup.active_model
  weather_panel = model.definitions["Weather Control Panel"].instances.first
  
  // Update weather panel state
  weather_panel.set_attribute("weather_attributes", "intensity", percentage.to_s)
  
  // Update slider appearance
  slider = nil
  slider_bg = nil
  weather_panel.definition.entities.grep(Sketchup::Face).each do |face|
    if face.material && face.material.name == "Slider" && face.bounds.center.y.to_i == 22
      slider = face
    elsif face.material && face.material.name == "SliderBG" && face.bounds.center.y.to_i == 22
      slider_bg = face
    end
  end
  
  if slider && slider_bg
    // Calculate new width based on percentage
    total_width = slider_bg.bounds.width
    new_width = total_width * (percentage.to_f / 100.0)
    
    // Update slider width
    points = slider.outer_loop.vertices.map { |v| v.position }
    points[1].x = points[0].x + new_width
    points[2].x = points[0].x + new_width
    slider.outer_loop.vertices.each_with_index do |v, i|
      v.position = points[i]
    end
  end
  
  // Update text
  weather_panel.definition.entities.grep(Sketchup::Text).each do |text|
    if text.text.include?("Intensity")
      text.text = "Intensity: #{percentage}%"
      break
    end
  end
  
  // Get current condition and update weather effects
  condition = weather_panel.get_attribute("weather_attributes", "condition")
  select_weather_condition(condition) // This will apply the new intensity
end
```

## Scene Management

### View Selection Controls
```
// Create view selection panel
view_panel = definitions.add("View Selection Panel")

// Add background and frame
view_bg = view_panel.entities.add_face([0,0,0], [200,0,0], [200,150,0], [0,150,0])
view_bg.material = "Panel"
view_bg.material.color = Sketchup::Color.new(240, 240, 240, 200)

// Add title
view_title = view_panel.entities.add_text("View Selection", [10, 140, 0])
view_title.material = "Text"
view_title.material.color = Sketchup::Color.new(0, 0, 0)

// Add view buttons
overview_button = view_panel.entities.add_face([10, 120, 0], [190, 120, 0], [190, 105, 0], [10, 105, 0])
overview_button.material = "Button"
overview_button.material.color = Sketchup::Color.new(200, 200, 200)
overview_text = view_panel.entities.add_text("Overview", [15, 112, 0])

wilhelminapier_button = view_panel.entities.add_face([10, 100, 0], [190, 100, 0], [190, 85, 0], [10, 85, 0])
wilhelminapier_button.material = "Button"
wilhelminapier_button.material.color = Sketchup::Color.new(200, 200, 200)
wilhelminapier_text = view_panel.entities.add_text("Wilhelminapier", [15, 92, 0])

bridge_button = view_panel.entities.add_face([10, 80, 0], [190, 80, 0], [190, 65, 0], [10, 65, 0])
bridge_button.material = "Button"
bridge_button.material.color = Sketchup::Color.new(200, 200, 200)
bridge_text = view_panel.entities.add_text("Erasmus Bridge", [15, 72, 0])

aerial_button = view_panel.entities.add_face([10, 60, 0], [190, 60, 0], [190, 45, 0], [10, 45, 0])
aerial_button.material = "Button"
aerial_button.material.color = Sketchup::Color.new(200, 200, 200)
aerial_text = view_panel.entities.add_text("Aerial View", [15, 52, 0])

section_button = view_panel.entities.add_face([10, 40, 0], [190, 40, 0], [190, 25, 0], [10, 25, 0])
section_button.material = "Button"
section_button.material.color = Sketchup::Color.new(200, 200, 200)
section_text = view_panel.entities.add_text("Section View", [15, 32, 0])

// Create instance of view panel
view_instance = model.entities.add_instance(view_panel, Geom::Transformation.new([550, 50, 200]))
view_instance.layer = ui_layer
```

### Scene Selection Function
```
// Create function to handle scene selection
def select_scene(scene_name)
  model = Sketchup.active_model
  
  // Get the requested scene
  scene = nil
  model.pages.each do |page|
    if page.name == scene_name
      scene = page
      break
    end
  end
  
  // Activate the scene if found
  if scene
    model.active_page = scene
  end
  
  // Update button appearances
  view_panel = model.definitions["View Selection Panel"].instances.first
  
  buttons = {
    "Overview" => nil,
    "Wilhelminapier" => nil,
    "Erasmus Bridge" => nil,
    "Aerial View" => nil,
    "Section View" => nil
  }
  
  view_panel.definition.entities.grep(Sketchup::Face).each do |face|
    if face.material && face.material.name == "Button"
      y = face.bounds.center.y.to_i
      case y
      when 112
        buttons["Overview"] = face
      when 92
        buttons["Wilhelminapier"] = face
      when 72
        buttons["Erasmus Bridge"] = face
      when 52
        buttons["Aerial View"] = face
      when 32
        buttons["Section View"] = face
      end
    end
  end
  
  // Reset all buttons
  buttons.each do |name, button|
    if button
      if name == scene_name
        button.material.color = Sketchup::Color.new(100, 255, 100) // Highlight selected
      else
        button.material.color = Sketchup::Color.new(200, 200, 200)
      end
    end
  end
end
```

## Technical Implementation Notes

This pseudocode represents the approach for implementing interactive controls in the Rotterdam 3D model. The actual implementation will involve:

1. Creating a user-friendly control panel with toggle buttons and sliders
2. Implementing functions to control climate adaptation features (green roofs and water squares)
3. Developing weather simulation controls for different conditions and intensities
4. Creating view selection controls for navigating the model

The implementation will focus on creating an intuitive interface that allows users to interact with the model, toggle climate adaptation measures, and simulate different weather conditions to see their effects on Rotterdam's urban environment.
