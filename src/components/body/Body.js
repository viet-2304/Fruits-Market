import React from "react"
import "./Body.scss"
import Countdown from "./countdown/Countdown"
import 'antd/dist/antd.css'
import image1 from "../../asset/Xoai.jpg"
import image2 from "../../asset/hanhtay.jpg"
import banner1 from "../../asset/banner1.jpg"
import banner2 from "../../asset/banner2.jpg"
import product1 from "../../asset/product1.jpg"
import product2 from "../../asset/product2.jpg"
import product3 from "../../asset/product3.jpg"
import product4 from "../../asset/product4.jpg"
import product5 from "../../asset/guava.jpg"
import product6 from "../../asset/banana.jpg"
import product7 from "../../asset/mango.jpg"
import product8 from "../../asset/apple.jpg"
import category1 from "../../asset/vegetable.jpg"
import category2 from "../../asset/fruits.jpg"
import category4 from "../../asset/meat.jpg"
import timer_background from "../../asset/timer-picture.jpg"
import contact_picture from  "../../asset/contact-picture.png"
import email from "../../asset/email.png"
import { Button, Image, Input } from 'antd'
import { StarFilled, StarOutlined } from '@ant-design/icons'    

function Body() {
    return(
        
        <div className="body-content" >
            <div className="body-top">
                <div className="body-top-left">
                    <div id="title">
                        Welcome to fruits page
                    </div>

                    <div id="subtitle">
                        THE GOOD PAGE FOR YOUR HEATH
                    </div>

                    <div className="button-group">
                        <Button id="btn-enter">Shop Now</Button>
                        <Button id="">Category</Button>
                    </div>
                </div>
                
                <div className="body-top-right">                
                    <Image id="img-top" src={image1} preview={false} ></Image>             
                    <Image id="img-bottom" src={image2} preview={false}></Image>
                </div>
            </div>    

            <div className="body-banner">     
                <div className="body-banner-item">
                    <Image src={banner1} preview={false}></Image>
                </div>         

                <div className="body-banner-item">
                    <Image src={banner2} preview={false}></Image> 
                </div>        
            </div>

            <div className="category-contains">
                <div className="category-text">
                    Shop By Category
                </div>

                <div className="category-subitem">
                    <div className="category-item">
                        <div className="category-image"> 
                            <Image src={category1} preview={false}/>
                        </div>
                        <div className="category-name">
                            Vegetable
                        </div>
                    </div>

                    <div className="category-item">
                        <div className="category-image"> 
                            <Image src={category2} preview={false}/>
                        </div>

                        <div className="category-name">
                            Fruits
                        </div>
                    </div>

                    <div className="category-item">
                        <div className="category-image"> 
                            <Image src={category4} preview={false}/>
                        </div>

                        <div className="category-name">
                            Seafood
                        </div>
                    </div>

                    <div className="category-item">
                        <div className="category-image"> 
                            <Image src={category4} preview={false}/>
                        </div>

                        <div className="category-name">
                            Meat
                        </div>
                    </div>

                    <div className="category-item">
                        <div className="category-image"> 
                            <Image src={category1} preview={false}/>
                        </div>

                        <div className="category-name">
                            Healthy Product
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-contains">
                <div className="product-contains-text">
                    Vegetables
                </div>

                <div className="product-subitem">
                    <div className="product-item">
                        <div className="product-image"> 
                            <Image src={product1} preview={false}/>
                        </div>

                        <div className="product-infor">
                            <div className="ratting"> 
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                            </div>

                            <div className="product-name">
                                Raddish Vegetable
                            </div>

                            <div className="product-price">
                                200.000 
                                <del>250.000</del>   
                            </div>
                        </div>
                    </div>

                    <div className="product-item">
                        <div className="product-image"> 
                            <Image src={product2} preview={false}/>
                        </div>

                        <div className="product-infor">
                            <div className="ratting"> 
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                                <StarOutlined />
                                <StarOutlined />
                            </div>

                            <div className="product-name">
                                Cucumber
                            </div>

                            <div className="product-price">
                                50.000
                                <del>75.000</del>   
                            </div>
                        </div>
                    </div>

                    <div className="product-item">
                        <div className="product-image"> 
                            <Image src={product3} preview={false}/>
                        </div>

                        <div className="product-infor">
                            <div className="ratting"> 
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                                <StarOutlined />
                            </div>

                            <div className="product-name">
                                Sapoche
                            </div>

                            <div className="product-price">
                                150.000
                            </div>
                        </div>
                    </div>

                    <div className="product-item">
                        <div className="product-image"> 
                            <Image src={product4} preview={false}/>
                        </div>

                        <div className="product-infor">
                            <div className="ratting"> 
                            <StarFilled />
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                                <StarOutlined />
                            </div>

                            <div className="product-name">
                                Tomato
                            </div>

                            <div className="product-price">
                                100.000
                                <del>150.000</del>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-contains">
                <div className="product-contains-text">
                    Fruits
                </div>

                <div className="product-subitem">
                    <div className="product-item">
                        <div className="product-image"> 
                            <Image src={product5} preview={false}/>
                        </div>

                        <div className="product-infor">
                            <div className="ratting"> 
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                            </div>

                            <div className="product-name">
                                Guava
                            </div>

                            <div className="product-price">
                                80.000
                                <del>150.000</del>   
                            </div>
                        </div>
                    </div>

                    <div className="product-item">
                        <div className="product-image"> 
                            <Image src={product6} preview={false}/>
                        </div>

                        <div className="product-infor">
                            <div className="ratting"> 
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                                <StarOutlined />
                            </div>

                            <div className="product-name">
                                Banana
                            </div>
                            
                            <div className="product-price">
                                30.000
                            </div>
                        </div>
                    </div>
                    
                    <div className="product-item">
                        <div className="product-image"> 
                            <Image src={product7} preview={false}/>
                        </div>

                        <div className="product-infor">
                            <div className="ratting"> 
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                            </div>

                            <div className="product-name">
                                Mango
                            </div>

                            <div className="product-price">
                                80.000
                            </div>
                        </div>
                    </div>

                    <div className="product-item">
                        <div className="product-image"> 
                            <Image src={product8} preview={false}/>
                        </div>

                        <div className="product-infor">
                            <div className="ratting"> 
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                                <StarOutlined />
                            </div>

                            <div className="product-name">
                                Apple
                            </div>

                            <div className="product-price">
                                120.000
                                <del>150.000</del>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="timer-contains">
                <div className="timer-picture">
                    <Image src={timer_background} preview={false}/>
                </div>

                <div className="timer-description">
                    <div className="timer-title">
                        TODAYS HOT DEALS
                    </div>

                    <div className="timer-subtitle">
                        All product sale off 50%
                    </div>

                    <div className="timer-countdown">
                        <Countdown/>
                    </div>

                    <div className="timer-button">
                        <Button>Shop now</Button>
                    </div>
                    
                </div>
                
            </div>

            <div className="list-product-contains">
                <div className="list-product-subitem">
                    <div className="title">
                            Best Selling
                    </div>
                    
                    <div className="list-product-item"> 
                        <div className="product-item">
                            <div className="product-image">
                                <Image src={product1} preview={false}/>
                            </div>
                            
                            <div className="product-description">
                                <div className="product-name">
                                    product name
                                </div> 
                                
                                <div className="product-ratting">
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarOutlined />
                                </div>
                                    
                                <div className="product-price">
                                    200.000
                                    <del>300.000</del>
                                </div>
                            </div>
                        </div>

                            <div className="product-item">
                            <div className="product-image">
                                <Image src={product1} preview={false}/>
                            </div>
                            
                            <div className="product-description">
                                <div className="product-name">
                                    product name
                                </div> 
                                <div className="product-ratting">
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarOutlined />
                                </div>
                                
                                <div className="product-price">
                                    200.000
                                    <del>300.000</del>
                                </div>
                            </div>
                        </div>

                        <div className="product-item">
                            <div className="product-image">
                                <Image src={product1} preview={false}/>
                            </div>
                            
                            <div className="product-description">
                                <div className="product-name">
                                    product name
                                </div> 
                                <div className="product-ratting">
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarOutlined />
                                </div>
                                
                                <div className="product-price">
                                    200.000
                                    <del>300.000</del>
                                </div>
                            </div>
                        </div>

                        <div className="product-item">
                            <div className="product-image">
                                <Image src={product1} preview={false}/>
                            </div>
                            
                            <div className="product-description">
                                <div className="product-name">
                                    product name
                                </div> 
                                <div className="product-ratting">
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarOutlined />
                                </div>
                                
                                <div className="product-price">
                                    200.000
                                    <del>300.000</del>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="list-product-subitem">
                    <div className="title">
                            Best Selling
                    </div>
                    <div className="list-product-item"> 
                        <div className="product-item">
                            <div className="product-image">
                                <Image src={product1} preview={false}/>
                            </div>
                            
                            <div className="product-description">
                                <div className="product-name">
                                    product name
                                </div> 
                                
                                <div className="product-ratting">
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarOutlined />
                                </div>
                                    
                                <div className="product-price">
                                    200.000
                                    <del>300.000</del>
                                </div>
                            </div>
                        </div>

                            <div className="product-item">
                            <div className="product-image">
                                <Image src={product1} preview={false}/>
                            </div>
                            
                            <div className="product-description">
                                <div className="product-name">
                                    product name
                                </div> 
                                <div className="product-ratting">
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarOutlined />
                                </div>
                                
                                <div className="product-price">
                                    200.000
                                    <del>300.000</del>
                                </div>
                            </div>
                        </div>

                        <div className="product-item">
                            <div className="product-image">
                                <Image src={product1} preview={false}/>
                            </div>
                            
                            <div className="product-description">
                                <div className="product-name">
                                    product name
                                </div> 
                                <div className="product-ratting">
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarOutlined />
                                </div>
                                
                                <div className="product-price">
                                    200.000
                                    <del>300.000</del>
                                </div>
                            </div>
                        </div>

                        <div className="product-item">
                            <div className="product-image">
                                <Image src={product1} preview={false}/>
                            </div>
                            
                            <div className="product-description">
                                <div className="product-name">
                                    product name
                                </div> 
                                <div className="product-ratting">
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarOutlined />
                                </div>
                                
                                <div className="product-price">
                                    200.000
                                    <del>300.000</del>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="list-product-subitem">
                    <div className="title">
                            Best Selling
                    </div>
                    <div className="list-product-item"> 
                        <div className="product-item">
                            <div className="product-image">
                                <Image src={product1} preview={false}/>
                            </div>
                            
                            <div className="product-description">
                                <div className="product-name">
                                    product name
                                </div> 
                                
                                <div className="product-ratting">
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarOutlined />
                                </div>
                                    
                                <div className="product-price">
                                    200.000
                                    <del>300.000</del>
                                </div>
                            </div>
                        </div>

                            <div className="product-item">
                            <div className="product-image">
                                <Image src={product1} preview={false}/>
                            </div>
                            
                            <div className="product-description">
                                <div className="product-name">
                                    product name
                                </div> 
                                <div className="product-ratting">
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarOutlined />
                                </div>
                                
                                <div className="product-price">
                                    200.000
                                    <del>300.000</del>
                                </div>
                            </div>
                        </div>

                        <div className="product-item">
                            <div className="product-image">
                                <Image src={product1} preview={false}/>
                            </div>
                            
                            <div className="product-description">
                                <div className="product-name">
                                    product name
                                </div> 
                                <div className="product-ratting">
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarOutlined />
                                </div>
                                
                                <div className="product-price">
                                    200.000
                                    <del>300.000</del>
                                </div>
                            </div>
                        </div>

                        <div className="product-item">
                            <div className="product-image">
                                <Image src={product1} preview={false}/>
                            </div>
                            
                            <div className="product-description">
                                <div className="product-name">
                                    product name
                                </div> 
                                <div className="product-ratting">
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarOutlined />
                                </div>
                                
                                <div className="product-price">
                                    200.000
                                    <del>300.000</del>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="list-product-subitem">
                    <div className="title">
                        Best Selling
                    </div>

                    <div className="list-product-banners">
                        <div id="product-banner-text">
                            Get A Discount For Weekly Offer!
                        </div>

                        <div className="banner-button">
                            <Button> Shop Now</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact">   
                <div className="contact-description">
                    <h3>CONTACT WITH US NOW</h3>
                    <h1>039 713 2163</h1>
                    <div className="contact-button">
                        <Button>MAKE A CALL</Button>
                        <Button>CONTACT US</Button>
                    </div>
                </div>

                <div className="contact-picture">
                    <Image src={contact_picture} preview={false}/>
                </div>   
            </div>

            <div className="email-banner">
                <div className="email-description">
                    <div className="email-icon">
                        <Image src={email} preview={false}/>
                    </div>
                    <div className="email-text">
                            <h1>Newsletter</h1>
                            <p>Subsribe here for get every single updates</p>
                    </div>
                </div>
                <div className="submit-email">
                    <div className="input-email">
                        <Input placeholder="ENTER YOUR EMAIL ADDRESS"></Input>
                    </div>

                    <div className="button-submit">
                        <Button>SUBSCRIBE NOW</Button>
                    </div>          
                </div>
            </div>
        </div>       
    ) 
}

export default Body;