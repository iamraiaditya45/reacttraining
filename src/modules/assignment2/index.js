import React,{Component} from 'react';
import './index.css';
import image from './header.jpeg';
import image2 from './image2.jpeg';
import image1 from './image1.jpeg';
import image3 from './image3.jpeg';
import image4 from './image4.jpeg';
import image5 from './image5.jpeg';
import image6 from './image6.jpeg';
import image7 from './image7.jpeg';
import image8 from './image8.jpeg';
/*import  ReusableBox from "../../component/reusablebox";*/

class assignment2 extends Component{
  
renderBox(oddImg,oddContentHeading,oddContentBody){
    return(
        <div className={"oddContent"}>
                    <img src={oddImg}></img>
    <h1>{oddContentHeading}</h1>
    <p>{oddContentBody}</p>
    </div>
    );
}
  
renderBox2(evenContentHeading,evenContentBody,evenImg){
    return(
        <div className={"evenContent"}>
    <h1>{evenContentHeading}</h1>
    <p>{evenContentBody}</p>
    <img src={evenImg}></img>
    </div>
    );
}
render(){
    return (
<div className={"mainContainer"}>
<div className={"headerContainer"}>
    <p className={"header-9tools"}>{"9 React Developer Tools"}</p>
    <p className={"header-toCreate"}>{"to Create better Apps Faster"}</p>
</div>

<div className={"bodyContainer"}>
    <div>
    {this.renderBox(
         image1,
    "1) React Developer Tools",
    "Oficial Chrome extension for React from Facebook that lets you examin the list of components and subcomponents of the webpage.",
    
   )}
    </div>
    <div>
    {this.renderBox2(
    "2) Create React App",
    "To used up in a process of setting react IDE",
    image2
    )}
    </div>
    <div>
    {this.renderBox(
         image3,
    "3) Story Book ",
    "Online App that let you create UI components",   
   )}  
    </div>
     <div >
     {this.renderBox2(
    "4) React Styleguidist",
    "It's offer us a interactive way of creating and sharing UI",
    image4
    )}
    </div>
    <div>
    {this.renderBox(
         image5,
    "5) Bit ",
            "CLI tool and online platform that enables you to publish React components."   
   )}  
    </div>
    <div >
     {this.renderBox2(
    "6) React Bootstrap",
    "Powerful toolkit that comprises HTML, CSS and Javascript tools to help you create webpages and applications.",
    image6
    )}
    </div>
    <div>
    {this.renderBox(
         image7,
    "7) React Sight ",
            "Chrome extension for a visual illustration of all components of your app in a live tree structure."   
   )}  
    </div>
    <div >
     {this.renderBox2(
    "8) Why did you render",
    "it alerts you in the console when an avoidable render occurs",
    image8
    )}
    </div>
</div>

<div className={"footContainer"}>
          <div className={"footContent"}>
            <i class="fa fa-skype"></i>
            <p className={"footContent1"}>{"illuminous_bde10"}</p>
            <i class="fa fa-envelope"></i>
            <p classname={"footcontent1"}>{"bde@illuminoustechnologies.com"}</p>
          </div>
        </div>
</div>

    );
}
}
export default assignment2;