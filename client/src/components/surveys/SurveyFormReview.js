// SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formField';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name} className="review-field">
        <label className="field-label">{label}</label>
        <div className="field-value">
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div className="survey-form-container">
      <div className="form-header">
        <h2 className="form-title">
          <span className="icon icon-preview icon-left"></span>
          Review Your Survey
        </h2>
        <p className="form-subtitle">
          Please confirm your entries before sending
        </p>
      </div>

      <div className="form-card">
        <div className="survey-form">
          <div className="review-fields">
            {reviewFields}
          </div>
          
          <div className="form-actions">
            <button
              className="btn-secondary"
              onClick={onCancel}
            >
              <span className="icon icon-arrow-back icon-left"></span>
              Back
            </button>
            <button
              onClick={() => submitSurvey(formValues, history)}
              className="btn-primary"
            >
              <span className="icon icon-send icon-right"></span>
              Send Survey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));