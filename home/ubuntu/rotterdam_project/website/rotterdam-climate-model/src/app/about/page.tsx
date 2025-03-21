'use client';

import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About the Project</h1>
          <p className="text-xl max-w-3xl">
            Learn more about Rotterdam's climate adaptation measures and how this interactive 3D model was created.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Rotterdam's Climate Challenges</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Rotterdam, as one of Europe's major port cities and situated in a delta region, faces significant climate challenges. Located largely below sea level and bisected by the Nieuwe Maas river, the city is particularly vulnerable to:
              </p>
              <ul>
                <li><strong>Rising sea levels</strong> that threaten coastal areas and infrastructure</li>
                <li><strong>Increased precipitation</strong> and more frequent extreme rainfall events</li>
                <li><strong>Urban heat island effect</strong> causing higher temperatures in densely built areas</li>
                <li><strong>Drought periods</strong> affecting water availability and quality</li>
              </ul>
              <p>
                These challenges require innovative solutions to ensure Rotterdam remains resilient in the face of climate change while maintaining its status as a livable, economically vibrant city.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-green-700">Climate Adaptation Measures</h2>
            <div className="prose prose-lg max-w-none">
              <h3>Green Roofs</h3>
              <p>
                Rotterdam has implemented over 220,000 m² of green roofs throughout the city. These vegetated roof systems provide multiple benefits:
              </p>
              <ul>
                <li>Absorb and retain rainwater, reducing runoff by 50-80%</li>
                <li>Reduce urban heat island effect by 3-4°C</li>
                <li>Improve air quality by filtering pollutants</li>
                <li>Increase biodiversity in urban environments</li>
                <li>Improve building insulation, reducing energy consumption</li>
                <li>Extend roof lifespan by protecting from UV radiation and temperature fluctuations</li>
              </ul>
              <p>
                Notable examples include the DakAkker urban farm on the Schieblock building and the extensive green roof system on the Rotterdam Central Station.
              </p>

              <h3>Water Squares</h3>
              <p>
                Water squares are innovative multifunctional public spaces that serve as both recreational areas during dry weather and water storage facilities during heavy rainfall. Key features include:
              </p>
              <ul>
                <li>Sunken areas that can temporarily store rainwater</li>
                <li>Drainage systems that direct water to the squares from surrounding areas</li>
                <li>Controlled release of stored water after rainfall events</li>
                <li>Attractive public spaces with seating, sports facilities, and play areas</li>
              </ul>
              <p>
                The Benthemplein Water Square is the most famous example, capable of storing up to 1.7 million liters of water during heavy rainfall.
              </p>

              <h3>Urban Water Buffers</h3>
              <p>
                Rotterdam has implemented various urban water buffer systems to manage excess water:
              </p>
              <ul>
                <li>Underground water storage tanks beneath public spaces</li>
                <li>Water retention areas in parks and green spaces</li>
                <li>Permeable pavements that allow water infiltration</li>
                <li>Rainwater harvesting systems for later use</li>
              </ul>
              <p>
                The Museumpark underground water storage facility can hold up to 10 million liters of water during extreme rainfall events.
              </p>

              <h3>Floating Structures</h3>
              <p>
                As an innovative approach to living with water, Rotterdam has pioneered floating architecture:
              </p>
              <ul>
                <li>Floating pavilions in the Rijnhaven</li>
                <li>Floating housing in Nassauhaven</li>
                <li>Amphibious buildings that can rise with water levels</li>
                <li>Floating forests and gardens</li>
              </ul>
              <p>
                These structures demonstrate how cities can adapt to changing water levels while creating unique urban spaces.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">About the 3D Model</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                This interactive 3D model was created to visualize and demonstrate the benefits of Rotterdam's climate adaptation measures. The model focuses on the center of Rotterdam, featuring the Nieuwe Maas river and Wilhelminakade area.
              </p>
              <p>
                Key features of the model include:
              </p>
              <ul>
                <li><strong>Interactive climate adaptation measures</strong> that can be toggled on and off</li>
                <li><strong>Weather simulation capabilities</strong> showing how measures respond to different conditions</li>
                <li><strong>Multiple viewpoints</strong> to explore the city from different perspectives</li>
                <li><strong>Real-time visualization</strong> of benefits like water retention and temperature reduction</li>
              </ul>
              <p>
                The model was developed using modern web technologies including Three.js for 3D rendering and Next.js for the web application framework, making it accessible to anyone with a web browser.
              </p>
            </div>
          </section>

          <div className="text-center mt-12">
            <Link 
              href="/model-viewer" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-block transition-colors text-lg"
            >
              Explore the 3D Model
            </Link>
          </div>
        </div>
      </main>

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
