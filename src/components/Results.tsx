import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Target, ArrowRight, ExternalLink } from 'lucide-react';

const Results: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const caseStudies = [
    {
      company: 'TechFlow Solutions',
      industry: 'B2B SaaS',
      challenge: 'Low conversion rates and high customer acquisition costs',
      solution: 'Implemented conversion optimization, A/B tested landing pages, and launched targeted LinkedIn campaigns',
      results: [
        { metric: 'Conversion Rate', value: '+340%', icon: <Target className="text-accent-green" size={20} /> },
        { metric: 'Customer Acquisition Cost', value: '-65%', icon: <DollarSign className="text-accent-blue" size={20} /> },
        { metric: 'Monthly Revenue', value: '+250%', icon: <TrendingUp className="text-primary-500" size={20} /> }
      ],
      timeframe: '6 months',
      tactics: ['Landing Page Optimization', 'LinkedIn Ads', 'Email Automation', 'Lead Scoring']
    },
    {
      company: 'Urban Fitness Co.',
      industry: 'Health & Fitness',
      challenge: 'Limited online presence and declining membership due to increased competition',
      solution: 'Complete digital transformation with social media marketing, local SEO, and referral programs',
      results: [
        { metric: 'Online Leads', value: '+420%', icon: <Users className="text-accent-purple" size={20} /> },
        { metric: 'Social Media Engagement', value: '+280%', icon: <TrendingUp className="text-accent-green" size={20} /> },
        { metric: 'Monthly Memberships', value: '+195%', icon: <Target className="text-primary-500" size={20} /> }
      ],
      timeframe: '4 months',
      tactics: ['Local SEO', 'Social Media Marketing', 'Referral Programs', 'Google Ads']
    },
    {
      company: 'EcoMart Online',
      industry: 'E-commerce',
      challenge: 'High cart abandonment rates and seasonal revenue fluctuations',
      solution: 'Implemented retargeting campaigns, email automation sequences, and conversion optimization',
      results: [
        { metric: 'Cart Completion Rate', value: '+180%', icon: <Target className="text-accent-green" size={20} /> },
        { metric: 'Email Revenue', value: '+320%', icon: <DollarSign className="text-accent-blue" size={20} /> },
        { metric: 'Overall Revenue', value: '+240%', icon: <TrendingUp className="text-primary-500" size={20} /> }
      ],
      timeframe: '5 months',
      tactics: ['Retargeting Ads', 'Email Automation', 'Conversion Optimization', 'Social Commerce']
    }
  ];

  const stats = [
    { value: '500+', label: 'Successful Projects', icon: <Target className="text-primary-500" size={24} /> },
    { value: '250%', label: 'Average ROI Increase', icon: <TrendingUp className="text-accent-green" size={24} /> },
    { value: '98%', label: 'Client Retention Rate', icon: <Users className="text-accent-blue" size={24} /> },
    { value: '$50M+', label: 'Revenue Generated', icon: <DollarSign className="text-accent-purple" size={24} /> }
  ];

  return (
    <section id="results" className="section bg-neutral-50">
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
            Proven <span className="gradient-text">Results</span> That Speak for Themselves
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            Don't just take our word for it. See how we've helped businesses like yours
            achieve extraordinary growth and measurable success.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
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
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-neutral-900 mb-2">{stat.value}</div>
              <div className="body-small">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 card-hover"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div className="flex items-center gap-3 mb-4 md:mb-0">
                  <h3 className="heading-3">{study.company}</h3>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    {study.industry}
                  </span>
                </div>
                <div className="text-sm font-medium text-primary-500">
                  Results achieved in {study.timeframe}
                </div>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {study.results.map((result, resultIndex) => (
                  <div key={resultIndex} className="bg-gradient-to-br from-neutral-50 to-primary-50 p-6 rounded-xl text-center">
                    <div className="flex justify-center mb-3">
                      {result.icon}
                    </div>
                    <div className="text-3xl font-bold text-neutral-900 mb-2">{result.value}</div>
                    <div className="text-sm text-neutral-600">{result.metric}</div>
                  </div>
                ))}
              </div>

              {/* Content Grid */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-3">Challenge</h4>
                    <p className="body">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-3">Solution</h4>
                    <p className="body">{study.solution}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-900 mb-3">Key Tactics Used</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {study.tactics.map((tactic, tacticIndex) => (
                      <div key={tacticIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span className="text-neutral-700">{tactic}</span>
                      </div>
                    ))}
                  </div>

                  <button className="btn btn-outline btn-md mt-6 group">
                    View Full Case Study
                    <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="card p-12 bg-gradient-to-br from-primary-50 to-accent-blue/10">
            <h3 className="heading-3 mb-4">Ready to Be Our Next Success Story?</h3>
            <p className="body-large mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their growth with our proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="btn btn-primary btn-lg group"
              >
                Start Your Success Story
                <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#testimonials');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn btn-secondary btn-lg"
              >
                View Testimonials
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
