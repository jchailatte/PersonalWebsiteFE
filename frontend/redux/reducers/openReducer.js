import { OPEN_TOGGLE, CLOSE_TOGGLE } from '../actions/openActions';

const openReducer = (state = {open: true}, action) =>{
    switch(action.type) {
        case OPEN_TOGGLE:
            return {...state, open: true};
        case CLOSE_TOGGLE:
            return {...state, open: false};
        default:
            return {...state};
    }
};

export default openReducer;