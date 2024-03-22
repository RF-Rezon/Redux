import { createStore } from 'redux';


const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";


// State (যা নিয়ে কাজ করতে চাই)
const initCounterState = {
    count: 0
}

const initUserState = {
    users: [{ name: "anisul islam" }]
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
        default: state;

    }
}

// Create store
const store = createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState())
})

// dispatch action
store.dispatch(increamCounter())

 