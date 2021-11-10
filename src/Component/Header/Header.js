import React from "react";
import logo from "../../asset/logo.png"
import "./Header.scss";
import 'antd/dist/antd.css';
import { Input, Image, Select} from 'antd';
import {PhoneOutlined,QuestionOutlined,UserOutlined ,HeartOutlined} from '@ant-design/icons';

const {Search}= Input;
const {Option}=Select;

function Header(){
    return(
        <div className="header">
            <div className="header-content">      
                <div className="header-left">
                    <Image preview={false}src={logo}/> 
                </div>

                <div className="header-center">
                    <Select defaultValue="Select Catagory....">
                        <Option value="Vegetable">Vegetable</Option>
                        <Option value="Fruits">Fruits</Option>
                        <Option value="Salads">Salads</Option>
                        <Option value="seaFood">Fish & Seafood</Option>
                        <Option value="meat">Fresh Meat</Option>
                        <Option value="heathProduct">Health Product</Option>
                        <Option value="egss">Butter & Eggs</Option>
                    </Select>
                    <Search placeholder="Search Product...."></Search>
                </div>

                <div className="header-right">
                    <ul>
                        <li className="phone"><PhoneOutlined/> 0397132163</li>
                        <li className="help"><QuestionOutlined/> Help & More</li>
                        <li className="like"><HeartOutlined/></li>
                        <li className="user"><UserOutlined/></li>
                    </ul>
                </div>
            </div>     
       </div>
    )  
}

export default Header;