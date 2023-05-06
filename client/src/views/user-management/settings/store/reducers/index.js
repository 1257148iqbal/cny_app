import { ADD_CURRENCY, GET_CURRENCIES, GET_CURRENCY_CODE_DROPDOWN } from '../action-types';

const initialState = {
    currencies: [],
    currencyCodeDropdown: []
};

const settingsReduces = ( state = initialState, action ) => {
    switch ( action.type ) {
        case GET_CURRENCIES:
            return { ...state, currencies: action.currencies };
        case GET_CURRENCY_CODE_DROPDOWN:
            return { ...state, currencyCodeDropdown: action.currencyCodeDropdown };
        case ADD_CURRENCY:
            return { ...state };
        default:
            return state;
    }
};

export default settingsReduces;