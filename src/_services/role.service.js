import {authHeader} from "../_helpers";

export const roleService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
}

async function getAll(){
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"action": "get_all"})
    };

    const response = await fetch("https://yx55t9np23.execute-api.us-east-1.amazonaws.com/v1/roles/", requestOptions);
    
    return handleResponse(response);
    // const response = await fetch("https://reqres.in/api/users", requestOptions);
    // let res = handleResponse(response);
    // console.log("response from service", res)
    // return res
}

async function getById(id){
    return null;
}

async function create(){
    return null;
}

async function update(){
    return null;
}

async function _delete(id){
    return null;
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        // console.log(data)
        return data;
    });
}