import React ,{ Component} from "react";
import "./index.css";
import image from './dummy.png';

class Home extends Component{
    render(){
        return(
          <div className={"bodyContainer"}>
              <div className={"mainContainer"}>
               <div className={"childContainer1"}>
                   <h1 className={"heading1"}>Save your </h1>
                   <h1 className={"heading2"}>money now. </h1>
                   <p className={"heading3"}>manage your company bot in few<br></br>
                    easy steps, join our pro plan to try<br></br> 
                   a 360 experience of our service.  </p><br></br>
                   <p className={"heading4"}>manage your company bot in few<br></br>
                    easy steps, join our pro plan to try<br></br> 
                   a 360 experience of our service.  </p><br></br>
                <div className="dummy-img">
                <img src={image} class={"dummy"} />
                </div>
               </div>
               <h1 className={"heading5"}>Start now </h1>
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
                  <div className={"longparacont"}></div>
                  <p className={"longpoints"}>
                    Manage conversations directly from your website.
                  </p>
                </div>
              </div>
              <div className={"pointsblock"}>
                <p className={"points"}>
                  <span className={"sign-1"}>&#10003;</span>Bot without the AI
                  service.
                </p>
              </div>
              <div className={"pointsblock"}>
                <p className={"points"}>
                  <span className={"sign-1"}>&#10003;</span>Achieved chat for 30
                  days.
                </p>
              </div>
              <div className={"pointsblock"}>
                <p className={"points"}>
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
          <div className={"itemContainer3"}>
            <div className={"itemcont3Head"}>
              <p className={"container3Head"}>
                Are you a corporate?<br></br>
                <a href={"#"} className={"contactus"}>
                  Contact us
                </a>
              </p>
            </div>
            <div className={"content3"}>
              <div className={"container3ContentHead"}>
                <p className={"content3Head1"}>Pro</p>
                <p className={"content3Head2"}>29$</p>
              </div>
              <div className={"container3ContentHead"}>
                <hr className={"horizontal2"} />
                <p className={"content3Head3"}>montly</p>
              </div>
              <p className={"content2Topic"}>
                <b>All of Lite plus:</b>
              </p>
              <div className={"content2Points"}>
                <div className={"longpara"}>
                  <div className={"longparatick"}>
                    <span className={"tick2"}>&#10003;</span>
                  </div>
                  <div className={"longparacont"}></div>
                  <p className={"longpoints3"}>
                    Bot with AI that can recognize the user's behaviour and can
                    automatize the sentences.
                  </p>
                </div>
              </div>
              <div className={"pointsblock3"}>
                <p className={"points3"}>
                  <span className={"tick2"}>&#10003;</span>Unlimited
                  conversational flows.
                </p>
              </div>
              <div className={"content2Points"}>
                <div className={"longpara"}>
                  <div className={"longparatick"}>
                    <span className={"tick2"}>&#10003;</span>
                  </div>
                  <div className={"longparacont"}></div>
                  <p className={"longpoints3"}>
                    Facebook, Twitter, Instagram and Linkedin integration.
                  </p>
                </div>
              </div>
              <div className={"pointsblock3"}>
                <p className={"points3"}>
                  <span className={"tick2"}>&#10003;</span>Achieved chat without
                  limits.
                </p>
              </div>
              <div className={"viewFeature3"}>
                <a href={"#"}>View all the features</a>
              </div>
              <button className={"button3"}>
                Start 14 days of free Pro plan
              </button>
            </div>
          </div>
              </div>  
              
            
        );
    }
}

export default Home;