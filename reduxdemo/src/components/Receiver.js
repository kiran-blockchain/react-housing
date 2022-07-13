import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { PRODUCTS_URL } from '../constants/urls';
import { getData } from '../state/actions';
const Receiver =()=>{
    const result = useSelector(x=>x.Cart);
    console.log(result);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getData(PRODUCTS_URL));
    },[])
    return <div>
        <h1>Receiver </h1>
        <h1>Count =  {result.count}</h1>
        <button onClick={()=>{
           dispatch(getData(PRODUCTS_URL));
        }}></button>
    </div>
}

export default Receiver;