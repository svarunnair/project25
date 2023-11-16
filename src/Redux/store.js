import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { dataReducer } from "./Data/reducer";




const root=combineReducers({
    data:dataReducer,
    auth:""
})

export const store=legacy_createStore(root,applyMiddleware(thunk))
