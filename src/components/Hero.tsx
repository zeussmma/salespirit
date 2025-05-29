import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToResults = () => {
    const element = document.querySelector('#results');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '500+', label: 'Clients Served' },
    { value: '250%', label: 'Average ROI' },
    { value: '98%', label: 'Client Retention' },
  ];

  const features = [
    'Data-driven strategies',
    'Proven track record',
    'Expert team',
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20 scroll-mt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-white">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent-blue/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      </div>

      <div className="relative container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-medium">
                <Star size={16} className="fill-current" />
                Trusted by 500+ businesses
              </div>

              <h1 className="heading-1">
                Transform Your Business with
                <span className="gradient-text"> Strategic Marketing</span>
              </h1>

              <p className="body-large max-w-xl">
                We help ambitious businesses accelerate growth through data-driven marketing strategies
                that deliver measurable results and sustainable success.
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-neutral-600">
                  <CheckCircle size={16} className="text-accent-green" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={scrollToContact}
                className="btn btn-primary btn-lg group"
              >
                Start Your Growth Journey
                <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={scrollToResults}
                className="btn btn-secondary btn-lg group"
              >
                <Play size={20} />
                View Results
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-200"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-neutral-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="card p-8 shadow-large">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="heading-4">Growth Dashboard</h3>
                    <div className="flex items-center gap-2 text-accent-green">
                      <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                      <span className="text-sm font-medium">Live</span>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-neutral-50 rounded-lg">
                      <div className="text-2xl font-bold text-neutral-900">+127%</div>
                      <div className="text-sm text-neutral-500">Revenue Growth</div>
                    </div>
                    <div className="p-4 bg-neutral-50 rounded-lg">
                      <div className="text-2xl font-bold text-neutral-900">2.4x</div>
                      <div className="text-sm text-neutral-500">Lead Generation</div>
                    </div>
                    <div className="p-4 bg-neutral-50 rounded-lg">
                      <div className="text-2xl font-bold text-neutral-900">89%</div>
                      <div className="text-sm text-neutral-500">Conversion Rate</div>
                    </div>
                    <div className="p-4 bg-neutral-50 rounded-lg">
                      <div className="text-2xl font-bold text-neutral-900">4.2</div>
                      <div className="text-sm text-neutral-500">ROAS</div>
                    </div>
                  </div>

                  {/* Chart Placeholder */}
                  <div className="h-32 bg-gradient-to-r from-primary-100 to-accent-blue/10 rounded-lg flex items-end justify-center p-4">
                    <div className="flex items-end gap-2">
                      {[40, 60, 45, 80, 65, 90, 75].map((height, index) => (
                        <div
                          key={index}
                          className="bg-primary-500 rounded-sm"
                          style={{ height: `${height}%`, width: '12px' }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-primary-500 text-white p-3 rounded-lg shadow-lg"
              >
                <div className="text-sm font-semibold">+250% ROI</div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-accent-green text-white p-3 rounded-lg shadow-lg"
              >
                <div className="text-sm font-semibold">98% Satisfied</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
