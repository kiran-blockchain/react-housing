
const initialState ={
    status:'',
    data:[]
}

export const Products = (state=initialState,action)=>{
  switch(action.type){
    case 'FETCHING':
        console.log('FETCHING........')
        return{...state,status:'loading'}
    case 'FETCHING_SUCCESS':
        console.log('FETCHING Success')
        return{...state, status:'success',data:action.data}
    case 'FETCHING_FAILURE':
        console.log('FETCHING failed')
        return{...state, status:'failure',data:[]}
    default:
        return {...state}
  }
} 