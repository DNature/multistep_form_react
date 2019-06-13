import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";


export class FormPersonalDetails extends Component {

    // Continue button function
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    // Back button funtion
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        const { values, handleChange } = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Details" />
                    <TextField
                        floatingLabelText="Occupation"
                        hintText="Enter Your Occupation"
                        onChange={handleChange("occupation")}
                        defaultValue={values.occupation}
                    />
                    <br />
                    <TextField
                        floatingLabelText="City"
                        hintText="Enter Your City"
                        onChange={handleChange("city")}
                        defaultValue={values.city}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Bio"
                        hintText="Enter Enter Your Bio"
                        onChange={handleChange("bio")}
                        defaultValue={values.bio}
                    />
                    <br />
                    <RaisedButton
                        label="back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    <RaisedButton
                        label="continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
const styles = {
    button: {
        margin: 20
    }
}

export default FormPersonalDetails
