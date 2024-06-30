import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!name || !email || !message) {
      setResponse('Please fill in all fields.');
      setShowPopup(true);
      // Hide popup after 1 second
      setTimeout(() => {
        setShowPopup(false);
        setResponse('');
      }, 1000);
      return;
    }

    try {
      const res = await axios.post('http://plantify.runasp.net/api/Website/contactus', {
        name,
        email,
        message,
      });

      // Customize the message to display
      setResponse('Your message has been sent successfully!');
      setShowPopup(true);

      // Clear the form fields
      setName('');
      setEmail('');
      setMessage('');

      // Hide popup after 1 second
      setTimeout(() => {
        setShowPopup(false);
        setResponse('');
      }, 1000);
    } catch (error) {
      setResponse('There was an error sending your message.');
      setShowPopup(true);

      // Hide popup after 1 second
      setTimeout(() => {
        setShowPopup(false);
        setResponse('');
      }, 1000);
    }
  };

  return (
    <div className="contactUsPage">
      <div className="containerCont">
        <div className="contentCont">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one">Cairo, Egypt</div>
              <div className="text-two">123 Street, Alex</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one">+20 1065307167</div>
              <div className="text-two">+20 1094957266</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">asmaa@gmail.com</div>
              <div className="text-two">Asmaa123@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-box">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-box message-box">
                <textarea
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="button">
                <input type="submit" className="btnbutton" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
            <p>{response}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
