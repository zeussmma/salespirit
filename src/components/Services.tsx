import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Zap, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { smoothScrollToInstant } from '../utils/scroll';

const Services: React.FC = () => {
  const services = [
    {
      icon: <TrendingUp className="text-primary-500" size={32} />,
      title: 'Growth Marketing',
      description: 'Data-driven strategies that scale your business through optimized funnels and conversion optimization.',
      results: '+250% average revenue growth',
      features: ['Conversion Rate Optimization', 'A/B Testing & Analytics', 'Customer Journey Mapping', 'Growth Hacking Strategies']
    },
    {
      icon: <Target className="text-accent-blue" size={32} />,
      title: 'Digital Advertising',
      description: 'High-ROI advertising campaigns across Google, Facebook, LinkedIn, and emerging platforms.',
      results: '4.2x average ROAS',
      features: ['Google & Facebook Ads', 'Retargeting Campaigns', 'Creative Development', 'Performance Optimization']
    },
    {
      icon: <Zap className="text-accent-green" size={32} />,
      title: 'Marketing Automation',
      description: 'Intelligent systems that nurture leads and convert prospects into loyal customers automatically.',
      results: '89% lead nurturing efficiency',
      features: ['Email Marketing Sequences', 'CRM Integration', 'Lead Scoring', 'Workflow Automation']
    },
    {
      icon: <Users className="text-accent-purple" size={32} />,
      title: 'Brand Strategy',
      description: 'Comprehensive brand positioning and messaging that resonates with your target audience.',
      results: '3x brand recognition increase',
      features: ['Brand Positioning', 'Content Strategy', 'Visual Identity', 'Market Research']
    }
  ];

  const scrollToContact = () => {
    smoothScrollToInstant('#contact', 80);
  };

  return (
    <section id="services" className="section bg-white scroll-mt-20">
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
            Services That <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            We focus on the marketing strategies that matter most for your business growth.
            Every service is designed to deliver measurable ROI and sustainable results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 card-hover group"
            >
              {/* Service Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-neutral-100 rounded-xl flex items-center justify-center group-hover:bg-primary-50 transition-colors">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="heading-4 mb-2">{service.title}</h3>
                  <div className="text-sm font-medium text-primary-500 mb-3">
                    {service.results}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="body mb-6">{service.description}</p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-accent-green flex-shrink-0" />
                    <span className="text-sm text-neutral-600">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={scrollToContact}
                className="btn btn-outline btn-md w-full group"
              >
                Learn More
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="card p-12 bg-gradient-to-br from-neutral-50 to-primary-50">
            <h3 className="heading-3 mb-4">Ready to Scale Your Business?</h3>
            <p className="body-large mb-8 max-w-2xl mx-auto">
              Let's create a custom growth strategy that delivers the results your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="btn btn-primary btn-lg group"
              >
                Get Your Free Strategy Session
                <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => smoothScrollToInstant('#results', 80)}
                className="btn btn-secondary btn-lg"
              >
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
