
import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  phone: string;
  address: string;
  pincode: string;
}

export const EmailContactForm = ({ onSubmitSuccess }: { onSubmitSuccess?: () => void }) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
      'service_lh46qc5', // Replace with your EmailJS service ID
      'template_l181phr', // Replace with your EmailJS template ID
      form.current,
      '3ewQRIokNpJA-NPa9' // Replace with your EmailJS public key
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        if (onSubmitSuccess) onSubmitSuccess();
        form.current?.reset();
      }, (error) => {
        console.log('Failed to send email:', error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="bg-gradient-to-b from-red-500 to-yellow-400 p-4 rounded-lg">
      <div className="mb-3">
        <label className="block text-left mb-1 font-medium">Full Name</label>
        <input 
          type="text" 
          name="name"
          className="w-full p-3 rounded border-0" 
          placeholder="अपना पूरा नाम भरिये" 
          required 
        />
      </div>
      
      <div className="mb-3">
        <label className="block text-left mb-1 font-medium">Active Phone number</label>
        <input 
          type="tel" 
          name="phone"
          pattern="[0-9]{10}"
          className="w-full p-3 rounded border-0" 
          placeholder="अपना 10 अंकों का सही मोबाइल नंबर डाले" 
          required 
        />
      </div>
      
      <div className="mb-3">
        <label className="block text-left mb-1 font-medium">Address</label>
        <textarea 
          name="address"
          className="w-full p-3 rounded border-0 min-h-[80px]" 
          placeholder="कृपया अपना पूरा पता दर्ज करें अन्यथा आपका ऑर्डर डिलीवर नहीं किया जाएगा!" 
          required 
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-left mb-1 font-medium">Pincode</label>
        <input 
          type="text" 
          name="pincode"
          pattern="[0-9]{6}"
          className="w-full p-3 rounded border-0" 
          placeholder="सही पिनकोड भरिए" 
          required 
        />
      </div>
      
      <button 
        type="submit" 
        className="w-full bg-green-600 text-white p-3 rounded-lg text-lg font-bold hover:bg-green-700"
      >
        अभी ऑर्डर करें
      </button>
    </form>
  );
};
