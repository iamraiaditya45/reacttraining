import React,{Component} from 'react';
import './index.css';
import logo from './logo.png';

class Home extends Component{
    render(){
        return(
       <div className={"page"}>
<div className={"side-bar"}>
<img src={logo} className={"logo"}></img>
<p className={"topic"}>TOPICS</p>
<p className={"topic-below"}>Affiliate Program</p>
<p className={"topic-below"}>Buy & Sell Cryptocurrencies</p>
<p className={"topic-below"}>Contact Us</p>
<p className={"topic-below"}>My Xcoins Accounts</p>
<p className={"topic-below"}>Orders</p>
<p className={"topic-below"}>Payment Methods</p>
<p className={"topic-below"}>Security</p>
<p className={"topic-below"}>Verification</p>
<p className={"topic-below"}>Wallet</p>
</div>
<div className={"main-body"}>

<div className={"support-line"}>
    <div>
    <p className={"support"}>Support</p>
    </div>
    <div>
    <select className={"currency"}>
                    <option className={"currency-content"}>EN</option>
                    <option className={"currency-content"}>DOGE</option>
                </select>
                </div>
                <div>
    <button className={" support-button"}>{"BACK TO XCOINS"}</button>
    </div>
</div>

<div className={"search-container"}>
<i class="fa fa-search" aria-hidden="true"></i>
<input type="text" placeholder="Search Xcoin support" className="search"></input>
</div>
<div className="card-container">
    <div className="card">
        <h2 className="buy-currency">Affiliate Program</h2>
        <p className="what-currencies">What currencies do we accept?</p>
        <p className="what-currencies">What is minimum order amount?</p>
        <p className="what-currencies">What is cash advance fees?</p>
    </div>
    <div className="card">
        <h2 className="buy-currency">Buy & Sell Cryptocurrencies</h2>
        <p className="what-currencies">What currencies do we accept?</p>
        <p className="what-currencies">What is minimum order amount?</p>
        <p className="what-currencies">What is cash advance fees?</p>
        <p className="what-currencies">Etherium order and smart contracts.</p>
        <p className="see-all-article-verifiy">See all article</p>
    </div> 
    <div className="card">
        <h2 className="buy-currency">Contact Us</h2>
        <p className="what-currencies">What currencies do we accept?</p>
        <p className="what-currencies">What is minimum order amount?</p>     
    </div> 
    <div className="card">
        <h2 className="buy-currency">My Xcoins Account</h2>
        <p className="what-currencies">What currencies do we accept?</p>
        <p className="what-currencies">What is minimum order amount?</p>
        <p className="what-currencies">What is cash advance fees?</p>
       
    </div> <div className="card">
        <h2 className="buy-currency">Orders</h2>
        <p className="what-currencies">What currencies do we accept?</p>
        <p className="what-currencies">What is minimum order amount?</p>
        <p className="what-currencies">What is cash advance fees?</p>
        <p className="what-currencies">Etherium order and smart contracts.</p>
        <p className="see-all-article-wallet">See all article</p>
    </div> 
    <div className="card">
        <h2 className="buy-currency">Payment Methods</h2>
        <p className="what-currencies">What currencies do we accept?</p>
        <p className="what-currencies">What is minimum order amount?</p>
        <p className="what-currencies">What is cash advance fees?</p>
        <p className="what-currencies">Etherium order and smart contracts etherium order and smart contracts.</p>
        <p className="see-all-article-payment">See all article</p>
    </div> 
    <div className="card">
        <h2 className="buy-currency">Security</h2>
        <p className="what-currencies">What currencies do we accept?</p>
        <p className="what-currencies">What is minimum order amount?</p>
        <p className="what-currencies">What is cash advance fees?</p>
        <p className="what-currencies">Etherium order and smart contracts.</p>
        <p className="see-all-article-others">See all article</p>
    </div>
    <div className="card">
        <h2 className="buy-currency">Verification</h2>
        <p className="what-currencies">What currencies do we accept?</p>
        <p className="what-currencies">What is minimum order amount?</p>
        <p className="what-currencies">What is cash advance fees?</p>
        <p className="what-currencies">Etherium order and smart contracts.</p>
        <p className="see-all-article-security">See all article</p>
    </div>
    <div className="card">
        <h2 className="buy-currency">Wallet</h2>
        <p className="what-currencies">What currencies do we accept?</p>
        <p className="what-currencies">What is minimum order amount?</p>
        <p className="what-currencies">What is cash advance fees?</p>
        <p className="what-currencies">Etherium order and smart contracts.</p>
        <p className="see-all-article-ref">See all article</p>
    </div>
</div>

</div>
           </div>


);
}
}


export default Home;