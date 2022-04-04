import React from 'react';
import "./Features.css";
import available from "../../Assets/Images/available.png";
import organic from "../../Assets/Images/organic.png";
import natural from "../../Assets/Images/natural.png";
import trust from "../../Assets/Images/trust.svg";

function Features() {
  return (
    <div className="common_flex">
        <div className="feature_cards_con">
            <div className="feature_card">
                <div className="feature_img">
                    <img src={trust} alt="organic" className="feature_img_data"/>
                </div>
                <div className="feature_heading">Availability</div>
                <div className="feature_text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, dolorem cum. Maxime necessitatibus quibusdam eos at eligendi culpa veniam excepturi 
                </div>
            </div>

            <div className="feature_card">
                <div className="feature_img">
                    <img src={organic} alt="organic" className="feature_img_data"/>
                </div>
                <div className="feature_heading">Organic Product</div>
                <div className="feature_text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, dolorem cum. Maxime necessitatibus quibusdam eos at eligendi culpa veniam excepturi 
                </div>
            </div>

            <div className="feature_card">
                <div className="feature_img">
                    <img src={natural} alt="natural" className="feature_img_data"/>
                </div>
                <div className="feature_heading">Natural Process</div>
                <div className="feature_text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, dolorem cum. Maxime necessitatibus quibusdam eos at eligendi culpa veniam excepturi 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features