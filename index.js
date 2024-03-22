import { createStore } from 'redux';


const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";


// State (যা নিয়ে কাজ করতে চাই)
const initCounterState = {
    name: "Rafiq",
    age: 0,
    height: 0,
    count: 0
}


// Action
const increamCounter = () => {
    return {
        type: INCREMENT,
    }
}
const decreamCounter = () => {
    return {
        type: DECREMENT,
    }
}

export const PayloadCounter = (payload) => ({
  type: ADD_USER ,
  payload
})


// const addUser = ()=>{
//     return {
//         type: ADD_USER,
//         payload: {name: "shakil"}
//     }
// }


// Reducer 
const counterReducer = (state = initCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1

            }

        case ADD_USER:
            return {
                ...state,
                height: state.height + action.payload
            }
        default: state;

    }
}

// Create store
const store = createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState())
})

// dispatch action
store.dispatch(PayloadCounter(10));


 