import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import "./SearchBox.css";

function SearchBox() {
    return (
        <div className="menu_search common_flex">
            <input type="search" placeholder="Search Products" className="primary_menu_search_box" />
            <SearchOutlined style={{ fontSize: "1.7rem", color: "#fff" }} className="primary_menu_search_icon common_flex" />
        </div>
    )
}

export default SearchBox