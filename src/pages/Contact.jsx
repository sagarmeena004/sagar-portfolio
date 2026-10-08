import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import TiltCard from '../components/TiltCard';
import { personalDetails } from '../data/portfolioData';
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};

    if (!formData.name.trim()) errs.name = 'Full name is required';

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Invalid email address format';
    }

    if (!formData.phone.trim()) errs.phone = 'Contact number is required';

    if (!formData.subject.trim()) errs.subject = 'Subject is required';

    if (!formData.message.trim()) errs.message = 'Message content is required';

    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errs = validate();

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch('https://sagar-portfolio-backend-3vjg.onrender.com/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Message send nahi hua');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      alert('Message send nahi hua. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        badge="GET IN TOUCH"
        title="Contact"
        highlightTitle="Sagar Meena"
        subtitle="Available for Data Analyst roles, Python development projects, digital marketing, and tech collaborations."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white">Direct Communication Channels</h2>
              <p className="text-xs text-gray-400">Feel free to reach out via phone, email, or LinkedIn.</p>
            </div>

            <div className="space-y-4">
              {/* Email Button Card */}
              <TiltCard>
                <a
                  href={`mailto:${personalDetails.email}`}
                  className="glass-panel p-5 rounded-2xl glass-panel-hover flex items-center justify-between block group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#189B3F]/20 border border-[#189B3F]/30 flex items-center justify-center text-[#00ff66]">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-gray-400 uppercase">Primary Email</span>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#00ff66] transition-colors">
                        {personalDetails.email}
                      </h4>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#00ff66]" />
                </a>
              </TiltCard>

              {/* Phone Button Card */}
              <TiltCard>
                <a
                  href={`tel:${personalDetails.phone}`}
                  className="glass-panel p-5 rounded-2xl glass-panel-hover flex items-center justify-between block group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#189B3F]/20 border border-[#189B3F]/30 flex items-center justify-center text-[#00ff66]">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-gray-400 uppercase">Phone & WhatsApp</span>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#00ff66] transition-colors">
                        +91 {personalDetails.phone}
                      </h4>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#00ff66]" />
                </a>
              </TiltCard>

              {/* LinkedIn Button Card */}
              <TiltCard>
                <a
                  href={personalDetails.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel p-5 rounded-2xl glass-panel-hover flex items-center justify-between block group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#189B3F]/20 border border-[#189B3F]/30 flex items-center justify-center text-[#00ff66]">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-gray-400 uppercase">LinkedIn Profile</span>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#00ff66] transition-colors">
                        {personalDetails.linkedin}
                      </h4>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#00ff66]" />
                </a>
              </TiltCard>

              {/* Location Card */}
              <div className="glass-panel p-5 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0d1117] border border-white/10 flex items-center justify-center text-[#00ff66]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase">Location</span>
                  <h4 className="text-sm font-bold text-white">{personalDetails.location}</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#189B3F]/40 space-y-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-white">Send Me a Message</h3>
                <p className="text-xs text-gray-400">Fill out the form below to initiate direct contact.</p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-[#189B3F]/20 border border-[#00ff66] text-center space-y-3"
                >
                  <CheckCircle2 className="w-12 h-12 text-[#00ff66] mx-auto" />
                  <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-gray-300">
                    Thank you for reaching out, Sagar Meena will respond to your email address shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-[#189B3F] text-black font-bold text-xs uppercase tracking-wider shadow-neon mt-2"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-gray-300">Your Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-[#0d1117] border border-white/10 text-white text-xs focus:outline-none focus:border-[#00ff66] transition-colors"
                      />
                      {errors.name && <p className="text-[11px] text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-gray-300">Your Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0d1117] border border-white/10 text-white text-xs focus:outline-none focus:border-[#00ff66] transition-colors"
                      />
                      {errors.email && <p className="text-[11px] text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
                    </div>
                  </div>

                  {/* Contact Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-300">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your contact number"
                      className="w-full px-4 py-3 rounded-xl bg-[#0d1117] border border-white/10 text-white text-xs focus:outline-none focus:border-[#00ff66] transition-colors"
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                    

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-300">Subject / Inquiry Topic *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Data Analytics Role / Python Project Request"
                      className="w-full px-4 py-3 rounded-xl bg-[#0d1117] border border-white/10 text-white text-xs focus:outline-none focus:border-[#00ff66] transition-colors"
                    />
                    {errors.subject && <p className="text-[11px] text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-300">Message Content *</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0d1117] border border-white/10 text-white text-xs focus:outline-none focus:border-[#00ff66] transition-colors resize-none"
                    />
                    {errors.message && <p className="text-[11px] text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#189B3F] to-[#108032] hover:from-[#00ff66] hover:to-[#189B3F] text-black font-extrabold text-xs uppercase tracking-wider shadow-neon transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Transmitting Message..." : "Send Message"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
