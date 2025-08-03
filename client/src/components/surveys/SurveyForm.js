// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formField';

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div className="survey-form-container">
        <div className="form-header">
          <h2 className="form-title">
            <span className="icon icon-create icon-left"></span>
            Create New Survey
          </h2>
          <p className="form-subtitle">
            Fill out the form below to create your survey
          </p>
        </div>

        <div className="form-card">
          <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)} className="survey-form">
            {this.renderFields()}
            
            <div className="form-actions">
              <Link to="/surveys" className="btn-secondary">
                <span className="icon icon-cancel icon-left"></span>
                Cancel
              </Link>
              <button type="submit" className="btn-primary">
                <span className="icon icon-arrow-forward icon-right"></span>
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);