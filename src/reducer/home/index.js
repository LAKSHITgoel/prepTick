import * as types from '../../constants';

const initialState = {
    meta: [],
    data: [],
    page: 1
}

export default (state= initialState, action) => {
    switch(action.type){
        case types.SET_DATA: return {
            ...state,
            meta: action.payload.meta,
            data: action.payload.data
        }
        default: return state;
    }
}