import {roleConstants} from "../_constants";
import {roleService} from "../_services";
import {history} from "../_helpers";
import {alertActions} from ".";

export const roleActions = {
    getAll,
    // getById,
    create,
    // update,
    // delete: _delete
}

function getAll(){
    return dispatch => {
        dispatch({ type: roleConstants.GET_ALL_ROLES_REQUEST })
        roleService.getAll()
            .then(
                roles => dispatch( { type: roleConstants.GET_ALL_ROLES_SUCCESS, roles }),
                error => dispatch( { type: roleConstants.GET_ALL_ROLES_FAILURE, error })
            );
    };
}

function create(){
    return null;
}