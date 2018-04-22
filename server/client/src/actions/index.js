import axios from 'axios';
import { FETCH_USER, REQUEST_FETCH_SURVEYS, FETCH_SURVEYS_ERROR, FETCH_SURVEYS_SUCCESS, DELETE_SURVEY_SUCCESS } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/currentUser')
    dispatch({ type: FETCH_USER, payload: res.data});
};

export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data })
};

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data });
}

export const fetchSurveys = () => async dispatch => {
    dispatch({ type: REQUEST_FETCH_SURVEYS });
    const res = await axios.get('/api/surveys');
    try {
        dispatch({ type: FETCH_SURVEYS_SUCCESS, payload: res.data });
    }
    catch(err) {
        dispatch({ type: FETCH_SURVEYS_ERROR, error: res.err })
    }
}

export const deleteSurveySuccess = surveyId => {
    return { type: DELETE_SURVEY_SUCCESS, surveyId }
}

export const deleteSurvey = (surveyId) => async dispatch => {
    await axios.delete(`/api/surveys/${surveyId}`, {});
    dispatch(deleteSurveySuccess(surveyId));
}