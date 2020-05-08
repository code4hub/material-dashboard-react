import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import GridItem from "../../components/Grid/GridItem";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import GridContainer from '../../components/Grid/GridContainer';
import { roleActions } from '_actions/roles.actions';

const RolePage = (props) => {
  const dispatch = useDispatch();
  const { roles } = useSelector(state => state.roles);
  let tableData = roles && roles.map((v, i) => {
    return [`${i + 1}`, v.role_name, v.role_desc]
  })

  console.log('...', tableData)
  useEffect(() => {
    dispatch(roleActions.getAll());

    // console.log({props})
  }, []);

  // console.log("Roles Page", roles)

  return (
    <div>
      <GridContainer>
        <GridItem xs={2} sm={2} md={2}>
          <Link to='/admin/roles/add'>Create Role</Link>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4>Roles List</h4>
            </CardHeader>
            <CardBody>
              {tableData && <Table
                tableHeaderColor="primary"
                tableHead={["Row ID", "Role Name", "Role Description"]}
                tableData={tableData}
              />}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default RolePage



// export default RolePage;