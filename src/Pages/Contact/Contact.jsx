import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <div className="contactUsPage">
      <div class="containerCont">
      <div class="contentCont">
        <div class="left-side">
          <div class="address details">
            <i class="fas fa-map-marker-alt"></i>
            <div class="topic">Address</div>
            <div class="text-one">Cairo, Egypt</div>
            <div class="text-two">123 Street, Alex</div>
          </div>
          <div class="phone details">
            <i class="fas fa-phone-alt"></i>
            <div class="topic">Phone</div>
            <div class="text-one">+20 1065307167</div>
            <div class="text-two">+20 1094957266</div>
          </div>
          <div class="email details">
            <i class="fas fa-envelope"></i>
            <div class="topic">Email</div>
            <div class="text-one">asmaa@gmail.com</div>
            <div class="text-two">Asmaa123@gmail.com</div>
          </div>
        </div>
        <div class="right-side">
          <div class="topic-text">Send us a message</div>
          <p>If you have any inquiries, feel free to send a message.</p>
          <form action="#">
            <div class="input-box">
              <input type="text" placeholder="Enter your name" />
            </div>
            <div class="input-box">
              <input type="text" placeholder="Enter your email" />
            </div>
            <div class="input-box message-box">
              <textarea placeholder="Enter your message"></textarea>
            </div>
            <div class="button">
              <input type="button" value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Contact
