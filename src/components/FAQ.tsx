import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, CheckCircle, ArrowRight } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: "How quickly will I see results from your marketing campaigns?",
      answer: "Most clients see initial improvements within 30-60 days, with significant results typically visible within 90 days. However, timeline varies based on your industry, current situation, and campaign type. We provide weekly reports so you can track progress from day one."
    },
    {
      question: "What makes Salespirit different from other marketing agencies?",
      answer: "We focus exclusively on measurable ROI and business growth. Unlike agencies that chase vanity metrics, we optimize for revenue, conversions, and customer acquisition. Our data-driven approach has delivered an average 250% ROI increase for our clients."
    },
    {
      question: "Do you work with businesses in my industry?",
      answer: "We work with B2B and B2C companies across various industries including SaaS, e-commerce, healthcare, finance, and professional services. Our strategies are adaptable and based on proven marketing principles that work across sectors."
    },
    {
      question: "What's included in your marketing services?",
      answer: "Our services include strategy development, campaign execution, creative development, analytics setup, ongoing optimization, and detailed reporting. We handle everything from initial planning to daily management, so you can focus on running your business."
    },
    {
      question: "How do you measure and report on campaign performance?",
      answer: "We track key metrics like conversion rates, cost per acquisition, return on ad spend, and revenue attribution. You'll receive weekly performance reports and monthly strategy reviews with clear insights and recommendations for improvement."
    },
    {
      question: "What's your pricing structure?",
      answer: "Our pricing is based on your specific needs and goals. We offer both project-based and retainer options. During our free strategy session, we'll provide a custom proposal with transparent pricing and expected ROI projections."
    },
    {
      question: "Do you require long-term contracts?",
      answer: "We offer flexible engagement options. While we recommend at least 3-6 months for optimal results, we don't lock you into lengthy contracts. Our goal is to deliver such great results that you'll want to continue working with us."
    },
    {
      question: "Can you help if my previous marketing efforts failed?",
      answer: "Absolutely. We specialize in turning around underperforming campaigns. We'll audit your previous efforts, identify what went wrong, and implement proven strategies to get you back on track. Many of our best success stories come from fixing failed campaigns."
    }
  ];

  const benefits = [
    "Free strategy session with actionable insights",
    "No long-term contracts required",
    "Transparent reporting and communication",
    "Proven track record across industries",
    "Focus on ROI and business growth"
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-white">
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
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            Get answers to the most common questions about our marketing services
            and how we can help grow your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* FAQ List */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card border border-neutral-200"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                  >
                    <h3 className="heading-5 pr-4">{faq.question}</h3>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <Minus size={20} className="text-primary-500" />
                      ) : (
                        <Plus size={20} className="text-neutral-400" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="body text-neutral-600">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8 bg-gradient-to-br from-primary-50 to-accent-blue/10"
            >
              <h3 className="heading-4 mb-6">Why Choose Salespirit?</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-accent-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8 bg-gradient-to-br from-primary-500 to-accent-blue text-white"
            >
              <h3 className="text-xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-primary-100 mb-6">
                Schedule a free consultation to discuss your specific needs and get personalized answers.
              </p>
              <button
                onClick={scrollToContact}
                className="btn bg-white text-primary-500 hover:bg-neutral-100 btn-md group w-full"
              >
                Book Free Consultation
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="heading-4 mb-6">Our Track Record</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500">500+</div>
                  <div className="text-sm text-neutral-600">Successful Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-green">250%</div>
                  <div className="text-sm text-neutral-600">Average ROI Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-blue">98%</div>
                  <div className="text-sm text-neutral-600">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
