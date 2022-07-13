const initialState ={
    cartItems:[]
};

export const Cart =(state=initialState,action)=>{
    let data = action.data;
    switch(action.type){

        case 'ADD_TO_CART':
            //LOGIC GOES HERE
            const items = state.cartItems;
            items.push(data);
            return {...state,cartItems:items};
        case 'REMOVE_FROM_CART':
            //LOGIC GOES HERE
            const items2 = state.cartItems;
            let indexOfItem = state.cartItems.findIndex(x=>x.id ==data.id);
            items2.splice(indexOfItem,1);
            return{...state,cartItems:items2}
        default:
            return {...state};
    }
}