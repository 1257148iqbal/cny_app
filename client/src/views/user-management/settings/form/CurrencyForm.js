import '@custom-styles/merchandising/others/custom-table.scss';
import classnames from 'classnames';
import React, { useEffect } from 'react';
import { CheckSquare, Edit3, MinusSquare, PlusSquare } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import CreatableSelect from 'react-select/creatable';
import { Button, Card, CardBody, Col, CustomInput, Input, Label, NavItem, NavLink, Row, Table } from 'reactstrap';
import ActionMenu from '../../../../layouts/components/menu/action-menu';
import { randomIdGenerator, selectThemeColors } from '../../../../utility/Utils';
import { addCurrency, bindCurrencies, getCurrencies, getCurrencyCodeDropdown, updateCurrency } from '../store/actions';

const breadcrumb = [
    {
        id: 'home',
        name: 'Home',
        link: '/',
        isActive: false
    },
    {
        id: 'currencies',
        name: 'Currency',
        link: '#',
        isActive: true
    }
];

const selectCurrencyCode = [
    {
        label: 'BDT',
        value: 1,
        currencySign: '৳',
        name: 'Bangladesh Taka'
    },
    {
        label: 'USD',
        value: 2,
        currencySign: '$',
        name: 'American Dollar'
    }
];
const CurrencyForm = () => {
    const dispatch = useDispatch();
    const { currencies, currencyCodeDropdown } = useSelector( ( { settings } ) => settings );
    console.log( JSON.stringify( currencies, null, 2 ) );
    useEffect( () => {
        dispatch( getCurrencies() );
        // dispatch( bindCurrencies( [
        //     {
        //         id: '5544',
        //         fieldId: randomIdGenerator(),
        //         currency: { label: 'BDT', value: 1 },
        //         codeName: 'BDT',
        //         name: 'Bangladesh Taka',
        //         currencySign: '৳',
        //         conversionRate: 0,
        //         isEdit: false,
        //         isBaseCurrency: false
        //     }
        // ] ) );
        dispatch( getCurrencyCodeDropdown() );
    }, [] );

    // {
    //     {
    //         "name": "string",
    //             "codeName": "string",
    //                 "currencycurrencySign": "string",
    //                     "conversionRate": 0,
    //                         "isBaseCurrency": true
    //     }
    // }

    const handleCurrencyOnChange = ( fieldId, e ) => {
        const { name, value, checked, type } = e.target;
        const updatedData = currencies.map( currency => {
            if ( fieldId === currency.fieldId ) {
                currency[name] = type === 'number' ? Number( value ) : type === 'checkbox' ? checked : value;
            } else {
                if ( type === 'checkbox' ) {
                    currency[name] = false;
                }
            }
            return currency;
        } );
        dispatch( bindCurrencies( updatedData ) );
    };


    const handleCurrencyDropdownChange = ( data, e, fieldId ) => {
        const { action, name, option } = e;
        const updatedData = currencies.map( currency => {
            if ( fieldId === currency.fieldId ) {
                currency[name] = data;
                currency['codeName'] = data?.code ?? '';
                currency['currencySign'] = data?.symbol_native ?? '';
                currency['name'] = data?.name ?? '';
            }
            return currency;
        } );
        dispatch( bindCurrencies( updatedData ) );
    };

    const handleEditControl = ( fieldId, currencyFormValue ) => {
        if ( currencyFormValue.isEdit ) {
            if ( currencyFormValue.id.length ) {
                console.log( 'Edit' );
                const submitObj = {
                    name: currencyFormValue.name,
                    codeName: currencyFormValue.codeName,
                    currencySign: currencyFormValue.currencySign,
                    conversionRate: currencyFormValue.conversionRate,
                    isBaseCurrency: currencyFormValue.isBaseCurrency
                };
                dispatch( updateCurrency( submitObj, currencyFormValue.id ) );
            } else {
                const submitObj = {
                    name: currencyFormValue.name,
                    codeName: currencyFormValue.codeName,
                    currencySign: currencyFormValue.currencySign,
                    conversionRate: currencyFormValue.conversionRate,
                    isBaseCurrency: currencyFormValue.isBaseCurrency
                };
                dispatch( addCurrency( submitObj ) );
            }
        } else {
            const updatedData = currencies.map( currency => {
                if ( fieldId === currency.fieldId ) {
                    currency['isEdit'] = !currency.isEdit;
                }
                return currency;
            } );
            dispatch( bindCurrencies( updatedData ) );
        }

    };

    const handleRemoveCurrency = ( fieldId ) => {
        console.log( fieldId );
        const updatedData = currencies.filter( currency => currency.fieldId !== fieldId );
        dispatch( bindCurrencies( updatedData ) );
    };

    const handleAddRowToCurrency = () => {
        const newObj = {
            id: '',
            fieldId: randomIdGenerator(),
            currency: null,
            codeName: '',
            name: '',
            currencySign: '',
            conversionRate: 0,
            isEdit: true,
            isBaseCurrency: false

        };
        dispatch( bindCurrencies( [...currencies, newObj] ) );
    };


    return <div>
        <ActionMenu breadcrumb={breadcrumb} title='Currency' >
            <NavItem className="mr-1" >
                <NavLink
                    tag={Button}
                    size="sm"
                    color="primary"
                // onClick={() => { handleSubmit(); }}
                >Save</NavLink>
            </NavItem>
            <NavItem className="mr-1" >
                <NavLink
                    tag={Button}
                    size="sm"
                    color="secondary"
                // onClick={() => { handleCancel(); }}
                >
                    Cancel
                </NavLink>
            </NavItem>
        </ActionMenu>
        <Card className="mt-3">
            <CardBody>
                <Row>
                    <Col>
                        <div className='divider divider-left '>
                            <div className='divider-text text-secondary font-weight-bolder'>Currency</div>
                        </div>
                        <div className="border rounded rounded-3 p-1 custom-table">
                            <Row>
                                <Col>
                                    <Table responsive bordered >
                                        <thead className="text-center">
                                            <tr>
                                                <th>Name</th>
                                                <th>Code</th>
                                                <th>Sign</th>
                                                <th>Conversion Rate</th>
                                                <th>Is Base Currency?</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            {
                                                currencies?.map( currency => (
                                                    <tr key={currency.fieldId} >
                                                        <td>
                                                            <div style={{ minWidth: '180px' }}>
                                                                <CreatableSelect
                                                                    id={currency.id}
                                                                    name="currency"
                                                                    isSearchable
                                                                    menuPosition="fixed"
                                                                    isClearable
                                                                    isDisabled={!currency.isEdit}
                                                                    theme={selectThemeColors}
                                                                    options={currencyCodeDropdown}
                                                                    classNamePrefix='select'
                                                                    // innerRef={register( { required: true } )}
                                                                    className={classnames( 'react-select' )}
                                                                    value={currency?.currency}
                                                                    onChange={( data, e ) => {
                                                                        handleCurrencyDropdownChange( data, e, currency.fieldId );
                                                                    }}
                                                                />
                                                            </div>

                                                        </td>
                                                        <td>
                                                            <Input
                                                                type="text"
                                                                name="codeName"
                                                                value={currency.codeName}
                                                                //   bsSize="sm"
                                                                disabled
                                                                onChange={( e ) => { handleCurrencyOnChange( currency.fieldId, e ); }}
                                                            />
                                                        </td>
                                                        <td>
                                                            <Input
                                                                type="text"
                                                                name="currencySign"
                                                                value={currency.currencySign}
                                                                //  bsSize="sm"
                                                                disabled
                                                                onChange={( e ) => { handleCurrencyOnChange( currency.fieldId, e ); }}
                                                            />
                                                        </td>
                                                        <td>
                                                            <Input
                                                                type="number"
                                                                className="text-right"
                                                                name="conversionRate"
                                                                value={currency.conversionRate}
                                                                //  bsSize="sm"
                                                                disabled={!currency.isEdit}
                                                                onChange={( e ) => { handleCurrencyOnChange( currency.fieldId, e ); }}
                                                                onFocus={( e ) => e.target.select()}
                                                            />
                                                        </td>
                                                        <td>
                                                            <span className="d-flex justify-content-center">
                                                                <CustomInput
                                                                    id={`baseUnit-${currency.fieldId}`}
                                                                    disabled={!currency.isEdit}
                                                                    name='isBaseCurrency'
                                                                    type='checkbox'
                                                                    checked={currency.isBaseCurrency}
                                                                    onChange={( e ) => { handleCurrencyOnChange( currency.fieldId, e ); }}
                                                                />
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className="d-flex justify-content-center">
                                                                <Button.Ripple
                                                                    id="editRow"
                                                                    tag={Label}
                                                                    onClick={() => { handleEditControl( currency.fieldId, currency ); }}
                                                                    className='btn-icon p-0'
                                                                    color='flat-success'
                                                                >
                                                                    {
                                                                        currency.isEdit ? <CheckSquare size={16} id="editRow" color="#6610f2" /> : <Edit3 size={16} id="editRow" color="green" />

                                                                    }

                                                                </Button.Ripple>
                                                                <Button.Ripple
                                                                    hidden={!!currency.id.length}
                                                                    id="editRow"
                                                                    tag={Label}
                                                                    onClick={() => { handleRemoveCurrency( currency.fieldId ); }}
                                                                    className='btn-icon p-0 ml-1'
                                                                    color='flat-success'
                                                                >
                                                                    <MinusSquare size={16} id="editRow" color="red" />
                                                                </Button.Ripple>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ) )
                                            }

                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                            <Row >
                                <Col className="d-flex " xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Button.Ripple
                                        id="AddSegRowId"
                                        tag={Label}
                                        onClick={() => { handleAddRowToCurrency(); }}
                                        className='btn-icon'
                                        color='flat-success'
                                    >
                                        <PlusSquare size={18} id="AddSegRowId" color="green" />

                                    </Button.Ripple>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    </div >;
};

export default CurrencyForm;
