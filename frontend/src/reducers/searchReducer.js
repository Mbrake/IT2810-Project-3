import {SEARCH_COURSE} from '../store/actionTypes'



/* Things you should never do inside a reducer:

- Mutate its arguments;
- Perform side effects like API calls and routing transitions;
- Call non-pure functions, e.g. Date.now() or Math.random(). */

const initialState = {
    text: '',
    courses: [],
    loading: false,
    //TODO Add initialState
}


export default function(state = initialState, action) {
    switch(action.type) {
        case SEARCH_COURSE:
            return {
                ...state,
                text: action.payload, //setter staten text til action.payload som er input i søkefelt
                loading: false
            }
        default:
            return state
    }
}