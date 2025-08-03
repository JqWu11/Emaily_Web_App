import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm
});
//2hwJpXREsadHRZGRH9105Q4izly_4zQc4f4pHuTxHP6HxZDbr