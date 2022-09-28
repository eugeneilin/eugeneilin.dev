import React, { useState } from 'react';
import { db } from '../../firebase';
import { ref, push, child, update } from 'firebase/database';
import '../../styles/homepage/Contact.css';

const Contact = () => {
  const [name, setName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);

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
          <h4>
            Please fill out the <span>form</span> below.
          </h4>
          <input
            id='name'
            type='text'
            placeholder='Full Name'
            onChange={(e) => handleInputChange(e)}
            value={name}
            required
          />
          <input
            id='phoneNumber'
            type='text'
            placeholder='Phone Number'
            onChange={(e) => handleInputChange(e)}
            value={phoneNumber}
            required
          />
          <input
            id='email'
            type='email'
            placeholder='Email Address'
            onChange={(e) => handleInputChange(e)}
            value={email}
            required
          />
          <textarea
            id='message'
            rows='5'
            placeholder='Message'
            onChange={(e) => handleInputChange(e)}
            value={message}
            required
          ></textarea>
          <button>
            <p>
              <span>Submit</span>
            </p>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
