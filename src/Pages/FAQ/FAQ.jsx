import React, { useEffect } from 'react';
import './FAQ.css';

const FAQ = () => {
  useEffect(() => {
    let li = document.querySelectorAll(".faq-text li");
    for (var i = 0; i < li.length; i++) {
      li[i].addEventListener("click", (e)=>{
        let clickedLi;
        if(e.target.classList.contains("question-arrow")){
          clickedLi = e.target.parentElement;
        }else{
          clickedLi = e.target.parentElement.parentElement;
        }
       clickedLi.classList.toggle("showAnswer");
      });
    }
  }, []);
  return (
    <div>
      <div className="faq">
      <div className="accordion">
    <div className="image-box">
      <img src={require("./faq.jpg")} alt=""/>
    </div>
    <div className="accordion-text">
      <div className="title">Frequently Asked Queries</div>
    <ul className="faq-text">
      <li>
        <div className="question-arrow">
          <span className="question">What is the importance of plants in the environment?</span>
          <span class="material-symbols-outlined arrow">expand_more</span>
        </div>
        <p>Plants play a vital role in purifying the air, providing oxygen, and improving the quality of the natural environment..</p>
        <span className="line"></span>
      </li>
      <li>
        <div className="question-arrow">
          <span className="question">How can I take care of plants at home?</span>
          <span class="material-symbols-outlined arrow">expand_more</span>
        </div>
        <p>You can take care of plants at home by providing an adequate amount of water and light, providing necessary fertilization, and protecting them from pests.</p>
        <span className="line"></span>
      </li>
      <li>
        <div className="question-arrow">
          <span className="question">What are the benefits of planting in public gardens?</span>
          <span class="material-symbols-outlined arrow">expand_more</span>
        </div>
        <p>Planting in public gardens contributes to improving the landscape, providing green spaces for relaxation, recreation, and enhancing the community's mental health.</p>
        <span className="line"></span>
      </li>
      <li>
        <div className="question-arrow">
          <span className="question">What types of plants can be grown indoors?</span>
          <span class="material-symbols-outlined arrow">expand_more</span>
        </div>
        <p>A variety of plants can be grown indoors, including herbs, small trees, and houseplants.</p>
        <span className="line"></span>
      </li>
      <li>
        <div className="question-arrow">
          <span className="question">What is the importance of preserving plant diversity?</span>
          <span class="material-symbols-outlined arrow">expand_more</span>
        </div>
        <p>Plant diversity contributes to enhancing the natural environment, providing diverse food resources, and supporting ecosystem balance.</p>
        <span className="line"></span>
      </li>
      <li>
        <div className="question-arrow">
          <span className="question">How can plants contribute to pollution control?</span>
          <span class="material-symbols-outlined arrow">expand_more</span>
        </div>
        <p>Plants contribute to pollution control by absorbing harmful gases and pollutants from the air, purifying it, storing carbon, and reducing heat in urban areas.</p>
        <span className="line"></span>
      </li>
    </ul>
    </div>
  </div>
      </div>
    </div>
  )
}

export default FAQ
