import { Map } from "immutable";

const initialState = Map({ value: 0 });

export const counter = (state = initialState, action) => {
    if(action === undefined)
        return initialState;
    
    switch (action.type) {
    case "INCREMENT":
        console.log("incrementing");
        return state.update("value", v => v+action.value);
    case "DECREMENT":
        return state.update("value", v => v - action.value);
    case "RESET":
        return initialState;
    default:
        return state;
    }
};
