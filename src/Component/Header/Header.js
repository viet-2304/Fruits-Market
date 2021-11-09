import React from "react";
import logo from "../../asset/logo.png"
import "./Header.scss";
import { Input} from 'antd';

import {PhoneOutlined,QuestionOutlined,UserOutlined ,HeartOutlined} from '@ant-design/icons';
const {Search}= Input;
function Header(){
    return(
       <div className="header-content">
        
              <div>
                  <img src={logo}/>
              </div>
           
           <div className="select-search">
            <select className="select" >
                <option>Select Catagory</option>
                <option>Vegetable</option>
                <option>fruits</option>
                <option>Salads</option>
            </select>
            <Search placeholder="Search Product...."></Search>
           </div>

           <div className="header-right">
               <ul>
                   <li className="phone">  <PhoneOutlined/> 0397132163</li>
                   <li className="help"> <QuestionOutlined /> Help & More</li>
                   <li className="like"> <HeartOutlined /></li>
                   <li className="user"> <UserOutlined /></li>
                </ul>
              
           </div>
       </div>
    )
    
}
export default Header;