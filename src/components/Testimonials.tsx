import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, Users, Target } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechFlow Solutions',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      content: 'Salespirit transformed our entire marketing approach. Their data-driven strategies increased our lead generation by 300% in just 6 months.',
      rating: 5,
      metric: '+300%',
      metricLabel: 'Lead Generation',
      icon: <Users className="text-accent-blue" size={20} />
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'GrowthLab Inc.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      content: 'Working with Salespirit has been a game-changer. Their team consistently delivers campaigns that exceed our expectations.',
      rating: 5,
      metric: '+250%',
      metricLabel: 'Revenue Growth',
      icon: <TrendingUp className="text-accent-green" size={20} />
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'Urban Fitness Co.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      content: 'The results speak for themselves. Our online presence has never been stronger, and customer acquisition costs dropped significantly.',
      rating: 5,
      metric: '+400%',
      metricLabel: 'Conversion Rate',
      icon: <Target className="text-primary-500" size={20} />
    }
  ];

  const stats = [
    { value: '98%', label: 'Client Satisfaction' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '500+', label: 'Happy Clients' },
    { value: '6+', label: 'Years Experience' }
  ];

  return (
    <section id="testimonials" className="section bg-neutral-50 scroll-mt-20">
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
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business leaders are saying
            about their transformative experience with Salespirit.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-neutral-900 mb-2">{stat.value}</div>
              <div className="body-small">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="card p-12 mb-16 bg-gradient-to-br from-primary-50 to-accent-blue/10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="text-primary-500 mx-auto mb-6" size={48} />
            <blockquote className="text-2xl md:text-3xl font-medium text-neutral-900 mb-8 leading-relaxed">
              "Salespirit didn't just improve our marketing—they transformed our entire business.
              The strategic insights and execution quality are simply outstanding."
            </blockquote>
            <div className="flex items-center justify-center gap-6">
              <img
                src={testimonials[0].image}
                alt={testimonials[0].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-neutral-900">{testimonials[0].name}</div>
                <div className="text-neutral-600">{testimonials[0].role}, {testimonials[0].company}</div>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 card-hover"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>

              {/* Content */}
              <p className="body mb-6 italic">"{testimonial.content}"</p>

              {/* Result Metric */}
              <div className="bg-neutral-100 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-3">
                  {testimonial.icon}
                  <div>
                    <div className="text-2xl font-bold text-neutral-900">{testimonial.metric}</div>
                    <div className="text-sm text-neutral-600">{testimonial.metricLabel}</div>
                  </div>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                  <div className="text-sm text-neutral-600">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="card p-8">
            <h3 className="heading-4 mb-6">Trusted by Growing Businesses</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                <span className="text-neutral-600 font-semibold">TechFlow</span>
              </div>
              <div className="h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                <span className="text-neutral-600 font-semibold">GrowthLab</span>
              </div>
              <div className="h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                <span className="text-neutral-600 font-semibold">Urban Fitness</span>
              </div>
              <div className="h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                <span className="text-neutral-600 font-semibold">InnovateTech</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
