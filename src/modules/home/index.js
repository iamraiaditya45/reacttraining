import React ,{ Component} from "react";
import "./index.css";
import image from './dummy.png';

class Home extends Component{
    render(){
        return(
          <div className={"bodyContainer"}>
              <div className={"mainContainer"}>
               <div className={"childContainer1"}>
                   <h1 className={"heading1"}>{"Save your"} </h1>
                   <h1 className={"heading2"}>{"money now."} </h1>
                   <p className={"heading3"}>{"manage your company bot in few"}<br></br>
                   {" easy steps, join our pro plan to try"}<br></br> 
                   {" a 360 experience of our service. "} </p><br></br>
                   <p className={"heading4"}>{"manage your company bot in few"}<br></br>
                    {"easy steps, join our pro plan to try"}<br></br> 
                  {" a 360 experience of our service."}  </p><br></br>
                <div className="dummy-img">
                <img src={image} class={"header"} />
                </div>
               </div>
               <h1 className={"heading5"}>{"Start now "}</h1>
               <h1 className={"heading6"}>your free plan. </h1>
            <div className={"childcontainer2"}>
              <div className={"containerContent2"}>
                <p className={"contentHeadleft"}>Lite</p>
                <p className={"contentHeadright"}>Free</p>
              </div>
              <div className={"containerContent2"}>
                <hr className={"underline1"} />
                <p className={"contentHead3"}>with restrictions</p>
              </div>
              <p className={"heading"}>
                <b>Plan includes:</b>
              </p>
              <div className={"container-2"}>
                <div className={"paragraph"}>
                  <div className={"parasign"}>
                    <span className={"sign-1"}>&#10003;</span>
                  </div>
                  <div className={"containerPlan"}></div>
                  <p className={"containerPlan-content-1"}>
                    Manage conversations directly from your website.
                  </p>
                </div>
              </div>
              <div className={"containerPlan"}>
                <p className={"containerPlan-content"}>
                  <span className={"sign-1"}>&#10003;</span>Bot without the AI
                  service.
                </p>
              </div>
              <div className={"containerPlan"}>
                <p className={"containerPlan-content"}>
                  <span className={"sign-1"}>&#10003;</span>Achieved chat for 30
                  days.
                </p>
              </div>
              <div className={"containerPlan"}>
                <p className={"containerPlan-content"}>
                  <span className={"sign-1"}>&#10003;</span>Free,for always.
                </p>
              </div>
              <div className={"viewallFeature1"}>
                <p >View all the features</p>
              </div>
              <button className={"button-1"}>
                Start 14 days of free Pro plan
              </button>
            </div>
          </div>
          <div className={"areYoucorporate"}>
            <div className={"areYoucorporate-top"}>
              <p className={"Corporate-contact"}>
                Are you a corporate?<br></br>
                <a href={"#"} className={"contact-us"}>
                  Contact us
                </a>
              </p>
            </div>
            <div className={"childContainer-3"}>
              <div className={"container3ContentHead"}>
                <p className={"containerpro"}>Pro</p>
                <p className={"containerMonthly"}>29$</p>
              </div>
              <div className={"container3ContentHead"}>
                <hr className={"monthly"} />
                <p className={"content3Head3"}>montly</p>
              </div>
              <p className={"content2Topic"}>
                <b>All of Lite plus:</b>
              </p>
              <div className={"content2Points"}>
                <div className={"containerAllof-content-1"}>
                  <div className={"containerAllof"}>
                    <span className={"sign-2"}>&#10003;</span>
                  </div>
                  <div className={"longparacont"}></div>
                  <p className={"facebook"}>
                    Bot with AI that can recognize the user's behaviour and can
                    automatize the sentences.
                  </p>
                </div>
              </div>
              <div className={"pointunlimited"}>
                <p className={"points3"}>
                  <span className={"sign-2"}>&#10003;</span>Unlimited
                  conversational flows.
                </p>
              </div>
              <div className={"content2Points"}>
                <div className={"containerAllof-content-1"}>
                  <div className={"containerAllof"}>
                    <span className={"sign-2"}>&#10003;</span>
                  </div>
                  <div className={"longparacont"}></div>
                  <p className={"facebook"}>
                    Facebook, Twitter, Instagram and Linkedin integration.
                  </p>
                </div>
              </div>
              <div className={"pointunlimited"}>
                <p className={"points3"}>
                  <span className={"sign-2"}>&#10003;</span>Achieved chat without
                  limits.
                </p>
              </div>
              <div className={"viewallFeaturelastblock"}>
                <p href={"#"}>View all the features</p>
              </div>
              <button className={"button-2"}>
                Start 14 days of free Pro plan
              </button>
            </div>
          </div>
              </div>  
              
            
        );
    }
}

export default Home;