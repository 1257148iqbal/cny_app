import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import contactsApp from "./contactsApp"

const exportReducers = history => {
    return combineReducers({
        router: connectRouter(history),
        contactsApp: contactsApp
    });
};

export default exportReducers;

