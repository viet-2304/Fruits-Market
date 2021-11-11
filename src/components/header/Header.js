import React, { useState } from "react"
import logo from "../../asset/logo.png"
import "./Header.scss"
import 'antd/dist/antd.css'
import { Input, Menu, Image, Select, Dropdown, Button, Affix } from 'antd'
import { PhoneOutlined, QuestionOutlined, UserOutlined, HeartOutlined, DownOutlined, ShoppingOutlined } from '@ant-design/icons'
const { Search } = Input
const { Option } = Select

const home =( <Menu>
   <Menu.Item>Home Style 01</Menu.Item>
   <Menu.Item>Home Style 02</Menu.Item>
   <Menu.Item>Home Style 03</Menu.Item>
</Menu>)

const page= (<Menu>
    <Menu.Item>Team</Menu.Item>
    <Menu.Item>Cart</Menu.Item>
    <Menu.Item>Checkout</Menu.Item>
    <Menu.Item>My Acount</Menu.Item>
    <Menu.Item>Login Account</Menu.Item>
    <Menu.Item>Register Account</Menu.Item>
    <Menu.Item>Faq</Menu.Item>
    <Menu.Item>404 eror</Menu.Item>
</Menu>)

const shop=(<Menu>
    <Menu.Item>Shop</Menu.Item>
    <Menu.Item>Shop Grid</Menu.Item>
    <Menu.Item>Shop 2 Columns</Menu.Item>
    <Menu.Item>Shop Left Slidebar</Menu.Item>
    <Menu.Item>Shop Rigth Slidebar</Menu.Item>
    <Menu.Item>Single Product</Menu.Item>
</Menu>)

const blog=(<Menu>
    <Menu.Item>Blog</Menu.Item>
    <Menu.Item>Blog Grid</Menu.Item>
    <Menu.Item>Blog Left Slidebar</Menu.Item>
    <Menu.Item>Blog Rigth Slidebar</Menu.Item>
    <Menu.Item>Blog Detail</Menu.Item>
</Menu>)

function Header() {
    const [top] = useState()
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
            <Affix offsetTop={top}>   
                <nav>
                    <div className="menu-navigation">
                        <Dropdown overlay={home} placement="bottomCenter">
                            <Button>Home {<DownOutlined />}</Button>
                        </Dropdown>
                        
                        <Button>About Us </Button>

                        <Dropdown overlay={page} placement="bottomCenter">
                            <Button>Page {<DownOutlined />}</Button>
                        </Dropdown>

                        <Dropdown overlay={shop} placement="bottomCenter">
                            <Button>Shop{<DownOutlined />}</Button>
                        </Dropdown>

                        <Dropdown overlay={blog} placement="bottomCenter">
                            <Button>Blog {<DownOutlined />}</Button>
                        </Dropdown>

                        <Button>Contact Us</Button>
                    </div>
                    <div className="icon-shopping">
                        <ShoppingOutlined />
                    </div>
                </nav>  
            </Affix>
       </div>
    )  
}

export default Header;