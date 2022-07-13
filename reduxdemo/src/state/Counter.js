const initialState = {
    cartItems : [{
    }]
}

export const Counter = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            var counter = state.count + 1;
            return { ...state, count:counter };

        case 'DECREMENT':
            var counter = state.count - 1;
            return { ...state, count:counter }
        default:
            return { ...state }
    }

};

