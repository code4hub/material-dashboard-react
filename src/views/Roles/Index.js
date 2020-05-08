import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import gridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import GridContainer from '../../components/Grid/GridContainer';
import { TableHead } from '@material-ui/core';
import { roleActions } from '_actions/roles.actions';

function RolePage(){

    const roles = useSelector(state => state.roles);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(roleActions.getAll());
    }, []);
    console.log("Roles Page", roles)
    return(
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="primary">
                            <h4>Roles List</h4>
                        </CardHeader>
                        <CardBody>
                            <Table
                                tableHeaderColor="primary"
                                tableHead={["Row ID", "Role Name", "Role Description"]}
                                tableData={[
                                    ["1", "Manager", "Access to all Entries"],
                                    ["2", "Supervisor", "Access to Reports"]
                                ]}
                            />
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    )
}

export default RolePage;