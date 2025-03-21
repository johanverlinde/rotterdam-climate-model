import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Main viewer class for Rotterdam 3D model
export class RotterdamModelViewer {
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls;
  private model: THREE.Group | null = null;
  
  // Climate feature layers
  private greenRoofs: THREE.Group | null = null;
  private waterSquares: THREE.Group | null = null;
  
  // Weather effects
  private rainEffect: THREE.Points | null = null;
  private heatEffect: THREE.Mesh | null = null;
  private waterLevelMesh: THREE.Mesh | null = null;
  
  constructor(container: HTMLElement) {
    this.container = container;
    
    // Initialize scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xd0e6ff); // Light blue sky
    
    // Initialize camera
    this.camera = new THREE.PerspectiveCamera(
      60, 
      container.clientWidth / container.clientHeight, 
      0.1, 
      2000
    );
    this.camera.position.set(500, -300, 300);
    this.camera.lookAt(500, 300, 0);
    
    // Initialize renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
    container.appendChild(this.renderer.domElement);
    
    // Initialize controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    
    // Add lights
    this.addLights();
    
    // Handle window resize
    window.addEventListener('resize', this.onWindowResize.bind(this));
    
    // Start animation loop
    this.animate();
  }
  
  private addLights(): void {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
    
    // Directional light (sun)
    const sunLight = new THREE.DirectionalLight(0xffffff, 0.8);
    sunLight.position.set(500, -500, 1000);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    this.scene.add(sunLight);
  }
  
  private onWindowResize(): void {
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
  }
  
  private animate(): void {
    requestAnimationFrame(this.animate.bind(this));
    
    // Update controls
    this.controls.update();
    
    // Update any animations (rain, water level, etc.)
    this.updateAnimations();
    
    // Render scene
    this.renderer.render(this.scene, this.camera);
  }
  
  private updateAnimations(): void {
    // Update rain particles if active
    if (this.rainEffect && this.rainEffect.visible) {
      const rainParticles = this.rainEffect.geometry.attributes.position;
      for (let i = 0; i < rainParticles.count; i++) {
        rainParticles.setY(i, rainParticles.getY(i) - 2);
        
        // Reset particles that reach the ground
        if (rainParticles.getY(i) < 0) {
          rainParticles.setY(i, 200);
        }
      }
      rainParticles.needsUpdate = true;
    }
  }
  
