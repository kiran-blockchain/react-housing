import { useEffect,useState } from "react"
import axios  from "axios"
export const Dropdown = ()=>{
    const [countryList,setCountryList] = useState([]);
    useEffect(()=>{
        axios.get('https://restcountries.com/v2/all').then(result=>{
            console.log(result);
            setCountryList(result.data);
            
        }).catch(err=>{
             console.log(err);
        });
    },[])
    return <div>
        <select className="form-control">
            <option value="">Select Country</option>
            {countryList.map((x,i)=>{
                return <option key={i} value={x.alpha2Code}>{x.name}</option>
            })}
            
        </select>
    </div>
}

export default Dropdown;