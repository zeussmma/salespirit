import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <BackToTop />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold gradient-text mb-4">Salespirit</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Igniting your brand's potential with data-driven marketing strategies
                that deliver measurable results and sustainable growth.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors duration-300">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors duration-300">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors duration-300">
                  Facebook
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#services" className="hover:text-orange-600 transition-colors duration-300">SEO & Search Marketing</a></li>
                <li><a href="#services" className="hover:text-orange-600 transition-colors duration-300">Digital Advertising</a></li>
                <li><a href="#services" className="hover:text-orange-600 transition-colors duration-300">Brand Strategy</a></li>
                <li><a href="#services" className="hover:text-orange-600 transition-colors duration-300">Web Development</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>hello@salespirit.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Marketing Street</li>
                <li>New York, NY 10001</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Salespirit. All rights reserved. Built with passion for your success.</p>
          </div>
        </div>
      </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;
