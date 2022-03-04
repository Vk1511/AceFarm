import React from 'react';
import { Button } from 'antd';
import ghee from "../../Assets/Images/ghee.png"
import "./Crousel.css";

function Crousel() {
    return (
        <div className="crousel_class">
            <div className="crousel_content ">
                <div className="crousel_heading">
                    <div className="crousel_tagline">Our Latest Healthy Products</div>
                    <div className="crousel_head">HEALTHY PRODUCTS</div>
                </div>
                <div className="crousel_text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quae sint voluptates, aut animi repellendus magni, neque ea non est dicta sapiente quaerat nam quibusdam necessitatibus? Iste ad cum eos!
                </div>
                <div className="crousel_btn_div">
                    <Button type="primary" className="crousel_btn linear_back">SHOP NOW</Button>
                </div>
            </div>
            <div className="crousel_img">
                <img src={ghee} alt="ghee" />
            </div>
        </div>
    )
}

export default Crousel