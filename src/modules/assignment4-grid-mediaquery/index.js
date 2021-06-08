import React,{Component} from 'react';
import './index.css';
import logo from './logo.png';
import setting from './setting.png';
import noti from './notification.png';
import man from './man.png';

class Home extends Component{
render(){
    return(
   <div className={"page"}>
       <div className={"grid-view"}>
       <div className={"header"}>
       <div class={"hamburger"}>
  <div className={"line-1"}></div>
  <div className={"line-2"}></div>
  <div className={"line-3"}></div>
</div>

<img src={logo} className={"logo"}></img>
<img src={setting} className={"setting"}></img>
<img src={noti} className={"noti"}></img>
<img src={man} className={"man"}></img>
</div>
       <h1 className={"heading"}>Support</h1>
<div className={"search-container-1"}>
<i class="fa fa-search" aria-hidden="true"></i>
<input type="text" placeholder="Search Xcoin support" className="search"></input>
</div>

<div className="card-container">
    <div className="card">
        <h2 className="buy-currency">Buy Currency</h2>
        <p className="what-currencies">What currencies do we accept?</p>
        <p className="what-currencies">What is minimum order amount?</p>
        <p className="what-currencies">What is cash advance fees?</p>
        <p className="what-currencies">Etherium order and smart contracts.</p>
        <p className="what-currencies">Etherium order and smart contracts.</p>
        <p className="see-all-article">See all article</p>
    </div>
    <div className="card">
        <h2 className="buy-currency">Verification</h2>
        <p className="what-currencies">What currencies do we accept?</p>
        <p className="what-currencies">What is minimum order amount?</p>
        <p className="what-currencies">What is cash advance fees?</p>
        <p className="what-currencies">Etherium order and smart contracts.</p>
        <p className="what-currencies">Etherium order and smart contracts.</p>
        <p className="see-all-article">See all article</p>
    </div> 
    <div className="card">
        <h2 className="buy-currency">Order</h2>
        <p className="what-currencies">What currencies do we accept?</p>
        <p className="what-currencies">What is minimum order amount?</p>
        <p className="what-currencies">What is cash advance fees?</p>
        <p className="what-currencies">Etherium order and smart contracts.</p>
        <p className="what-currencies">Etherium order and smart contracts.</p>
        <p className="see-all-article">See all article</p>
    </div> <div className="card">
        <h2 className="buy-currency">Wallet</h2>
        <p className="what-currencies">What currencies do we accept?</p>
        <p className="what-currencies">What is minimum order amount?</p>
        <p className="what-currencies">What is cash advance fees?</p>
        <p className="what-currencies">Etherium order and smart contracts.</p>
        <p className="what-currencies">Etherium order and smart contracts.</p>
        <p className="see-all-article">See all article</p>
    </div> 
    <div className="card">
        <h2 className="buy-currency">Payment Methods</h2>
        <p className="what-currencies">What currencies do we accept?</p>
        <p className="what-currencies">What is minimum order amount?</p>
        <p className="see-all-article-payment">See all article</p>
    </div> 
    <div className="card">
        <h2 className="buy-currency">Others</h2>
        <p className="what-currencies">What currencies do we accept?</p>
        <p className="what-currencies">What is minimum order amount?</p>
        <p className="what-currencies">What is cash advance fees?</p>
        <p className="what-currencies">Etherium order and smart contracts.</p>
        <p className="see-all-article-others">See all article</p>
    </div>
    <div className="card">
        <h2 className="buy-currency">Security</h2>
        <p className="what-currencies">What currencies do we accept?</p>
        <p className="what-currencies">What is minimum order amount?</p>
        <p className="what-currencies">What is cash advance fees?</p>
        <p className="see-all-article-security">See all article</p>
    </div>
    <div className="card">
        <h2 className="buy-currency">Referral Program</h2>
        <p className="what-currencies">What currencies do we accept?</p>
        <p className="see-all-article-ref">See all article</p>
    </div>
</div>
</div>

   </div>
    );
}
}
export default Home;