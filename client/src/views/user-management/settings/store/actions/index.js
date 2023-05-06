import { notify } from '@custom/notifications';
import { baseAxios } from '../../../../../services';
import { merchandisingApi } from '../../../../../services/api-end-points/merchandising';
import { status } from '../../../../../utility/enums';
import { randomIdGenerator } from '../../../../../utility/Utils';
import { ADD_CURRENCY, GET_CURRENCIES, GET_CURRENCY_CODE_DROPDOWN } from '../action-types';


export const getCurrencies = () => async dispatch => {
    const apiEndPoint = `${merchandisingApi.currencyConfigurations.root}`;
    await baseAxios.get( apiEndPoint ).then( response => {
        console.log( response );
        // codeName: "AED"
        // conversionRate: 5
        // currencySign: "د.إ.‏"
        // id: "5f15bfb9-81fa-4d12-bf9a-86260ec7874a"
        // isBaseCurrency: false
        // name: "United Arab Emirates Dirham"
        const currencies = response.data.data?.map( c => ( {
            id: c.id,
            fieldId: randomIdGenerator(),
            currency: { label: `${c.name}${( c.codeName )}`, value: `${c.name}${( c.codeName )}` },
            codeName: c.codeName,
            conversionRate: c.conversionRate,
            currencySign: c.currencySign,
            isBaseCurrency: c.isBaseCurrency,
            isEdit: false,
            name: c.name
        } ) );
        dispatch( {
            type: GET_CURRENCIES,
            currencies
        } );
    } );
};
export const getCurrencyCodeDropdown = () => async dispatch => {
    const apiEndPoint = `${merchandisingApi.currencyConfigurations.root}/currencyList`;
    await baseAxios.get( apiEndPoint ).then( response => {
        //    const currencyCodeDropdown = Object.keys( response.data ).map( item => ( { label: item } ) );
        const currencyCodeArray = Object.values( Object.assign( [], response.data ) );
        const currencyCodeDropdown = currencyCodeArray.map( c => (
            {
                value: `${c.name}${( c.code )}`,
                label: `${c.name}(${c.code})`,
                code: c.code,
                decimal_digits: c.decimal_digits,
                name: c.name,
                name_plural: c.name_plural,
                rounding: c.rounding,
                symbol: c.symbol,
                symbol_native: c.symbol_native
            }
        ) );
        dispatch( {
            type: GET_CURRENCY_CODE_DROPDOWN,
            currencyCodeDropdown
        } );
    } );
};

export const bindCurrencies = ( currencies ) => async dispatch => {
    dispatch( {
        type: GET_CURRENCIES,
        currencies
    } );
};

export const addCurrency = ( currency ) => async dispatch => {
    const apiEndPoint = `${merchandisingApi.currencyConfigurations.root}`;
    await baseAxios.post( apiEndPoint, currency ).then( response => {
        if ( response.status === status.success ) {
            dispatch( {
                type: ADD_CURRENCY,
                currency
            } );
            notify( 'success', 'The Currency has been added Successfully!' );
            dispatch( getCurrencies() );
        } else {
            notify( 'success', 'The Currency has been added failed!' );
        }
    } ).catch( ( { response } ) => {
        if ( response.status === status.severError ) {
            notify( 'error', `Please contact the support team!!!` );
        } else {
            notify( 'error', `${response.data.errors.join( ', ' )}` );
        }
    } );
};
export const updateCurrency = ( currency, currencyId ) => async dispatch => {
    const apiEndPoint = `${merchandisingApi.currencyConfigurations.root}/${currencyId}`;
    await baseAxios.put( apiEndPoint, currency ).then( response => {
        if ( response.status === status.success ) {
            dispatch( {
                type: ADD_CURRENCY,
                currency
            } );
            notify( 'success', 'The Currency has been updated Successfully!' );
            dispatch( getCurrencies() );
        } else {
            notify( 'error', 'The Currency update has been failed!' );
        }
    } ).catch( ( { response } ) => {
        if ( response.status === status.severError ) {
            notify( 'error', `Please contact the support team!!!` );
        } else {
            notify( 'error', `${response.data.errors.join( ', ' )}` );
        }
    } );
};