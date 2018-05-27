import { REQUEST_FETCH_CONTACTS, FETCH_CONTACTS_SUCCESS, FETCH_CONTACTS_ERROR,
        SUBMIT_CONTACT_SUCCESS, SUBMIT_CONTACT_ERROR } from '../actions/types';

const initialState = {
    contacts: [],
    isLoading: false,
    error: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case REQUEST_FETCH_CONTACTS:
            return {
                ...state,
                isLoading: true
            }

        case FETCH_CONTACTS_SUCCESS:
            return {
                ...state,
                contacts: action.payload,
                isLoading: false
            }

        case FETCH_CONTACTS_ERROR:
            return {
                ...state,
                error: action.error,
                contacts: [],
                isLoading: false
            }
        case SUBMIT_CONTACT_SUCCESS:
            return {
                ...state,
                contacts: state.contacts.concat(action.payload)
            }
        case SUBMIT_CONTACT_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}