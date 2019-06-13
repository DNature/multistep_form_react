import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { ListItem, List } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";


export class Confirm extends Component {

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
        const {
            values: { firstName, lastName, email, occupation, city, bio }
        } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm Data Provided" />
                    <List>
                        <ListItem primaryText="First Name" secondaryText={firstName} />
                        <ListItem primaryText="Last Name" secondaryText={lastName} />
                        <ListItem primaryText="Email" secondaryText={email} />
                        <ListItem primaryText="Occupation" secondaryText={occupation} />
                        <ListItem primaryText="City" secondaryText={city} />
                        <ListItem primaryText="Bio" secondaryText={bio} />
                    </List>

                    <br />
                    <RaisedButton
                        label="back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    <RaisedButton
                        label="confirm & continue"
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

export default Confirm
