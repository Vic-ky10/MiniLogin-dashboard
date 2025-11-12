
const initialState = {count:0};

function counterReducer(state, action) {
    switch (action.type){
        case "increment" :
            return {count :state.count +1} ;
            case "decrement" :
                return {count :state.count -1};
                case "increamentByAmount":
                    return {count:state.count + action.payload};
                    case "decreamentByAmount" :
                        return {count : state.count - action.payload};
                        default :
                        return state
    }
}

export {initialState, counterReducer}