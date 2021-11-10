import React from "react"
import "./Body.scss"
import 'antd/dist/antd.css'
import image1 from "../../asset/Xoai.jpg"
import image2 from "../../asset/hanhtay.jpg"
import {Button, Image} from 'antd'


function Body(){
    return(
        <div className="body-content" >
            <div className="body-top">
                <div className="body-top-left">
                    <div className="text1">
                        Welcome to fruits page
                    </div>

                    <div className="text2">
                        THE GOOD PAGE FOR YOUR HEATH
                    </div>

                    <div className="button-group">
                        <Button id="btn1">Shop Now</Button>
                        <Button id="btn2">Category</Button>
                    </div>
                </div>
                <div className="body-top-right">                
                            <Image id="img1" src={image1} preview={false} ></Image>             
                            <Image id="img2" src={image2} preview={false}></Image>
                </div>
            </div>       
        </div>       
    ) 
}

export default Body;