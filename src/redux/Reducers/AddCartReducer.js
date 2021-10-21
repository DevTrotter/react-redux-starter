const INITIAL_STATE = {
    cart: 0
}

function AddCartReducer(state = INITIAL_STATE, action){

    switch (action.type){
        case 'ADD_CART': {
            return{
                ...state,
                cart: action.payload
            }
        }
    }
    return state
}

export default AddCartReducer