// SurveyField contains logic to render a single
// label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="form-field">
      <label className="field-label">{label}</label>
      <input 
        {...input} 
        className={`field-input ${touched && error ? 'field-input-error' : ''}`}
        placeholder={`Enter ${label.toLowerCase()}`}
      />
      {touched && error && (
        <div className="field-error">
          <span className="icon icon-error error-icon"></span>
          {error}
        </div>
      )}
    </div>
  );
};