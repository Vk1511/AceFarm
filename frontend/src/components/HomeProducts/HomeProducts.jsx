import { StarFilled } from '@ant-design/icons';
import React from 'react';
import product from "../../Assets/Images/product.png";
import { Button } from 'antd';
import "./HomeProducts.css";

function HomeProducts() {
  return (
    <div className="home_products common_flex">
        <div className="home_products_contaimer">
            <div className="homeproducts_head">
                <div className="homeproducts_title">Our Products</div>
                <div className="homeproduct_title_lin" style={{marginBottom: "2rem"}}/>
            </div>
            <div className="homeproducts_card_con">
                <div className="homeproduct_card">
                    <div className="homeproduct_left">
                        <div className="homeproduct_sale_info">
                            <div className="sale_label">Sale</div> <br />
                            <div className="sale_label">50% off</div>                  
                        </div>
                        <div className="homeproduct_img common_flex">
                            <img src={product} alt="ghee" className="homeproduct_img_src"/>
                        </div>
                    </div>
                    <div className="homeproduct_right">
                        <div className="homeproduct_name">Ghee</div>
                        <div className="homeproduct_qty homeproduct_common_font">Quntity: 1Kg</div>
                        <div className="homeproduct_rating">
                            <StarFilled style={{color:"#FFCA03"}}/>
                            <StarFilled style={{color:"#FFCA03"}}/>
                            <StarFilled style={{color:"#FFCA03"}}/>
                            <StarFilled style={{color:"#FFCA03"}}/>
                            <StarFilled style={{color:"#FFCA03"}}/>
                        </div>
                        <div className="homeproduct_review homeproduct_common_font">13 Reviews</div>
                        <div className="homeproduct_price">
                            <del className="homeproduct_old_price homeproduct_common_font">MRP: ₹3500</del>
                            <div className="homeproduct_current_price">Current Price: ₹2000</div>
                        </div>
                        <div className="homeproduct_detail homeproduct_common_font">
                            While some tout ghee as butter's healthier cousin, O'Neill says that ghee's perceived benefits may be overblown. “There is no significant difference between the two.
                        </div>
                        <div className="homeproduct_btn">
                            <Button type="primary" className="homeproduct_card_btn linear_back">BUY NOW</Button>
                            <Button type="primary" className="homeproduct_card_btn homeproduct_card_add_btn yello_linear_back">ADD TO CART</Button>
                        </div>
                        <div className="homeproduct_countdown"></div>
                    </div>
                </div>

                <div className="homeproduct_card">
                    <div className="homeproduct_left">
                        <div className="homeproduct_sale_info">
                            <div className="sale_label">Sale</div> <br />
                            <div className="sale_label">50% off</div>                  
                        </div>
                        <div className="homeproduct_img common_flex">
                            <img src={product} alt="ghee" className="homeproduct_img_src"/>
                        </div>
                    </div>
                    <div className="homeproduct_right">
                        <div className="homeproduct_name">Ghee</div>
                        <div className="homeproduct_qty homeproduct_common_font">Quntity: 1Kg</div>
                        <div className="homeproduct_rating">
                            <StarFilled style={{color:"#FFCA03"}}/>
                            <StarFilled style={{color:"#FFCA03"}}/>
                            <StarFilled style={{color:"#FFCA03"}}/>
                            <StarFilled style={{color:"#FFCA03"}}/>
                            <StarFilled style={{color:"#FFCA03"}}/>
                        </div>
                        <div className="homeproduct_review homeproduct_common_font">13 Reviews</div>
                        <div className="homeproduct_price">
                            <del className="homeproduct_old_price homeproduct_common_font">MRP: ₹3500</del>
                            <div className="homeproduct_current_price">Current Price: ₹2000</div>
                        </div>
                        <div className="homeproduct_detail homeproduct_common_font">
                            While some tout ghee as butter's healthier cousin, O'Neill says that ghee's perceived benefits may be overblown. “There is no significant difference between the two.
                        </div>
                        <div className="homeproduct_btn">
                            <Button type="primary" className="homeproduct_card_btn linear_back">BUY NOW</Button>
                            <Button type="primary" className="homeproduct_card_btn homeproduct_card_add_btn yello_linear_back">ADD TO CART</Button>
                        </div>
                        <div className="homeproduct_countdown"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeProducts