// middleware - redux thunk
import axios from 'axios';
import { applyMiddleware, createStore } from 'redux';
import { thunk } from "redux-thunk"; // Import directly without require

const GET_TODOES_REQ = "GET_TODOES_REQ";
const GET_TODOES_SUC = "GET_TODOES_SUC";
const GET_TODOES_ERR = "GET_TODOES_ERR";
const API_URL = "https://jsonplaceholder.typicode.com/todkkos";

// states
const initialState = {
    todos: [],
    isLoading: false,
    error: null
}

// actions

const getTodoesRequest = () => {
    return { type: GET_TODOES_REQ }
}
const getTodoesSuccess = (payload) => {
    return { type: GET_TODOES_SUC , payload }
}
const getTodoesErr = (payload) => {
    return { type: GET_TODOES_ERR, payload }
}


// reducers

 const todoesReducer = (state = initialState, {type, payload }) => {
  switch (type) {

  case GET_TODOES_REQ:
    return { 
        ...state,
        isLoading: true,
    };
  case GET_TODOES_SUC:
    return { 
        ...state,
        isLoading: false,
        todos: payload,
    };
  case GET_TODOES_ERR:
    return { 
        ...state,
        isLoading: false,
        error: payload
    };

  default:
    return state
  }
}

const fatchData = ()=>{
    return (dispatch)=>{
        dispatch(getTodoesRequest());
        axios.get(API_URL)
        .then(res => {
            const response = res.data;
            response.slice(0, 10).map(x => {
                const titles = x.title;
                 dispatch(getTodoesSuccess(titles))
            })
        })
        .catch(err => {
            const errorMessage = err.message;
            dispatch(getTodoesErr(errorMessage))
        })
    }
}

// store

const store = createStore(todoesReducer , applyMiddleware(thunk));

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(fatchData())