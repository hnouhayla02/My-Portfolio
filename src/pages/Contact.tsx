import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-[#16404D] to-[#A6CDC6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-4xl font-bold mb-8 text-[#DDA853]">Get in Touch</h2>
            <p className="text-[#FBF5DD] mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="text-[#A6CDC6] mr-4" size={24} />
                <div>
                  <h3 className="font-semibold text-[#FBF5DD]">Location</h3>
                  <p className="text-[#FBF5DD]/80">Casablanca, MA</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="text-[#A6CDC6] mr-4" size={24} />
                <div>
                  <h3 className="font-semibold text-[#FBF5DD]">Email</h3>
                  <p className="text-[#FBF5DD]/80">hc.nouhayla@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="text-[#A6CDC6] mr-4" size={24} />
                <div>
                  <h3 className="font-semibold text-[#FBF5DD]">Phone</h3>
                  <p className="text-[#FBF5DD]/80">+212 7 77 93 96 82</p>
                </div>
              </div>
            </div>
          </div>
          

          <div className="bg-[#FBF5DD]/10 p-8 rounded-xl backdrop-blur-sm shadow-xl 
            border border-[#DDA853]/20 hover:border-[#DDA853]/40 transition-colors">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#FBF5DD]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#FBF5DD]/10 border border-[#DDA853]/30 rounded-lg 
                    focus:outline-none focus:border-[#DDA853]/60 text-[#16404D] placeholder-[#16404D]/50
                    transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#FBF5DD]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#FBF5DD]/10 border border-[#DDA853]/30 rounded-lg 
                    focus:outline-none focus:border-[#DDA853]/60 text-[#16404D] placeholder-[#16404D]/50
                    transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#FBF5DD]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-[#FBF5DD]/10 border border-[#DDA853]/30 rounded-lg 
                    focus:outline-none focus:border-[#DDA853]/60 text-[#16404D] placeholder-[#16404D]/50
                    transition-colors"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r 
                  from-[#DDA853] to-[#A6CDC6] hover:from-[#A6CDC6] hover:to-[#DDA853] rounded-lg 
                  transition-all duration-300 shadow-lg hover:shadow-[#DDA853]/25 text-[#16404D] font-semibold"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}