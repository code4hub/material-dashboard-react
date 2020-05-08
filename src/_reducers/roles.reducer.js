import {roleConstants} from "../_constants";

const initialState = {
	loading: false,
	roles: [],
	error: null
}

export function roles(state = initialState, action){
    switch(action.type){
        case roleConstants.GET_ALL_ROLES_REQUEST:
            return {
                loading: true
            };
        case roleConstants.GET_ALL_ROLES_SUCCESS:
            return {
                roles: action.roles && action.roles.params
            };
        case roleConstants.GET_ALL_ROLES_FAILURE:
            return {
                error: action.error
            };
        default:
            return state;
    }
}