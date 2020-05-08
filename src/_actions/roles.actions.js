import {roleConstants} from "../_constants";
import {roleService} from "../_services";
import {history} from "../_helpers";
import {alertActions} from ".";

export const roleActions = {
    getAll,
    // getById,
    // create,
    // update,
    // delete: _delete
}

function getAll(){
    return dispatch => {
        dispatch(request)
        roleService.getAll()
            .then(
                // roles = dispatch(success(roles)),
                // error = dispatch(failure(error))
            )
    }

    function request() { return { type: roleConstants.GET_ALL_ROLES_REQUEST } }
    function success(roles) { return { type: roleConstants.GET_ALL_ROLES_SUCESS, roles } }
    function failure(error) { return { type: roleConstants.GET_ALL_ROLES_FAILURE, error } }
}