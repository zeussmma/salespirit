import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap, Award, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="text-primary-500" size={24} />,
      title: 'Results-Driven',
      description: 'Every strategy is designed with measurable outcomes and clear ROI in mind.'
    },
    {
      icon: <Users className="text-accent-blue" size={24} />,
      title: 'Client-Centric',
      description: 'Your success is our success. We become an extension of your team.'
    },
    {
      icon: <Zap className="text-accent-green" size={24} />,
      title: 'Innovation',
      description: 'We leverage cutting-edge tools and strategies to stay ahead of the curve.'
    },
    {
      icon: <Award className="text-accent-purple" size={24} />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do.'
    }
  ];

  const stats = [
    { value: '6+', label: 'Years Experience' },
    { value: '500+', label: 'Clients Served' },
    { value: '250%', label: 'Average ROI' },
    { value: '98%', label: 'Client Retention' },
  ];

  return (
    <section id="about" className="section bg-neutral-50">
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
            About <span className="gradient-text">Salespirit</span>
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            We're a team of passionate marketers, strategists, and creatives dedicated to
            helping businesses achieve extraordinary growth through data-driven marketing.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="heading-3">Our Story</h3>
            <div className="space-y-4">
              <p className="body">
                Founded in 2018, Salespirit emerged from a simple belief: every business
                deserves marketing that actually works. We've grown from a small team of
                three to a full-service agency serving clients worldwide.
              </p>
              <p className="body">
                Our approach combines strategic thinking with creative execution, always
                grounded in data and focused on delivering measurable results that impact
                your bottom line.
              </p>
            </div>

            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn btn-primary btn-lg group"
            >
              Work With Us
              <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center card-hover"
              >
                <div className="text-3xl font-bold text-neutral-900 mb-2">
                  {stat.value}
                </div>
                <div className="body-small">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="heading-3 mb-4">Our Values</h3>
          <p className="body-large max-w-2xl mx-auto">
            These principles guide everything we do and shape how we work with our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center card-hover"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                  {value.icon}
                </div>
              </div>
              <h4 className="heading-4 mb-3">{value.title}</h4>
              <p className="body">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
