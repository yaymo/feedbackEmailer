import { REQUEST_FETCH_SURVEYS, FETCH_SURVEYS_ERROR, FETCH_SURVEYS_SUCCESS, 
    REQUEST_DELETE_SURVEY, DELETE_SURVEY_SUCCESS, DELETE_SURVEY_ERROR } from '../actions/types';

const initialState = {
    surveys: [],
    isLoading: false,
    error: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case REQUEST_FETCH_SURVEYS: 
            return {
                ...state,
                isLoading: true,
            }

        case FETCH_SURVEYS_SUCCESS:
            return {
                ...state,
                surveys: action.payload,
                isLoading: false
            }

        case FETCH_SURVEYS_ERROR:
        return {
            ...state,
            isLoading: false,
            error: action.error,
            surveys: []
        }

        case REQUEST_DELETE_SURVEY:
            return {
                ...state,
                isLoading: true
            }

        case DELETE_SURVEY_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                surveys: state.surveys.filter(survey => {
                    return survey._id !== action.surveyId
                })
            }

        case DELETE_SURVEY_ERROR:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }
            
        default:
            return state;
    }
}