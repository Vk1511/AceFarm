import React from 'react';
import { CarFilled, SmileFilled, CreditCardFilled, CustomerServiceFilled } from '@ant-design/icons';
import "./Bestpoints.css";

function Bestpoints() {
  return (
    <div className="bestpoints_container common_flex linear_back">
        <div className="bestpoint_card_con">
            <div className="bestpoints_card">
                <div className="bestponits_icon">
                    <CreditCardFilled style={{fontSize:"4rem", color:"#fff", paddingRight:".3rem"}}/> 
                    {/* 4FCA5B */}
                </div>
                <div className="bestpoints_content">
                    <div className="bestpoint_head">PAYMENT</div>
                    <div className="bestpoint_text">SECURE SYSTEM</div>
                </div>
            </div>

            <div className="bestpoints_card">
                <div className="bestponits_icon">
                    <CustomerServiceFilled style={{fontSize:"4rem", color:"#fff", paddingRight:".3rem"}}/>
                </div>
                <div className="bestpoints_content">
                    <div className="bestpoint_head">24/7 SUPPORT</div>
                    <div className="bestpoint_text">CUSTOMER SUPPORT</div>
                </div>
            </div>

            <div className="bestpoints_card">
                <div className="bestponits_icon">
                    <CarFilled style={{fontSize:"4rem", color:"#fff", paddingRight:".3rem"}}/>
                </div>
                <div className="bestpoints_content">
                    <div className="bestpoint_head">FREE DELIVERY</div>
                    <div className="bestpoint_text">INDIA</div>
                </div>
            </div>

            <div className="bestpoints_card">
                <div className="bestponits_icon">
                    <SmileFilled style={{fontSize:"4rem", color:"#fff", paddingRight:".3rem"}}/>
                </div>
                <div className="bestpoints_content">
                    <div className="bestpoint_head">TRUSTED</div>
                    <div className="bestpoint_text">ENUINE PRODUTS</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bestpoints