import React from "react";
import "./Footer.scss"
import logo from "../../asset/logo.png"
import apple from "../../asset/apple.png"
import google from "../../asset/google.png"
import { Image } from 'antd'
import { InstagramOutlined, TwitterOutlined, FacebookOutlined, SkypeOutlined } from '@ant-design/icons'
function Footer() {

    return (
        <div className="footer-contains">
            <div className="footer-top">
                <div className="footer-top-subitem">
                    <Image src={logo} preview={false}/>
                    <div className="description">
                        Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod teincididunt ut labore et
                    </div>

                    <div className="icon">
                        <InstagramOutlined />
                        <TwitterOutlined />
                        <FacebookOutlined />
                        <SkypeOutlined />
                    </div>
                </div>

                <div className="footer-top-subitem">
                    <div className="title">
                        Product Catalog
                    </div>
                    <ul>
                        <li>Vegetable</li>
                        <li>Fruits</li>
                        <li>Fish & Seafood</li>
                        <li>Health Product</li>
                        <li>Fresh Meat</li>
                    </ul>
                </div>

                <div className="footer-top-subitem">
                    <div className="title">
                        Useful links
                    </div>
                    <ul>
                        <li>About Us</li>
                        <li>Featured Product</li>
                        <li>Term & Conditions</li>
                        <li>Contact Us</li>
                        <li>Promotional Offers</li>
                    </ul>
                </div>

                <div className="footer-top-subitem">
                    <div className="title">
                        Download Apps
                    </div>
                    <div className="description-download">
                       <p> Lorem ipsum dolor sit amet, consectetur adipisicing.. </p>
                       <a href="#"> <Image src={apple} preview={false}></Image> </a>
                       <a href="#"> <Image src={google} preview={false}></Image> </a>
                    </div>
                </div>
                
            </div>

            <div className="footer-buttom">
                Copyright © 2021 Fruits Theme by <a href="https://fruits-market.vercel.app/"> <b> CodexUnicTheme </b> </a>
            </div>
        </div>
    )
}

export default Footer;