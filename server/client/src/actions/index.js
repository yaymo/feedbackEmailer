import axios from 'axios';
import { FETCH_USER, REQUEST_FETCH_SURVEYS, FETCH_SURVEYS_SUCCESS, FETCH_SURVEYS_ERROR,
    REQUEST_DELETE_SURVEY, DELETE_SURVEY_SUCCESS, DELETE_SURVEY_ERROR,
    REQUEST_SUBMIT_SURVEY, SUBMIT_SURVEY_SUCCESS, SUBMIT_SURVEY_ERROR,
    UPDATE_SURVEY_SUCCESS, UPDATE_SURVEY_ERROR, FILTER_SURVEYS,
    REQUEST_FETCH_CONTACTS, FETCH_CONTACTS_SUCCESS, FETCH_CONTACTS_ERROR,
    SUBMIT_CONTACT_SUCCESS, SUBMIT_CONTACT_ERROR } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/currentUser')
    dispatch({ type: FETCH_USER, payload: res.data});
};

export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data })
};

export const submitSurvey = (values, history) => async dispatch => {
    dispatch({ type: REQUEST_SUBMIT_SURVEY });
    const res = await axios.post('/api/surveys', values);
    try {
        dispatch({ type: SUBMIT_SURVEY_SUCCESS, payload: res.data });
        dispatch(this.fetchUser());
    }
    catch(err) {
        dispatch({ type: SUBMIT_SURVEY_ERROR, error: err });
    }

    history.push('/surveys');
}

export const fetchSurveys = () => async dispatch => {
    dispatch({ type: REQUEST_FETCH_SURVEYS });
    const res = await axios.get('/api/surveys');
    try {
        dispatch({ type: FETCH_SURVEYS_SUCCESS, payload: res.data });
    }
    catch(err) {
        dispatch({ type: FETCH_SURVEYS_ERROR, error: err })
    }
}

export const updateSurvey = (surveyId, values) => async dispatch => {
    const res = await axios.put(`/api/surveys/:${surveyId}`, values);
    try {
        dispatch({ type: UPDATE_SURVEY_SUCCESS, payload: res.data })
    }
    catch(err) {
        dispatch({ type: UPDATE_SURVEY_ERROR, error: err });
    }
}

export const deleteSurveySuccess = surveyId => {
    return { type: DELETE_SURVEY_SUCCESS, surveyId }
}

export const deleteSurvey = (surveyId) => async dispatch => {
    dispatch({ type: REQUEST_DELETE_SURVEY });
    await axios.delete(`/api/surveys/${surveyId}`, {});
    try {
        dispatch(deleteSurveySuccess(surveyId));
    }
    catch(err) {
        dispatch({ type: DELETE_SURVEY_ERROR, error: err });
    }
}

export const filterSurveys = text => dispatch => {
    dispatch({ type: FILTER_SURVEYS, text });
}

export const fetchContacts = () => async dispatch => {
    dispatch({ type: REQUEST_FETCH_CONTACTS });
    const res = await axios.get('/api/contacts');
    try {
        dispatch({ type: FETCH_CONTACTS_SUCCESS, payload: res.data });
    }
    catch(err) {
        dispatch({ type: FETCH_CONTACTS_ERROR, error: err });
    }
}

export const submitContact = values => async dispatch => {
    const res = await axios.post('/api/contacts', values);
    try {
        dispatch({ type: SUBMIT_CONTACT_SUCCESS, payload: res.data });
    }
    catch(err) {
        dispatch({ type: SUBMIT_CONTACT_ERROR, error: err });
    }
}