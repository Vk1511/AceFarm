import React from 'react'
import panchmool from '../../Assets/Images/panchmool.png';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import SearchBox from "../SearchBox/SearchBox";
import "./Menu.css"

function Menu() {
  return (
    <div className="primary_menu">
        <div className="menu_logo">
            <img src={panchmool} alt="panchmool oraganics" className="primary_menu_logo"/>
        </div>
        <SearchBox />
        <div className="menu_icons common_flex">
            <span className="primary_menu_icon"><UserOutlined style={{fontSize:"1.7rem", paddingRight:".3rem"}}/> Login</span>
            <span className="primary_menu_icon"><ShoppingCartOutlined style={{fontSize:"1.7rem", paddingRight:".3rem"}}/> My Cart</span>
        </div>
    </div>
  )
}

export default Menu