import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";

import {roleActions} from "../../_actions";

function CreateRole(){
    const [inputs, setInputs] = useState({
        name: "",
        description: ""
    })
    const [submitted, setSubmitted] = useState(false);
    const { name, description } = inputs;
    const dispatch = useDispatch();

    function handleChange(e){
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value}));
    }

    function handleSubmit(e){
        e.preventDefault();
        setSubmitted(true);
        dispatch(roleActions.create(name, description));
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <Card>
                            <CardHeader color="primary">
                                <h4>Create Role</h4>
                            </CardHeader>
                            <CardBody>
                                <FormControl fullWidth variant="outlined">
                                    <TextField
                                        id="rolename"
                                        label="Name"
                                        variant="outlined"
                                        type="text"
                                        onChange={handleChange}
                                        value={name}
                                    /><br/>
                                    <TextField
                                        id="roledesc"
                                        label="Description"
                                        variant="outlined"
                                        type="text"
                                        onChange={handleChange}
                                        value={description}
                                    /><br/>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        type="submit"
                                    > Submit </Button>
                                </FormControl>
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            </form>
        </div>
    )
}

export default CreateRole;