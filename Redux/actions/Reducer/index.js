import { LOGIN } from "../action";
const userInitialState = {};
const userReducer = (state = userInitialState, action)=>{
    switch ( action.type)
    {
        case LOGIN:
        console.log("payload from ", action.payload);
        console.log("login");
        return { ...state, loginuser:action.payload}
    }
    return state;
}
export {userReducer};