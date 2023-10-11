import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from 'redux/reducers'
import { composeWithDevTools } from "redux-devtools-extension";

// Start initial config

const initialState = {};

const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
    // composeWithDevTools(applyMiddleware(...middleware)) 
)

// End initial config

export default store;