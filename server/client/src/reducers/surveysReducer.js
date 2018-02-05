import { FETCH_SURVEYS, DELETE_SURVEY_SUCCESS } from '../actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_SURVEYS:
            return action.payload;
        case DELETE_SURVEY_SUCCESS: {
            console.log(state);
            const newState = [...state];
            const indexToDelete = state.findIndex(survey => {
                return survey._id === action.surveyId;
            })
            newState.splice(indexToDelete, 1);
            return newState;

        }
            
        default:
            return state;
    }
}