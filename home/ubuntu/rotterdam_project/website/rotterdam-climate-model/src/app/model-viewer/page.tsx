'use client';

import { useEffect, useRef, useState } from 'react';
import { RotterdamModelViewer } from '@/lib/RotterdamModelViewer';

// Weather condition type
type WeatherCondition = 'normal' | 'heavy_rain' | 'extreme_heat' | 'storm_surge';

export default function ModelViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [modelViewer, setModelViewer] = useState<RotterdamModelViewer | null>(null);
  
  // State for climate controls
  const [greenRoofsActive, setGreenRoofsActive] = useState(true);
  const [greenRoofCoverage, setGreenRoofCoverage] = useState(50);
  const [waterSquaresActive, setWaterSquaresActive] = useState(true);
  const [waterLevel, setWaterLevel] = useState(0);
  
  // State for weather controls
  const [weatherCondition, setWeatherCondition] = useState<WeatherCondition>('normal');
  const [weatherIntensity, setWeatherIntensity] = useState(50);
  
  // Initialize the 3D viewer
  useEffect(() => {
    if (!containerRef.current || modelViewer) return;
    
    // Create the model viewer
    const viewer = new RotterdamModelViewer(containerRef.current);
    setModelViewer(viewer);
    
    // Load the model
    viewer.loadModel('/models/rotterdam_climate_model.glb')
      .catch(error => console.error('Failed to load model:', error));
    
    // Cleanup on unmount
    return () => {
      viewer.dispose();
    };
  }, [containerRef, modelViewer]);
  
  // Update green roofs when state changes
  useEffect(() => {
    if (!modelViewer) return;
    modelViewer.toggleGreenRoofs(greenRoofsActive);
    modelViewer.setGreenRoofCoverage(greenRoofCoverage);
  }, [modelViewer, greenRoofsActive, greenRoofCoverage]);
  
  // Update water squares when state changes
  useEffect(() => {
    if (!modelViewer) return;
    modelViewer.toggleWaterSquares(waterSquaresActive);
    modelViewer.setWaterLevel(waterLevel);
  }, [modelViewer, waterSquaresActive, waterLevel]);
  
  // Update weather effects when condition or intensity changes
  useEffect(() => {
    if (!modelViewer) return;
    modelViewer.setWeatherCondition(weatherCondition, weatherIntensity);
  }, [modelViewer, weatherCondition, weatherIntensity]);
  
  // Handle view selection
  const handleViewChange = (view: 'overview' | 'wilhelminapier' | 'erasmus_bridge' | 'aerial' | 'section') => {
    if (!modelViewer) return;
    modelViewer.setView(view);
  };
  
  return (
    <div className="flex flex-col h-screen">
      {/* 3D Viewer Container */}
      <div ref={containerRef} className="flex-grow relative">
        {/* Loading indicator */}
        {!modelViewer && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75">
            <div className="text-2xl font-bold text-blue-600">Loading Rotterdam 3D Model...</div>
          </div>
        )}
      </div>
      
      {/* Control Panels */}
      <div className="bg-white p-4 shadow-md flex flex-wrap gap-4">
        {/* Climate Adaptation Controls */}
        <div className="bg-gray-50 p-3 rounded-lg min-w-[250px]">
          <h3 className="text-lg font-semibold mb-2 text-green-700">Climate Adaptation</h3>
          
          {/* Green Roofs Controls */}
          <div className="mb-3">
            <div className="flex items-center justify-between mb-1">
              <label className="font-medium">Green Roofs</label>
              <button 
                onClick={() => setGreenRoofsActive(!greenRoofsActive)}
                className={`px-2 py-1 rounded text-sm ${greenRoofsActive ? 'bg-green-600 text-white' : 'bg-gray-300'}`}
              >
                {greenRoofsActive ? 'ON' : 'OFF'}
              </button>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="100"
                value={greenRoofCoverage}
                onChange={(e) => setGreenRoofCoverage(parseInt(e.target.value))}
                className="w-full"
                disabled={!greenRoofsActive}
              />
              <span className="text-sm w-12">{greenRoofCoverage}%</span>
            </div>
          </div>
          
          {/* Water Squares Controls */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="font-medium">Water Squares</label>
              <button 
                onClick={() => setWaterSquaresActive(!waterSquaresActive)}
                className={`px-2 py-1 rounded text-sm ${waterSquaresActive ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
              >
                {waterSquaresActive ? 'ON' : 'OFF'}
              </button>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="100"
                value={waterLevel}
                onChange={(e) => setWaterLevel(parseInt(e.target.value))}
                className="w-full"
                disabled={!waterSquaresActive}
              />
              <span className="text-sm w-12">{waterLevel}%</span>
            </div>
          </div>
        </div>
        
        {/* Weather Simulation Controls */}
        <div className="bg-gray-50 p-3 rounded-lg min-w-[250px]">
          <h3 className="text-lg font-semibold mb-2 text-blue-700">Weather Simulation</h3>
          
          {/* Weather Condition Buttons */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <button
              onClick={() => setWeatherCondition('normal')}
              className={`px-2 py-1 rounded text-sm ${weatherCondition === 'normal' ? 'bg-gray-600 text-white' : 'bg-gray-200'}`}
            >
              Normal
            </button>
            <button
              onClick={() => setWeatherCondition('heavy_rain')}
              className={`px-2 py-1 rounded text-sm ${weatherCondition === 'heavy_rain' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Heavy Rain
            </button>
            <button
              onClick={() => setWeatherCondition('extreme_heat')}
              className={`px-2 py-1 rounded text-sm ${weatherCondition === 'extreme_heat' ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
            >
              Extreme Heat
            </button>
            <button
              onClick={() => setWeatherCondition('storm_surge')}
              className={`px-2 py-1 rounded text-sm ${weatherCondition === 'storm_surge' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
            >
              Storm Surge
            </button>
          </div>
          
          {/* Weather Intensity Slider */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="font-medium">Intensity</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="100"
                value={weatherIntensity}
                onChange={(e) => setWeatherIntensity(parseInt(e.target.value))}
                className="w-full"
              />
              <span className="text-sm w-12">{weatherIntensity}%</span>
            </div>
          </div>
        </div>
        
        {/* View Selection Controls */}
        <div className="bg-gray-50 p-3 rounded-lg min-w-[250px]">
          <h3 className="text-lg font-semibold mb-2 text-purple-700">Views</h3>
          
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleViewChange('overview')}
              className="px-2 py-1 rounded text-sm bg-purple-600 text-white"
            >
              Overview
            </button>
            <button
              onClick={() => handleViewChange('wilhelminapier')}
              className="px-2 py-1 rounded text-sm bg-purple-600 text-white"
            >
              Wilhelminapier
            </button>
            <button
              onClick={() => handleViewChange('erasmus_bridge')}
              className="px-2 py-1 rounded text-sm bg-purple-600 text-white"
            >
              Erasmus Bridge
            </button>
            <button
              onClick={() => handleViewChange('aerial')}
              className="px-2 py-1 rounded text-sm bg-purple-600 text-white"
            >
              Aerial View
            </button>
            <button
              onClick={() => handleViewChange('section')}
              className="px-2 py-1 rounded text-sm bg-purple-600 text-white"
            >
              Section View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
