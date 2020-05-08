import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import Card from "components/Card/Card";
import jwt_decode from "jwt-decode";
import Dashboard from "./Dashboard/Dashboard";
import { Link, Redirect } from "react-router-dom";
import FormControl from '@material-ui/core/FormControl';
import Alert from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from 'react-redux';
import { userActions, alertActions } from '_actions';
import { history } from "_helpers";
// import "./login.css";

function LoginPage() {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();

    const alert = useSelector(state => state.alert);
    console.log("alert message", alert)
    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (username && password) {
            // console.log("User Action dispatch")
            dispatch(userActions.login(username, password));
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <GridContainer
                    direction="row"
                    justify="center"
                    alignItems="stretch"
                    spacing={3}
                >
                    <GridItem xs={12} sm={12} md={4}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className>Login</h4>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        {alert.message &&
                                            <Alert severity={alert.type}>{alert.message}</Alert>
                                        }
                                        <br />
                                        <FormControl fullWidth variant="outlined">
                                            <TextField
                                                id="username"
                                                name="username"
                                                label="Username"
                                                type="email"
                                                autoComplete=""
                                                variant="outlined"
                                                value={username}
                                                onChange={handleChange}
                                                required
                                                className={'form-control' + (submitted && !username ? ' is-invalid' : '')}
                                            />
                                            {submitted && !username &&
                                                <div className="invalid-feedback">Username is required</div>
                                            }
                                        </FormControl>
                                    </GridItem>
                                </GridContainer>
                                <br />
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <FormControl fullWidth variant="outlined">
                                            <TextField
                                                id="outlined-password-input"
                                                name="password"
                                                label="Password"
                                                type="password"
                                                autoComplete="current-password"
                                                variant="outlined"
                                                labelWidth={60}
                                                value={password}
                                                onChange={handleChange}
                                                required
                                                className={'form-control' + (submitted && !password ? ' is-invalid' : '')}
                                            />
                                            {submitted && !password &&
                                                <div className="error">Password is required</div>
                                            }
                                        </FormControl>
                                    </GridItem>
                                </GridContainer>
                                <br />
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <Button variant="contained" color="secondary">
                                            Cancel
                                        </Button>
                                        &nbsp;&nbsp;
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                        //   onClick={this.loginUser.bind(this)}
                                        >
                                            Login
                                        </Button>
                                        {/* <button className="btn btn-primary">
                    {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Login
                </button> */}
                                    </GridItem>
                                </GridContainer>
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            </form>
        </div>
        //   <div className="col-lg-8 offset-lg-2">
        //       <h2>Login</h2>
        //       <form name="form" onSubmit={handleSubmit}>
        //           <div className="form-group">
        //               <label>Username</label>
        //               <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
        //               {submitted && !username &&
        //                   <div className="invalid-feedback">Username is required</div>
        //               }
        //           </div>
        //           <div className="form-group">
        //               <label>Password</label>
        //               <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
        //               {submitted && !password &&
        //                   <div className="invalid-feedback">Password is required</div>
        //               }
        //           </div>
        //           <div className="form-group">
        //               <button className="btn btn-primary">
        //                   {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
        //                   Login
        //               </button>
        //               <Link to="/register" className="btn btn-link">Register</Link>
        //           </div>
        //       </form>
        //   </div>
    );
}
// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: null,
//       data: [],
//       username: null,
//       password: null,
//       user: null
//     };
//     console.log(this.state.data);
//   }

//   handleUsername(val) {
//     this.setState({
//       username: val.target.value
//     });
//   }

//   handlePassword(val) {
//     this.setState({
//       password: val.target.value
//     });
//   }
//   loginUser() {
//     if (!this.state.username && this.state.password)
//       alert("Invalid input data");
//     else {
//       const header = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           username: this.state.username,
//           password: this.state.password
//         })
//       };

//       fetch(
//         "https://hyc8sdn98i.execute-api.us-east-1.amazonaws.com/v1/",
//         header
//       )
//         .then(res => res.json())
//         .then(
//           result => {

//             if(result.data.id_token)
//               var decoded = jwt_decode(result.data.id_token);
//               console.log(result.data, { decoded });

//             this.setState({
//               message: result.message || null,
//               data: result.data || [],
//               user: decoded ? decoded.name : null
//             });



//             if (decoded)
//               this.props.history.push({
//                 pathname: "/admin",
//                 state: { user: decoded.name }
//               });
//             // else alert("invalid login");
//           },
//           error => {
//             console.log({ error });
//             this.setState({
//               message: false,
//               data: []
//             });
//           }
//         );
//     }
//   }

//   render() {
//     const { message, data } = this.state;
//     return (
//       <div>
//       <GridContainer 
//         direction="row"
//         justify="center"
//         alignItems="stretch"
//         spacing={3}
//       >
//         <GridItem xs={12} sm={12} md={4}>
//           <Card>
//             <CardHeader color="primary">
//               <h4 className>Login</h4>
//             </CardHeader>
//             <CardBody>
//               <GridContainer>
//                 <GridItem xs={12} sm={12} md={12}>
//                     <Alert severity="info">{message}</Alert>
//                     <br />
//                     <FormControl fullWidth variant="outlined">
//                     <TextField
//                       id="username"
//                       label="Username"
//                       type="email"
//                       autoComplete=""
//                       variant="outlined"
//                       onChange={this.handleUsername.bind(this)}
//                     />
//                     </FormControl>
//                 </GridItem>
//               </GridContainer>
//               <br />
//               <GridContainer>
//                 <GridItem xs={12} sm={12} md={12}>
//                 <FormControl fullWidth variant="outlined">
//                   <TextField
//                     id="outlined-password-input"
//                     label="Password"
//                     type="password"
//                     autoComplete="current-password"
//                     variant="outlined"
//                     labelWidth={60}
//                     onChange={this.handlePassword.bind(this)}
//                   />
//                   </FormControl>
//                 </GridItem>
//               </GridContainer>
//               <br />
//               <GridContainer>
//                 <GridItem xs={12} sm={12} md={12}>
//                   <Button variant="contained" color="secondary">
//                     Cancel
//                   </Button>
//                   &nbsp;&nbsp;
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={this.loginUser.bind(this)}
//                   >
//                     Login
//                   </Button>
//                 </GridItem>
//               </GridContainer>
//             </CardBody>
//           </Card>
//         </GridItem>
//       </GridContainer>
//       </div>
//     );
//   }
// }

export default LoginPage;