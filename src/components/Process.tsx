import React from 'react';
import { motion } from 'framer-motion';
import { Search, Target, Rocket, BarChart, ArrowRight, CheckCircle } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: <Search className="text-primary-500" size={32} />,
      title: 'Discovery & Analysis',
      description: 'We dive deep into your business, market, and competition to understand your unique challenges and opportunities.',
      deliverables: ['Market Research Report', 'Competitor Analysis', 'Current State Audit', 'Goal Setting Workshop'],
      duration: '1-2 weeks'
    },
    {
      number: '02',
      icon: <Target className="text-accent-blue" size={32} />,
      title: 'Strategy Development',
      description: 'Based on our findings, we create a comprehensive marketing strategy tailored to your specific goals and budget.',
      deliverables: ['Custom Marketing Strategy', 'Channel Recommendations', 'Budget Allocation Plan', 'Timeline & Milestones'],
      duration: '1 week'
    },
    {
      number: '03',
      icon: <Rocket className="text-accent-green" size={32} />,
      title: 'Implementation',
      description: 'Our expert team executes the strategy with precision, launching campaigns and optimizing for maximum impact.',
      deliverables: ['Campaign Launch', 'Creative Development', 'Technical Setup', 'Initial Optimization'],
      duration: '2-4 weeks'
    },
    {
      number: '04',
      icon: <BarChart className="text-accent-purple" size={32} />,
      title: 'Monitor & Optimize',
      description: 'We continuously track performance, analyze data, and make improvements to ensure optimal results.',
      deliverables: ['Performance Reports', 'Optimization Updates', 'Strategy Refinements', 'Growth Recommendations'],
      duration: 'Ongoing'
    }
  ];

  const benefits = [
    'Transparent communication every step of the way',
    'Regular performance reports and insights',
    'Dedicated account manager for your success',
    'Flexible approach that adapts to your needs',
    'Proven methodology with measurable results'
  ];

  return (
    <section id="process" className="section bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-6">
            Our Proven <span className="gradient-text">Process</span>
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            We follow a systematic approach that ensures every project delivers exceptional results.
            Here's how we transform your marketing from good to extraordinary.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-16 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-6xl font-bold text-neutral-200">{step.number}</div>
                    <div>
                      <h3 className="heading-3 mb-2">{step.title}</h3>
                      <div className="text-sm font-medium text-primary-500">{step.duration}</div>
                    </div>
                  </div>

                  <p className="body text-lg">{step.description}</p>

                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-4">Key Deliverables:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center gap-3">
                          <CheckCircle size={16} className="text-accent-green flex-shrink-0" />
                          <span className="text-sm text-neutral-600">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="card p-12 bg-gradient-to-br from-neutral-50 to-primary-50 text-center">
                  <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    {step.icon}
                  </div>
                  <div className="text-8xl font-bold text-primary-500/20 mb-4">{step.number}</div>
                  <h4 className="heading-4 text-neutral-900">{step.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="heading-3 mb-6">Why Our Process Works</h3>
            <p className="body mb-8">
              Our methodology is built on years of experience and hundreds of successful projects.
              We've refined every step to ensure maximum efficiency and results.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={20} className="text-accent-green flex-shrink-0" />
                  <span className="text-neutral-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="card p-8 bg-gradient-to-br from-primary-500 to-accent-blue text-white">
            <h4 className="text-2xl font-bold mb-4">Ready to Get Started?</h4>
            <p className="text-primary-100 mb-6">
              Let's schedule a discovery call to discuss your goals and how our proven process
              can help you achieve them.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-primary-500 hover:bg-neutral-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2 group"
            >
              Schedule Discovery Call
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