  // Load the Rotterdam 3D model
  public async loadModel(modelPath: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const loader = new GLTFLoader();
      
      loader.load(
        modelPath,
        (gltf) => {
          this.model = gltf.scene;
          this.scene.add(this.model);
          
          // Extract climate feature layers
          this.extractClimateLayers();
          
          resolve();
        },
        undefined,
        (error) => {
          console.error('Error loading model:', error);
          reject(error);
        }
      );
    });
  }
  
  // Extract climate feature layers from the loaded model
  private extractClimateLayers(): void {
    if (!this.model) return;
    
    // Find green roof layer
    this.model.traverse((child) => {
      if (child.name === 'GreenRoofs') {
        this.greenRoofs = child as THREE.Group;
      } else if (child.name === 'WaterSquares') {
        this.waterSquares = child as THREE.Group;
      }
    });
  }
  
  // Toggle green roofs visibility
  public toggleGreenRoofs(visible: boolean): void {
    if (this.greenRoofs) {
      this.greenRoofs.visible = visible;
    }
  }
  
  // Set green roof coverage (0-100%)
  public setGreenRoofCoverage(coverage: number): void {
    if (!this.greenRoofs) return;
    
    // Scale the green roof meshes based on coverage percentage
    this.greenRoofs.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const scale = coverage / 100;
        child.scale.set(scale, 1, scale);
      }
    });
  }
  
  // Toggle water squares visibility
  public toggleWaterSquares(visible: boolean): void {
    if (this.waterSquares) {
      this.waterSquares.visible = visible;
    }
  }
  
  // Set water level in water squares (0-100%)
  public setWaterLevel(level: number): void {
    if (!this.waterSquares) return;
    
    // Adjust water level in water square meshes
    this.waterSquares.traverse((child) => {
      if (child instanceof THREE.Mesh && child.name.includes('Water')) {
        const maxHeight = 2; // Maximum water height in meters
        const height = (level / 100) * maxHeight;
        
        // Update water mesh position
        child.position.y = height - maxHeight;
      }
    });
  }
  
  // Set weather condition
  public setWeatherCondition(condition: 'normal' | 'heavy_rain' | 'extreme_heat' | 'storm_surge', intensity: number): void {
    // Clear previous weather effects
    this.clearWeatherEffects();
    
    switch (condition) {
      case 'normal':
        // No special effects for normal weather
        break;
        
      case 'heavy_rain':
        this.createRainEffect(intensity);
        this.setWaterLevel(intensity);
        break;
        
      case 'extreme_heat':
        this.createHeatEffect(intensity);
        break;
        
      case 'storm_surge':
        this.createStormSurgeEffect(intensity);
        break;
    }
  }
  
  // Clear all weather effects
  private clearWeatherEffects(): void {
    // Remove rain effect
    if (this.rainEffect) {
      this.scene.remove(this.rainEffect);
      this.rainEffect = null;
    }
    
    // Remove heat effect
    if (this.heatEffect) {
      this.scene.remove(this.heatEffect);
      this.heatEffect = null;
    }
    
    // Reset water level
    if (this.waterLevelMesh) {
      this.scene.remove(this.waterLevelMesh);
      this.waterLevelMesh = null;
    }
  }
  
  // Create rain particle effect
  private createRainEffect(intensity: number): void {
    // Calculate number of raindrops based on intensity
    const raindropsCount = Math.floor(intensity * 10);
    
    // Create raindrop particles
    const rainGeometry = new THREE.BufferGeometry();
    const rainPositions = new Float32Array(raindropsCount * 3);
    
    for (let i = 0; i < raindropsCount; i++) {
      const i3 = i * 3;
      rainPositions[i3] = Math.random() * 1000; // x
      rainPositions[i3 + 1] = Math.random() * 200; // y
      rainPositions[i3 + 2] = Math.random() * 700; // z
    }
    
    rainGeometry.setAttribute('position', new THREE.BufferAttribute(rainPositions, 3));
    
    const rainMaterial = new THREE.PointsMaterial({
      color: 0xaaaaff,
      size: 1.5,
      transparent: true,
      opacity: 0.6
    });
    
    this.rainEffect = new THREE.Points(rainGeometry, rainMaterial);
    this.scene.add(this.rainEffect);
  }
  
  // Create heat effect (temperature overlay)
  private createHeatEffect(intensity: number): void {
    // Create a semi-transparent overlay to represent heat
    const heatGeometry = new THREE.PlaneGeometry(1000, 1000);
    
    // Calculate color based on intensity (red for high heat)
    const r = 1;
    const g = 1 - (intensity / 100) * 0.8;
    const b = 1 - (intensity / 100);
    const opacity = (intensity / 100) * 0.4;
    
    const heatMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(r, g, b),
      transparent: true,
      opacity: opacity,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    
    this.heatEffect = new THREE.Mesh(heatGeometry, heatMaterial);
    this.heatEffect.rotation.x = -Math.PI / 2;
    this.heatEffect.position.y = 1;
    this.scene.add(this.heatEffect);
  }
  
  // Create storm surge effect (rising water)
  private createStormSurgeEffect(intensity: number): void {
    // Create water surface with variable height
    const waterGeometry = new THREE.PlaneGeometry(1000, 700);
    const waterMaterial = new THREE.MeshStandardMaterial({
      color: 0x4169e1,
      transparent: true,
      opacity: 0.7
    });
    
    this.waterLevelMesh = new THREE.Mesh(waterGeometry, waterMaterial);
    this.waterLevelMesh.rotation.x = -Math.PI / 2;
    
    // Calculate water level based on intensity
    const maxRise = 10; // Maximum water rise in meters
    const waterRise = (intensity / 100) * maxRise;
    this.waterLevelMesh.position.y = waterRise;
    
    this.scene.add(this.waterLevelMesh);
  }
  
  // Set camera to predefined view
  public setView(view: 'overview' | 'wilhelminapier' | 'erasmus_bridge' | 'aerial' | 'section'): void {
    switch (view) {
      case 'overview':
        this.camera.position.set(500, -300, 300);
        this.camera.lookAt(500, 300, 0);
        break;
        
      case 'wilhelminapier':
        this.camera.position.set(700, 400, 100);
        this.camera.lookAt(800, 550, 50);
        break;
        
      case 'erasmus_bridge':
        this.camera.position.set(300, 300, 100);
        this.camera.lookAt(500, 350, 50);
        break;
        
      case 'aerial':
        this.camera.position.set(500, 200, 500);
        this.camera.lookAt(500, 300, 0);
        break;
        
      case 'section':
        this.camera.position.set(600, 300, 100);
        this.camera.lookAt(500, 300, 50);
        break;
    }
    
    this.controls.update();
  }
  
  // Dispose of resources when no longer needed
  public dispose(): void {
    window.removeEventListener('resize', this.onWindowResize.bind(this));
    this.renderer.dispose();
  }
}
