import React,{Component} from 'react';
import './index.css';

import image from './logo.png';
import image8 from './man.png';
import mastercard from './Mastercard.png';
import visacard from './visa.png';
import message from './message.png';
import noun from './noun.png';
import you from './you.png';
import usa from './usa.png';
import bitcoin from './bitcoin.png';
import nountick from './noun-tick.png';
 import nountick1 from './noun_tick_.png';
 import nountimer from './noun-timer.png';
 import greentick from './tick-green.png';
 import greenwallet from './wallet-green.png';
 import greentimer from './timer-green.png';
import wallet from './wallet.png';
import circle1 from './circle1.png';
import circle2 from './circle2.png';
import circle3 from './circle3.jpeg';
import girl from './girl.png';
import twitter from './twitter.svg';
import facebook from './facebook.svg';
import review from './review-footer.png';
class Home extends Component{
  // renderBox1(img, heading, content,number,extraclass="") {
  //   return (
  //     <div className={"cardBlue"}>
  //       <img src={img} className={extraclass}></img>
  //       <div className={"cardBlueHead"}>
  //         <div className="oval-active"><span className="oval_inner-active">{number}</span></div>
  //         <h3 className={"blueContainerHead"}>{heading}</h3>
  //         </div>
  //         <p className={"blueContainerPara"}>{content}</p>
  //     </div>
  //   );
  // }
  renderBox1(img, heading, content,number,extraclass="") {
    return (
      <div className={"cardBlue"}>
        <img src={img} className={extraclass}></img>
        <div className={"cardBlueHead"}>
          <div class="oval-active"><span class="oval_inner-active">{number}</span></div>
          <h3 className={"blueContainerHead"}>{heading}</h3>
          </div>
          <p className={"blueContainerPara"}>{content}</p>
      </div>
    );
  }
  renderBox2(img, heading, content,number,extraclass="") {
    return (
      <div className={"cardBlue"}>
        <img src={img} className={extraclass}></img>
        <div className={"cardBlueHead"}>
          <div class="oval-active-green"><span class="oval_inner-active">{number}</span></div>
          <h3 className={"blueContainerHead"}>{heading}</h3>
          </div>
          <p className={"blueContainerPara"}>{content}</p>
      </div>
    );
  }
render(){
    return(
      <div className={"xcoins"}>
        <div className={"page-1"}>
<div className={"header"}>
    <div className={"logo"}>
<img src={image} />
</div>
  <div className={"header-middle"}>     
    <a href="#buyBitcoin">BUY BITCOIN</a>
    <a href="#sellBitcoin">SELL BITCOIN</a>
    <a href="#blog">BLOG</a>
    <a href="#about">ABOUT US</a>
  </div>

  <div className={"dropdown"}>
  <button className={"dropbtn"}> 
      <i className={"fa fa-caret-down"}></i>
    </button>
    <button className={"button button2"}>LOGIN</button>
    <button className={" button button3"}>SIGNUP</button>
  </div>
</div>

<div className={" header-2"}>
  <div className="header-2-text">
  <h1 className={"header-2-text-1"}>{"Buy & sell DogeCoin Online"}</h1>
  <h2 className={"header-2-text-2"}>{"Add Doge to your crypto wallet"}</h2> 
  <p className={"header-2-text-3"}>{"Instant fun and free from the traditional banking system Buy Dogecoin with your debit or credit card today"}</p> 
  </div>
<div className={"card"}>
<h1 className={"heading-card"}>{"Get your crypto now!"}</h1>

<button className={"button4"}>{"BUY"}</button>
    <button className={" button5"}>{"SELL"}</button>
<div className={"add-money"}>
  {/* <img src={usa}></img> */}
<input type="num"   placeholder="100"></input>
<div class="circle1"> </div>
<select className={"currency"}>
                    <option className={"currency-content"}>USD</option>
                    <option className={"currency-content"}>INR</option>
                </select>
</div>
<hr className={"hr"}></hr>
<div className={"add-money"}>
<input type="num"   placeholder="0.0000965"></input>
<div class="circle1"> </div>
<select className={"currency"}>
                    <option className={"currency-content"}>BTC</option>
                    <option className={"currency-content"}>DOGE</option>
                </select>
</div>
    <button className={" button6"}>{"BUY BITCOIN"}</button>
</div>
</div>
 </div>

<div className={"transaction-card"} >
  <div className={"master-card"}>
  <img src={mastercard}></img>
            <p className={"masterPara1"}>{".... .... .... 1234"}</p>
            <div className={"masterDetail"}>
            <p className={"masterPara2"}>{"Card Holder"}</p><span className={"masterSpan"}>Expires</span></div>
            <div className={"masterDetail"}>
            <p className={"masterPara2"}>{"George Dux"}</p><span className={"masterSpan"}>01/24</span>
            </div>
  </div>
<div className={"visa-card"}>
<img src={visacard}></img>
                <p className={"visaPara1"}>{".... .... .... 1234"}</p>
                <div className={"masterDetail"}>
            <p className={"masterPara2"}>{"Card Holder"}</p><span className={"masterSpan"}>Expires</span></div>
            <div className={"masterDetail"}>
            <p className={"masterPara2"}>{"John Connor"}</p><span className={"masterSpan"}>12/24</span>
            </div>
</div>
<div className={"text-card"}>
<h2 className={"section2Heading"}>{"Exchange your Dogecoins instantly!"}</h2>
              <p className={"section2Para"}>{"Buy and sell your Doge using your Visa or Mastercard debit or credit card"}</p>

</div>
</div>
<div className={"section3"}>
  <h2 className={"section3Head1"}>{"How to Buy Dogecoin"}</h2>
  <p className={"section3Head2"}>{"Only 3 simple steps"}</p>
  <div className={"section3Cards"}>
  {this.renderBox1(nountick1, "Get verified quickly",
  "Just sign up, upload your verification documents and open your account.",1
)}
{this.renderBox1(wallet, "Buy Dogecoin",
  "Select which coin you would like to buy and how much you want to puchase.",2
)}
{this.renderBox1(nountimer, "Receive coins",
  "Will send your coins to your wallet within 15 minutes of payment approval.",3,"card3image"
)}
  </div>
  <button type={"button"} className={"section3btn"}>{"BUY DOGECOINS"}</button>
</div>
<div className={"section3"}>
  <h2 className={"section3Head1"}>{"How to Sell Dogecoin"}</h2>
  <p className={"section3Head2"}>{"Only 3 simple steps"}</p>
  <div className={"section3Cards"}>
  {this.renderBox2(greentick, "Get verified quickly",
  "Just sign up, upload your verification documents and open your account.",1
)}
{this.renderBox2(greenwallet, "Sell Dogecoin",
  "Select Dogecoin under the sell tab and decide how much you want to sell.",2
)}
{this.renderBox2(greentimer, "Receive cash",
  "Will send your coins to your wallet within 15 minutes of payment approval.",3,
)}
  </div>
  <button type={"button"} className={"section4btn"}>{"SELL BITCOINS"}</button>
</div>
<div className={"why-to-buy"}>
  <div className={"why-to-buy-image"}>
  <img src={image8} />
  </div>
  <div className={"why-to-buy-content"}>
<h1>{"Why Buy & Sell Dogecoin with "}<br></br>{"Xcoins ?"} </h1>
<i class="fa fa-lock"></i><p className={"lock-line"}>{"Encryption Technology"}</p>
<p className={"lock-line-2"}>{"Xcoins reputation for speed and security will keep you coming back. World-class encryption technology keeps your data secure and your transaction safe."}</p>
<img src={message} className={"message-icon"} /><p className={"Customer-Care"}>Customer-care</p>
<p className={"message-icon-2"}>{"If you have any questions about Dogecoin or how to buy & sell it. You can contact our 24/7 customer support team"}</p>
 
 <div className={"card-2"}>
   <p className="card-2-content">{"Buy & Sell Dogecoin today"}</p>
   <button className={" card-2-button"}><p className={"Sign-up"}>{"SIGN UP"}</p></button>
 </div>
  </div>
  </div>
<div className={"what-is-doge"}>
<div className={"what-is-doge-card-1"}>
<img src={noun} className={"noun-img"} />
<img src={nountick} className={"noun-tick"} /><p className={"noun-content"}>Decentralized</p>

</div>

<div className={"what-is-doge-card-2"}>
 <p className={"what-is-doge-card-2-heading"}>What is Doge?</p> 
 <p className={"what-is-doge-card-2-subheading"}>{"Dogecoin(Doge) is a cryptocurrency created by software engineers in 2013. It's been stated that it was created jokingly as a homage to Bitcoin, but with recent price surges, it's becoming a much more serious investment for crpto-enthusiasts."}</p>
</div>
<div className={"what-is-doge-card-3"}>
<img src={you} className={"you-img"} />
<img src={nountick} className={"noun-tick"}/> <p className={"noun-content-2"}>Peer-to-Peer</p>

</div>
</div>
<p className={"where-can-i-spend"}>Where can i spend my Doge</p> 
 <p className={"where-can-i-spend-2"}>{"There are variet of fashion and clothing shops online accepting Doge as payment. You can also use your doge to pay for domains and hosting, or online casinos."}</p>

<div className={"where-can-i"}>
  <div className={"circle-1"}>

  <img src={circle1} className={""} /><p className={"clothing-stories"}>{"CLOTHING STORES"}</p>
  </div>
  <div className={"circle2"}>
  <img src={circle1} className={""} /> <p className={"clothing-stories"}>{"DOMAIN & HOISTING"}</p>

  </div>
  <div className={"circle-3"}>
  <img src={circle3} className={""} /> <p className={"clothing-stories"}>{"ONLINE CASINOS"}</p>

  </div>
 </div>
 <div className={"why-to-buy"}>
  <div className={"why-to-buy-image"}>
  <img src={girl} />
  </div>
  <div className={"why-to-buy-content"}>
<h1>{"Is Dogecoin for me ?"} </h1>
<p className={"lock-line-2"}>{"Dogecoin, although created for fun, has recently had a large price surge. Its growth in popularity also means that more companies are accepting it as a form of payment."}</p> 
 <div className={"card-2"}>
   <p className="card-2-content">{"Buy & Sell Dogecoin today"}</p>
   <button className={" card-2-button"}><p className={"Sign-up"}>{"SIGN UP"}</p></button>
 </div>
  </div>
  </div>
 

  <div className={"footer"}>
                <div className={"footer-img"}>
                    <img src={image} className={"logo-img"}></img>
                     <img src={review} className={"review"}></img> 
                    <p className="footer-address">14 East, Level 8, Sliema Road, GZR1639, Malta</p>
                </div>
                <ul className={"company"}>
                    <h4>COMPANY</h4>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Press Kit</li>
                </ul>

                <ul className={"support"}>
                    <h4>SUPPORT</h4>
                    <li>Help Center</li>
                    <li>Contact</li>
                </ul>

                <ul className={"social"}>
                    <h4>SOCIAL</h4>
                    <li> Instagram</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                </ul>
            </div>
            <div className={"footer-xcoins-term"}>
                        <span>&copy;XCoins.com</span>
                        <span>Terms of Service</span>
                        <span>Privacy Policy</span>
                        <span>Legal notice</span>
                        <span>Sitemap</span>
            
                <select className={"lang"}>
                <option className={"lang-content"}></option>
                    <option className={"lang-content"}>Language</option>
                    <option className={"lang-content"}>English</option>
                </select>
                </div>
                <div className={"footer-end"}>
                <p className={"footer-end-content"}>{"Xcoins is property of CF Technologies Ltd - Company #204616970 4 East, Level 8, Sliema Road, GZR1639, Malta. All trademarks and copyrights belong to their respective owners. All rights reserved."}</p>
                </div>
</div>

        );
    }
}
 