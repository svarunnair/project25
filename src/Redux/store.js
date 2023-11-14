import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";




const root=combineReducers({
    data:'',
    auth:""
})

export const store=legacy_createStore(root,applyMiddleware(thunk))
