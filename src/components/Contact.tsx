import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import { trackConversion } from '../utils/analytics';

const Contact: React.FC = () => {
  const handleBookCall = () => {
    trackConversion('calendar_booking');
    // Open Calendly booking page
    window.open('https://calendly.com/arjan-salespirit/30min', '_blank');
  };

  const handleEmailClick = () => {
    trackConversion('email_click');
    window.location.href = 'mailto:hello@salespirit.com?subject=Marketing Inquiry&body=Hi, I\'m interested in learning more about your marketing services.';
  };

  const handlePhoneClick = () => {
    trackConversion('phone_click');
    window.location.href = 'tel:+15551234567';
  };

  return (
    <section id="contact" className="section bg-neutral-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="heading-2 mb-6">
            Ready to <span className="gradient-text">10x Your Growth?</span>
          </h2>
          <p className="body-large max-w-3xl mx-auto mb-12">
            Join 500+ businesses that have transformed their marketing with our proven strategies.
            Get your free strategy session and custom growth plan today.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Primary CTA - Book a Call */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2 card p-8 bg-gradient-to-br from-primary-50 to-accent-blue/10 border-primary-200"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center">
                  <Calendar className="text-white" size={24} />
                </div>
                <div className="text-left">
                  <h3 className="heading-3">Free Strategy Session</h3>
                  <p className="body">30-minute consultation + custom growth plan</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-accent-green" />
                  <span>Custom growth strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-accent-green" />
                  <span>ROI projections</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-accent-green" />
                  <span>Competitor analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-accent-green" />
                  <span>No obligation</span>
                </div>
              </div>

              <button
                onClick={handleBookCall}
                className="btn btn-primary btn-lg w-full group"
              >
                📞 Book Your Free Session Now
                <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
              </button>

              <p className="text-xs text-neutral-600 mt-3 text-center">
                ⚡ Usually booked within 24 hours • 🎯 Average client sees 250% ROI
              </p>
            </motion.div>

            {/* Secondary Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="card p-6 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <h4 className="heading-5">Email Us</h4>
                </div>
                <p className="body-small mb-4">hello@salespirit.com</p>
                <button
                  onClick={handleEmailClick}
                  className="btn btn-outline btn-sm w-full group"
                >
                  Send Email
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              <div className="card p-6 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent-green rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <h4 className="heading-5">Call Us</h4>
                </div>
                <p className="body-small mb-4">+1 (555) 123-4567</p>
                <button
                  onClick={handlePhoneClick}
                  className="btn btn-outline btn-sm w-full group"
                >
                  Call Now
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="card p-8 bg-gradient-to-br from-neutral-50 to-primary-50">
              <h3 className="heading-4 text-center mb-8">Why 500+ Businesses Choose Salespirit</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-neutral-900">500+</div>
                  <div className="body-small">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neutral-900">250%</div>
                  <div className="body-small">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neutral-900">98%</div>
                  <div className="body-small">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neutral-900">24hr</div>
                  <div className="body-small">Response Time</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
