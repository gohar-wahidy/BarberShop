import React, { useState, useEffect } from 'react';
import { checkStoreStatus } from '../utils/Time';

function Contact() {
  const [storeStatus, setStoreStatus] = useState({ statusMessage: '', storeStatus: '' });

  useEffect(() => {
    const status = checkStoreStatus();
    setStoreStatus(status);
  }, []);

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center flex-grow p-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-outline-black">Contact Me</h2>
          <p>Give me a call to see if it's full, or come and see me:</p>
          <p>Phone: <a className="redHover" href='tel:+13192902150'>(319) 290-2150</a></p>
          <h1 className="text-2xl font-bold text-white mt-4 text-outline-black">Hours</h1>
          <p>Sunday - Thursday: 12PM - 9PM</p>
          <p>Friday: 12PM - 10PM</p>
          <p>Saturday: 12PM - 8PM</p>
          <p className={`text-lg mb-4 mt-4 ${storeStatus.storeStatus === 'open' ? 'openStyle' : 'closeStyle'}`}>
            {storeStatus.statusMessage}
          </p>
          <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d681.8749088390991!2d-92.3440876848578!3d42.49108325468903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e55301da943911%3A0x39b1fd98e8ebabdf!2s702%20South%20St%2C%20Waterloo%2C%20IA%2050701!5e1!3m2!1sen!2sus!4v1747603269147!5m2!1sen!2sus"
              className="absolute top-0 left-0 w-full h-full rounded-lg" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
    </section>
  );
}

export default Contact;