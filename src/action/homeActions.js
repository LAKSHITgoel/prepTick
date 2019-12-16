import * as types from '../constants';

export const getData = (page = 1, company = '', role = '') => ({
    type: types.GET_DATA,
    payload: {
        page,
        company,
        role
    }
})