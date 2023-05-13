import React, { useState, useEffect, useRef } from 'react';
import { db } from '../firebase';
import { ref, push, child, update } from 'firebase/database';
import '../styles//Contact.css';

const Contact = () => {
  // States
  const [name, setName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);

  // Refs
  const formRef1 = useRef(null);
  const formRef2 = useRef(null);
  const formRef3 = useRef(null);
  const formRef4 = useRef(null);
  const formRef5 = useRef(null);
  const formRef6 = useRef(null);

  // Fade in elements one by one
  useEffect(() => {
    const refs = [
      formRef1.current,
      formRef2.current,
      formRef3.current,
      formRef4.current,
      formRef5.current,
      formRef6.current,
    ];
    let delay = 0;
    refs.forEach((ref) => {
      ref.style.opacity = 0;
      ref.style.transform = 'translateY(20px)';
      ref.style.transition = 'opacity 1s ease, transform 1s ease';
      ref.style.transitionDelay = `${delay}s`;
      delay += 0.1;
    });
    const timeoutId = setTimeout(() => {
      refs.forEach((ref) => {
        ref.style.opacity = 1;
        ref.style.transform = 'translateY(0)';
      });
    });
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'name') {
      setName(value);
    }
    if (id === 'phoneNumber') {
      setPhoneNumber(value);
    }
    if (id === 'email') {
      setEmail(value);
    }
    if (id === 'message') {
      setMessage(value);
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phoneNumber || !email || !message) {
      console.log('Please enter all the fields');
    } else {
      document.querySelector('.success').style.display = 'block';
      document.querySelector('.form-container').style.display = 'none';
      let obj = {
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        message: message,
      };
      const newPostKey = push(child(ref(db), 'posts')).key;
      const updates = {};
      updates['/' + newPostKey] = obj;
      return update(ref(db), updates);
    }
  };

  return (
    <section id='contact'>
      <h2>Contact</h2>
      <div className='success'>Your message has been received.</div>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <h4 ref={formRef1}>
            Please fill out the <span>form</span> below.
          </h4>
          <div ref={formRef2}>
            <input
              id='name'
              type='text'
              placeholder='Full Name'
              onChange={(e) => handleInputChange(e)}
              value={name}
              required
            />
          </div>
          <div ref={formRef3}>
            <input
              id='phoneNumber'
              type='text'
              placeholder='Phone Number'
              onChange={(e) => handleInputChange(e)}
              value={phoneNumber}
              required
            />
          </div>
          <div ref={formRef4}>
            <input
              id='email'
              type='email'
              placeholder='Email Address'
              onChange={(e) => handleInputChange(e)}
              value={email}
              required
            />
          </div>
          <div ref={formRef5}>
            <textarea
              id='message'
              rows='5'
              placeholder='Message'
              onChange={(e) => handleInputChange(e)}
              value={message}
              required
            ></textarea>
          </div>
          <div ref={formRef6}>
            <button>
              <p>
                <span>Submit</span>
              </p>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
