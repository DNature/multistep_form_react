import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";


export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }


    render() {
        const { values, handleChange } = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details" />
                    <TextField
                        hintText="Enter First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Last Name"
                        hintText="Enter Last Name"
                        onChange={handleChange("lastName")}
                        defaultValue={values.lastName}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Email"
                        hintText="Enter Email Address"
                        onChange={handleChange("email")}
                        defaultValue={values.email}
                    />
                    <br />
                    <RaisedButton
                        label="continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 20
    }
}

export default FormUserDetails
