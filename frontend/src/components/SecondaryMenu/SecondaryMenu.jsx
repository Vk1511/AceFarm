import React, {useState} from 'react'
import SearchBox from "../SearchBox/SearchBox";
import "./SecondaryMenu.css";
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';

function SecondaryMenu() {

    const [show,setShow] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 55) {
          setShow(true);
        } else {
          setShow(false);
        }
      };
    window.addEventListener("scroll", changeBackground);

  return (
    <div className={show ? "secondarymenufixed secondarymenu" : "secondarymenu"}>
        <div className="secondarymenu_items">
            <ul>
                <li>Why Us?</li>
                <li>Contact Us</li>
                <li>My Orders</li>
            </ul>
        </div>
        <div className="secondarymenu_search common_flex">
            <div className={show ? "secondary_search_box" : "secondary_search_box_hidden"}> <SearchBox /> </div>
            <div className={show ? "secondary_menu_icons" : "secondary_search_box_hidden"}>
                <span className="primary_menu_icon"><UserOutlined style={{fontSize:"1.7rem", paddingRight:".3rem"}}/> Login</span>
                <span className="primary_menu_icon"><ShoppingCartOutlined style={{fontSize:"1.7rem", paddingRight:".3rem"}}/> My Cart</span>
            </div>
        </div>
        <div className="secondarymenu_category common_flex linear_back">
            Products
        </div>
    </div>
  )
}

export default SecondaryMenu