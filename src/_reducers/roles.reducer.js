import {roleConstants} from "../_constants";

export function roles(state = {}, action){
    console.log('Innnn',{actions})
    switch(action.type){
        case roleConstants.GET_ALL_ROLES_REQUEST:
            return {
                loading: true
            };
        case roleConstants.GET_ALL_ROLES_SUCCESS:
            return {
                items: action.roles
            };
        case roleConstants.GET_ALL_ROLES_FAILURE:
            return {
                error: action.error
            };
        default:
            return state;
    }
}