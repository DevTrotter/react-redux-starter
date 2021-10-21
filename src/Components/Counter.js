import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {
    const [cartData, setCartData] = useState()
    const {cart, count} = useSelector(state => ({
        ...state.CounterReducer,
        ...state.AddCartReducer
    }))
    const dispatch = useDispatch()

    const incrFunc = () => {
        dispatch({
            type: "INCR"
        })
    }

    const decrFunc = () => {
        dispatch({
            type: "DECR"
        })
    }

    const addCart = () => {
        dispatch({
            type: "ADD_CART",
            payload: cartData
        })
    }

    return (
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={decrFunc}>-1</button>
            <button onClick={incrFunc}>+1</button>
            

            <h1>Le panier : {cart}</h1>
            <input 
            type="number" 
            value={cartData}
            onInput={e => setCartData(e.target.value)}
            />
            <button onClick={addCart}>Ajouter au panier</button>
        </div>
    )
}
