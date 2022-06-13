import { Button } from 'antd';
import React from 'react';
import empty from '../../Assets/Images/empty.svg';
import "./EmptyCart.css";

function EmptyCart() {
  return (
    <div className="emptycart_con common_flex">
        <img src={empty} alt="Empty" className="emptycart_img"/>
        <Button className="empty_cart_btn linear_back">Shop Now</Button>
    </div>
  )
}

export default EmptyCart