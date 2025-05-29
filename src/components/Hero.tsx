import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Star } from 'lucide-react';
import { smoothScrollToInstant } from '../utils/scroll';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToResults = () => {
    smoothScrollToInstant('#testimonials', 80);
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

                  {/* Interactive Line Chart with Tooltips */}
                  <div className="h-32 bg-gradient-to-r from-primary-50 to-accent-blue/5 rounded-lg p-4 relative overflow-hidden">
                    {/* Chart Grid */}
                    <div className="absolute inset-4">
                      <div className="h-full w-full relative">
                        {/* Horizontal grid lines */}
                        {[20, 40, 60, 80].map((position) => (
                          <div
                            key={position}
                            className="absolute w-full border-t border-neutral-200/30"
                            style={{ top: `${position}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* SVG Line Chart */}
                    <div className="relative h-full w-full">
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 96" preserveAspectRatio="none">
                        {/* Area Fill */}
                        <motion.path
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.3 }}
                          transition={{ duration: 2, ease: "easeOut" }}
                          d="M20,80 Q50,70 80,65 Q110,45 140,50 Q170,35 200,25 Q230,20 260,15 L260,96 L20,96 Z"
                          fill="url(#gradient)"
                          className="drop-shadow-sm"
                        />

                        {/* Main Line */}
                        <motion.path
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, ease: "easeOut" }}
                          d="M20,80 Q50,70 80,65 Q110,45 140,50 Q170,35 200,25 Q230,20 260,15"
                          stroke="#f97316"
                          strokeWidth="3"
                          fill="none"
                          strokeLinecap="round"
                          className="drop-shadow-sm"
                        />

                        {/* Interactive Data Points */}
                        {[
                          { x: 20, y: 80, month: 'Jan', growth: '€23K' },
                          { x: 60, y: 68, month: 'Feb', growth: '€28K' },
                          { x: 100, y: 60, month: 'Mar', growth: '€34K' },
                          { x: 140, y: 45, month: 'Apr', growth: '€41K' },
                          { x: 180, y: 35, month: 'May', growth: '€47K' },
                          { x: 220, y: 25, month: 'Jun', growth: '€50K' },
                          { x: 260, y: 15, month: 'Jul', growth: '€52K' }
                        ].map((point, index) => (
                          <motion.g
                            key={index}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            className="group"
                          >
                            {/* Invisible hover area for better UX */}
                            <circle
                              cx={point.x}
                              cy={point.y}
                              r="10"
                              fill="transparent"
                              className="cursor-pointer"
                            />

                            {/* Visible data point */}
                            <circle
                              cx={point.x}
                              cy={point.y}
                              r="3"
                              fill="#f97316"
                              stroke="white"
                              strokeWidth="2"
                              className="group-hover:r-4 group-hover:fill-orange-600 transition-all duration-200 drop-shadow-sm"
                            />

                            {/* Hover ring effect */}
                            <circle
                              cx={point.x}
                              cy={point.y}
                              r="6"
                              fill="none"
                              stroke="#f97316"
                              strokeWidth="1"
                              opacity="0"
                              className="group-hover:opacity-40 transition-opacity duration-200"
                            />

                            {/* Compact Tooltip */}
                            <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                              {/* Tooltip background */}
                              <rect
                                x={point.x - 18}
                                y={point.y - 28}
                                width="36"
                                height="18"
                                rx="4"
                                fill="#1f2937"
                                className="drop-shadow-md"
                              />

                              {/* Tooltip arrow */}
                              <path
                                d={`M${point.x - 3},${point.y - 10} L${point.x},${point.y - 7} L${point.x + 3},${point.y - 10} Z`}
                                fill="#1f2937"
                              />

                              {/* Tooltip content - just percentage */}
                              <text x={point.x} y={point.y - 16} textAnchor="middle" className="fill-white text-xs font-semibold">
                                {point.growth}
                              </text>
                            </g>
                          </motion.g>
                        ))}

                        {/* Gradient Definition */}
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#f97316" stopOpacity="0.4"/>
                            <stop offset="100%" stopColor="#f97316" stopOpacity="0.05"/>
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Month Labels */}
                      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-neutral-400 px-2">
                        <span>Jan</span>
                        <span>Jul</span>
                      </div>

                      {/* Growth Indicator */}
                      <div className="absolute top-2 right-2 flex items-center gap-1 text-xs text-accent-green bg-white/80 px-2 py-1 rounded-full backdrop-blur-sm">
                        <svg width="10" height="10" viewBox="0 0 10 10" className="fill-current">
                          <path d="M2 7L5 3L8 7" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="font-semibold">+127%</span>
                      </div>
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
