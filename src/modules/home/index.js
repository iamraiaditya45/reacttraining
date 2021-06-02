import React ,{ Component} from 'react';
import './index.css';

class Home extends Component{
    render(){
        return(
            <div className={"homeContainer"}>
                <h1 className={"h1tag"}>{"hello from other side"}</h1>
                <h2 id={"h2tag"}>{"hello from home"}</h2>
                <h3>{"hello from home"}</h3>
            </div>
        );
    }
}

export default Home;