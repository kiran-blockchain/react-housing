import axios from "axios"

export const increment =()=>{
    return {
        type:'INCREMENT',

    }
}

export const decrement =()=>{
    return {
        type:'DECREMENT',
    }
}

export const addToCart =(data)=>{
    return {
        type:'ADD_TO_CART',
        data
    }
}

export const removeFromCart =(data)=>{
    return {
        type:'REM0VE_FROM_CART',
        data
    }
}


const fetchDataInit = ()=>{
    return{
        type:'FETCHING'
    }
}
const fetchDataFailure = ()=>{
    return{
        type:'FETCHING_FAILURE'
    }
}
const fetchDataSuccess = (data)=>{
    return{
        type:'FETCHING_SUCCESS',
        data
    }
}
export const getData = (url)=>{ 
    return async (dispatchAction)=>{
        dispatchAction(fetchDataInit());
        try{
            let result = await axios.get(url);
            dispatchAction(fetchDataSuccess(result.data))
        }
        catch (ex){
            dispatchAction(fetchDataFailure())
        }
    }
}