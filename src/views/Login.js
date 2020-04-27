import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import Card from "components/Card/Card";
import jwt_decode from "jwt-decode";
import Dashboard from "./Dashboard/Dashboard";
import { Redirect } from "react-router-dom";
// import Alert from "@material-ui/lab/Alert";
// import "./login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      data: [],
      username: null,
      password: null,
      user: null
    };
    console.log(this.state.data);
  }

  handleUsername(val) {
    this.setState({
      username: val.target.value
    });
  }

  handlePassword(val) {
    this.setState({
      password: val.target.value
    });
  }
  loginUser() {
    if (!this.state.username && this.state.password)
      alert("Invalid input data");
    else {
      const header = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      };

      fetch(
        "https://hyc8sdn98i.execute-api.us-east-1.amazonaws.com/v1/",
        header
      )
        .then(res => res.json())
        .then(
          result => {
            var decoded = jwt_decode(result.data.id_token);
            console.log(result.data, { decoded });

            this.setState({
              message: result.message || null,
              data: result.data || [],
              user: decoded.name || null
            });

            if (decoded)
              this.props.history.push({
                pathname: "/admin",
                state: { user: decoded.name }
              });
            else alert("invalid login");
          },
          error => {
            console.log({ error });
            this.setState({
              message: false,
              data: []
            });
          }
        );
    }
  }

  render() {
    const { message, data } = this.state;
    return (
      <GridContainer>
        <GridItem>
          <Card>
            <CardHeader>Login</CardHeader>
            <CardBody>
              <div className="boxLogin">
                {/* <Alert severity="info">{message}</Alert> */}
                {/* <br /> */}
                <TextField
                  id="username"
                  label="Username"
                  type="email"
                  autoComplete=""
                  variant="outlined"
                  onChange={this.handleUsername.bind(this)}
                />
                <br />
                <br />
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                  onChange={this.handlePassword.bind(this)}
                />
                <br />
                <br />
                <Button variant="contained" color="secondary">
                  Cancel
                </Button>
                &nbsp;&nbsp;
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.loginUser.bind(this)}
                >
                  Login
                </Button>
              </div>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default Login;
