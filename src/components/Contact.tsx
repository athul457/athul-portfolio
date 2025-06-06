import React, { useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Thank you for your message! I will get back to you soon.'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-dark-50 dark:bg-dark-800">
      <div className="container">
        <SectionHeading 
          title="Contact Me" 
          subtitle="Let's get in touch" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-dark-800 dark:text-white">
              Get In Touch
            </h3>
            <p className="text-dark-600 dark:text-dark-300 mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel free to contact me using the form or the contact information.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-800 dark:text-white">
                    Email
                  </h4>
                  <a 
                    href="mailto:athulsukumaran457@gmail.com" 
                    className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    athulsukumaran457@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-800 dark:text-white">
                    Phone
                  </h4>
                  <a 
                    href="tel:+916282948616" 
                    className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    +91 6282948616
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-800 dark:text-white">
                    Location
                  </h4>
                  <p className="text-dark-600 dark:text-dark-300">
                    Kerala, India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-lg font-semibold mb-4 text-dark-800 dark:text-white">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/athul457" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-200 dark:bg-dark-700 flex items-center justify-center text-dark-700 dark:text-dark-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-600 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/athul457" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-200 dark:bg-dark-700 flex items-center justify-center text-dark-700 dark:text-dark-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-600 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="card p-8 bg-white dark:bg-dark-900">
            <h3 className="text-2xl font-bold mb-6 text-dark-800 dark:text-white">
              Send a Message
            </h3>
            
            {submitMessage && (
              <div className={`p-4 mb-6 rounded-lg ${
                submitMessage.type === 'success' 
                  ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300' 
                  : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300'
              }`}>
                {submitMessage.text}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1"
                >
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1"
                >
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1"
                >
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1"
                >
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600 resize-none"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;