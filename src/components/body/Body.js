import React from "react"
import "./Body.scss"
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
import { Button, Image } from 'antd'
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

            <div className="body-contains">
                <div className="body-contains-text">
                    Vegetables
                </div>

                <div className="body-product-contains">
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

            <div className="body-contains">
                <div className="body-contains-text">
                    Fruits
                </div>

                <div className="body-product-contains">
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
        </div>       
    ) 
}

export default Body;