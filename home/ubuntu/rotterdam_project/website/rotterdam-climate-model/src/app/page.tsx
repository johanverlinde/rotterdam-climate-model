'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Hero Section */}
      <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/rotterdam_aerial.jpg" 
            alt="Rotterdam Aerial View" 
            fill 
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/30" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Rotterdam Climate Adaptation
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
            Explore how Rotterdam is adapting to climate change with innovative measures like green roofs, water squares, and urban water buffers.
          </p>
          <Link 
            href="/model-viewer" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
          >
            Explore 3D Model
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Climate Adaptation Features</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Green Roofs */}
            <div className="bg-green-50 rounded-lg p-6 shadow-md">
              <div className="h-48 bg-green-200 rounded-lg mb-4 overflow-hidden">
                <Image 
                  src="/green_roof.jpg" 
                  alt="Green Roof" 
                  width={400} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Green Roofs</h3>
              <p className="text-gray-700">
                Rotterdam has over 220,000 m² of green roofs that absorb rainwater, reduce urban heat, and create habitats for biodiversity.
              </p>
            </div>
            
            {/* Water Squares */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-md">
              <div className="h-48 bg-blue-200 rounded-lg mb-4 overflow-hidden">
                <Image 
                  src="/water_square.jpg" 
                  alt="Water Square" 
                  width={400} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Water Squares</h3>
              <p className="text-gray-700">
                Innovative public spaces that transform during heavy rainfall to collect excess water, preventing flooding in surrounding areas.
              </p>
            </div>
            
            {/* Urban Water Buffers */}
            <div className="bg-indigo-50 rounded-lg p-6 shadow-md">
              <div className="h-48 bg-indigo-200 rounded-lg mb-4 overflow-hidden">
                <Image 
                  src="/water_buffer.jpg" 
                  alt="Urban Water Buffer" 
                  width={400} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-indigo-800 mb-2">Urban Water Buffers</h3>
              <p className="text-gray-700">
                Underground storage systems that collect and store rainwater for later use, reducing pressure on drainage systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Model Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Interactive 3D Model</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our interactive 3D model allows you to explore Rotterdam's climate adaptation measures and see how they respond to different weather conditions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Toggle green roofs and water squares on/off</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Simulate different weather conditions including heavy rainfall and extreme heat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Adjust intensity to see how measures perform under different severities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>View the city from multiple perspectives</span>
                </li>
              </ul>
              <Link 
                href="/model-viewer" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-block transition-colors"
              >
                Launch Interactive Model
              </Link>
            </div>
            <div className="md:w-1/2 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/model_preview.jpg" 
                alt="3D Model Preview" 
                width={600} 
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Rotterdam's Climate Adaptation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Rotterdam's Climate Adaptation Strategy</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-4">
            <p>
              Rotterdam, as a low-lying delta city, is particularly vulnerable to climate change impacts like sea level rise, increased rainfall, and urban heat.
            </p>
            <p>
              The city has developed a comprehensive Climate Adaptation Strategy that focuses on making Rotterdam climate-proof by 2025, while also improving the quality of life for its residents.
            </p>
            <p>
              Key elements of this strategy include water-sensitive urban design, increasing green infrastructure, and innovative solutions like water squares and floating buildings.
            </p>
            <p>
              Through these measures, Rotterdam has become a global leader in urban climate resilience, demonstrating how cities can adapt to climate change while creating more livable urban environments.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Rotterdam Climate Adaptation Model</h3>
              <p className="text-blue-200">
                Explore how Rotterdam is adapting to climate change
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <Link href="/" className="text-blue-200 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/model-viewer" className="text-blue-200 hover:text-white transition-colors">
                3D Model
              </Link>
              <Link href="/about" className="text-blue-200 hover:text-white transition-colors">
                About
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-300">
            <p>© {new Date().getFullYear()} Rotterdam Climate Adaptation Model. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
