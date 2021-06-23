import React , {useEffect ,useState} from 'react'
import './index.css';

const   Covid=()=>{
    const[data,setData]=useState([]);

    const getCovidData=async ()=>{
        try{
            const res= await fetch('https://api.covid19india.org/data.json');
            const actualData=await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        }catch (err){
            console.log(err);
        }
    }
    useEffect(()=>{
getCovidData();
    },[]);
    return(
        <div>
            <table className="table">
                <tr>
                    <th>ACTIVE</th>
                    <th>CONFIRMED</th>
                    <th>DEATH</th>
                    <th>RECOVERED</th>
                    <th>LAST UPDATE</th>
                    <th>MIGRATE</th>
                </tr>
                {/* <tr>
                    <td>{data.active}</td>
              <td>{data.confirmed}</td>
             <td> {data.deaths}</td>
             <td> {data.recovered}</td>
             <td> {data.lastupdatedtime}</td>
             <td> {data.migratedother}</td>
                </tr> */}
            </table>

            <form>
            {/* <label for="country">Country</label> */}
    <select id="country" name="country">
      <option value="australia">ACTIVE</option>
      <option value="canada">CONFIRMED</option>
      <option value="usa">DEATH</option>
      <option value="usa">RECOVERED</option>
      <option value="usa">LAST UPDATE</option>
    </select>
    <input type="submit" value="Submit"/>
    
            </form>
                        </div>  
    )
}
export default  Covid;