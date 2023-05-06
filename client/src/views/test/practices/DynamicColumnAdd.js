/* eslint-disable no-unused-expressions */

import React, { Fragment, useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import { Col, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import { selectColor, selectSize } from '../../../utility/enums';
import { randomIdGenerator, selectThemeColors } from '../../../utility/Utils';

const DynamicColumnAdd = () => {
    const [color, setColor] = useState( [] );
    const [size, setSize] = useState( [] );
    const [style, setStyle] = useState( [] );
    const [sizeColorDetails, setSizeColorDetails] = useState( [] );
    const getSizeColorFieldId = sizeColorDetails.map( i => i.fieldId );


    const handleColorDropDownChange = ( data ) => {
        //Color Dropdown Data on color State
        setColor( data );

        ///New Color Data Checking
        const comparerForAdd = ( otherArray ) => {
            return function ( current ) {
                return otherArray.filter( function ( other ) {
                    return other.colorName === current.label;
                } ).length === 0;
            };
        };
        ///Delete Color Data Checking
        const comparerForDelete = ( otherArray ) => {
            return function ( current ) {
                return otherArray.filter( function ( other ) {
                    return other.label === current.colorName;
                } ).length === 0;
            };
        };

        //New Color Object
        const findLastSelectedColor = data.find( comparerForAdd( sizeColorDetails ) );
        //Delete Color Object
        const findLastDeletedColor = sizeColorDetails.find( comparerForDelete( data ) );

        //New Color Data Entry
        if ( findLastSelectedColor !== undefined ) {
            const lastObjModified = {
                fieldId: randomIdGenerator(),
                colorName: findLastSelectedColor.label,
                size: sizeColorDetails?.some( c => c.size ) ? ( sizeColorDetails?.map( ( cs => cs.size.map( s => ( {
                    sizeId: randomIdGenerator(),
                    sizeName: s.sizeName,
                    inputValue: 0
                } ) ) )
                ) )[0] : []
            };
            sizeColorDetails.push( lastObjModified );
        }
        //Remove Color Data 
        if ( findLastDeletedColor !== undefined ) {
            if ( data.length === 0 ) {
                const lastUpdated = [...sizeColorDetails];
                lastUpdated.splice(
                    lastUpdated.findIndex(
                        x => x.colorName === findLastDeletedColor.colorName
                    )
                );
                setSizeColorDetails( lastUpdated );
                setSize( [] );
            } else {
                const lastUpdated = [...sizeColorDetails];
                lastUpdated.splice(
                    lastUpdated.findIndex(
                        x => x.colorName === findLastDeletedColor.colorName
                    ), 1
                );
                setSizeColorDetails( lastUpdated );
            }
        }
    };

    ///While Size Dropdown
    const handleSizeDropDownChange = ( data ) => {
        setSize( data );
        //For Entry and  Delete Size Checking
        const getAllModifiedSize = ( sizeColorDetails?.map( c => ( {
            size: c.size
        } ) ) );
        const getOldSizeArray = getAllModifiedSize[0].size;

        //Find New Size Entry 
        const comparerForAdd = ( otherArray ) => {
            return function ( current ) {
                return otherArray.filter( function ( other ) {
                    return other.sizeName === current.label;
                } ).length === 0;
            };
        };
        //Find Deleted Size Entry 
        const comparerForDelete = ( otherArray ) => {
            return function ( current ) {
                return otherArray.filter( function ( other ) {
                    return other.label === current.sizeName;
                } ).length === 0;
            };
        };
        const findLastSelectedSize = data.find( comparerForAdd( getOldSizeArray ) );
        const findLastDeletedSize = getOldSizeArray.find( comparerForDelete( data ) );

        /// New Entry Push 
        if ( findLastSelectedSize !== undefined ) {
            const updateInputValue = sizeColorDetails?.map( ii => {
                if ( getSizeColorFieldId.some( i => ii.fieldId === i ) ) {
                    ii.fieldId;
                    ii.colorName;
                    ii.size.push( {
                        sizeId: randomIdGenerator(),
                        sizeName: findLastSelectedSize.label,
                        inputValue: 0
                    } );
                }
                return ii;
            } );
            setSizeColorDetails( updateInputValue );
        }

        /// After Deleted
        if ( findLastDeletedSize !== undefined ) {
            if ( data.length === 0 ) {
                const updateInputValue = sizeColorDetails?.map( ii => {
                    if ( getSizeColorFieldId.some( i => ii.fieldId === i ) ) {
                        ii?.size.splice(
                            ii.size.findIndex(
                                s => s.sizeName === findLastDeletedSize.sizeName
                            )
                        );
                    }
                    return ii;
                } );
                setSizeColorDetails( updateInputValue );
            } else {
                const updateInputValue = sizeColorDetails?.map( ii => {
                    if ( getSizeColorFieldId.some( i => ii.fieldId === i ) ) {
                        ii?.size.splice(
                            ii.size.findIndex(
                                s => s.sizeName === findLastDeletedSize.sizeName
                            ), 1
                        );
                    }
                    return ii;
                } );
                setSizeColorDetails( updateInputValue );
            }

        }
    };


    ///Input Value Onchange
    const handleSizeInputValueOnChange = ( e, fieldId, sizeId ) => {
        const updateInputValue = sizeColorDetails?.map( i => {
            if ( fieldId === i.fieldId ) {
                i?.size.map( is => {
                    if ( ( ( sizeId === is.sizeId ) ) ) {
                        is.inputValue = e.target.value;
                    }
                    return is;
                } );
            }
            return i;
        } );

        setSizeColorDetails( updateInputValue );
    };

    // showJsonHtml( 'TableId', sizeColorDetails );
    // console.log( JSON.stringify( sizeColorDetails, null, 2 ) );

    return (
        <div>
            <Row>
                <FormGroup tag={Col} xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Label className="text-dark font-weight-bold" for='colorId'>Color</Label>
                    <CreatableSelect
                        id='colorId'
                        name="color"
                        isMulti
                        isSearchable
                        menuPosition={'fixed'}
                        isClearable
                        theme={selectThemeColors}
                        options={selectColor}
                        value={color}
                        classNamePrefix='select'
                        onChange={data => { handleColorDropDownChange( data ); }}
                    />
                </FormGroup>
                <FormGroup tag={Col} xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Label className="text-dark font-weight-bold" for='sizeId'>Sizes</Label>
                    <CreatableSelect
                        id='sizeId'
                        name="size"
                        isMulti
                        isSearchable
                        isDisabled={color.length === 0}
                        menuPosition={'fixed'}
                        isClearable
                        theme={selectThemeColors}
                        options={selectSize}
                        classNamePrefix='select'
                        // innerRef={register( { required: true } )}
                        value={size}
                        onChange={data => { handleSizeDropDownChange( data ); }}
                    />
                </FormGroup>
                <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12}>
                    <pre id="TableId"> </pre>
                </FormGroup>
            </Row>
            <Row>
                {
                    ( size?.length > 0 ) &&
                    <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Label className="text-dark font-weight-bold" for='totalPackSizeId'>Details</Label>
                        <div className="packing-scc-table">
                            <Table size="sm" bordered >
                                <thead className='thead-dark  text-center'>
                                    <tr>
                                        <th style={{ width: '15px' }} className="text-nowrap">SL.</th >
                                        <th style={{ width: '95px' }} className="text-nowrap">Color</th>
                                        {
                                            sizeColorDetails?.map( i => (
                                                i?.size?.map( is => (
                                                    <Fragment key={is.sizeName}>
                                                        <th>{is.sizeName}</th>
                                                    </Fragment>
                                                ) )
                                            ) )[0]
                                        }
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {
                                        sizeColorDetails?.map( ( i, idx ) => (
                                            <tr key={i.fieldId}>
                                                <td className="text-nowrap">{idx + 1}</td>
                                                <td className="text-nowrap">{i.colorName}</td>
                                                {
                                                    i?.size?.map( ( is ) => (
                                                        <Fragment key={is.sizeName}>
                                                            <td>
                                                                <Input
                                                                    className="text-right"
                                                                    type="number"
                                                                    bsSize="sm"
                                                                    onFocus={e => e.target.select()}
                                                                    value={is.inputValue}
                                                                    onChange={e => {
                                                                        handleSizeInputValueOnChange( e, i.fieldId, is.sizeId );
                                                                    }}
                                                                />
                                                            </td>
                                                        </Fragment>
                                                    ) )
                                                }
                                            </tr>
                                        ) )
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </FormGroup>
                }
            </Row>
        </div>
    );
};

export default DynamicColumnAdd;
