import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Formsy from 'formsy-react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
    FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';


class AddUsecase extends Component {

  constructor(props) {
    super(props)
    this.state = {
      canSubmit: false,
    };

    this.styles = {
      switchStyle: {
        marginBottom: 16,
      },
      submitStyle: {
        marginTop: 32,
      },
      inputStyle: {
        width: "80%"
      }
    };

    this.errorMessages = {
      wordsError: "Please only use letters",
      numericError: "Please provide a number",
      urlError: "Please provide a valid URL",
    };

    // bind this to our methods
    this.enableButton = this.enableButton.bind(this)
    this.disableButton = this.disableButton.bind(this)
    this.notifyFormError = this.notifyFormError.bind(this)

  }

  render(){
    let {switchStyle, submitStyle, inputStyle } = this.styles;
    let { wordsError, numericError, urlError } = this.errorMessages;
    let {onAddUsecase} = this.props

    return (
      <Card>
        <CardHeader
          title="Add new Usecase"
        />
        <CardText>
          <Formsy.Form
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            onValidSubmit={onAddUsecase}
            onInvalidSubmit={this.notifyFormError}
          >
            <FormsyText
              name="title"
              validations="isExisty"
              validationError={wordsError}
              required
              style={inputStyle}
              hintText="Usecase title"
              floatingLabelText="Title of the Usecase"
            /><br />
            <FormsyText
              name="body"
              multiLine={true}
              style={inputStyle}
              rows={2}
              rowsMax={4}
              validations="isExisty"
              validationError={wordsError}
              required
              hintText="Usecase description"
              floatingLabelText="Description"
            /><br />
            <RaisedButton
              style={submitStyle}
              type="submit"
              label="Save"
              disabled={!this.state.canSubmit}
            />
          </Formsy.Form>
        </CardText>
      </Card>
    )
  }

  enableButton() {
    this.setState({
      canSubmit: true,
    });
  }

  disableButton() {
    this.setState({
      canSubmit: false,
    });
  }

  notifyFormError(data) {
    console.error('Form error:', data);
  }
}


export default AddUsecase
