import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Save } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import CreatableSelect from 'react-select/creatable';
import { Button, Col, CustomInput, FormText, Label, Row } from 'reactstrap';
import { selectThemeColors } from '../../../utility/Utils';
import { getUnitSetsDropdown } from '../../inventory/unit-sets/store/actions';

const defaultUOMDropdown = [
    {
        value: 1, label: 'PCS'
    }
];
const MerchandisingSettings = () => {
    const dispatch = useDispatch();
    const { dropDownUnitSet } = useSelector( ( { unitSets } ) => unitSets );
    const [controls, setControls] = useState( {
        isDefaultBoxOpen: false
    } );

    const [costingSettings, setCostingSettings] = useState( {
        defaultUOM: null
    } );

    useEffect( () => {
        dispatch( getUnitSetsDropdown() );
    }, [] );

    const handleBoxOpen = ( e ) => {
        const { name, checked } = e.target;
        setControls( {
            ...controls,
            [name]: checked
        } );
        console.log( name );
        console.log( checked );
    };

    const handleDefaultOUMDropdown = ( data ) => {
        setCostingSettings( {
            ...costingSettings,
            defaultUOM: data
        } );
    };


    return (
        <div className='settings-main-section'>
            <div className='settings-main-content-heading'>
                <span className='settings-content-header-text'> Merchandising Settings</span>
            </div>
            <Row className="bg-light-secondary ml-1 mr-1 mb-1 font-weight-bolder">
                <Col>
                    <Label > Costing</Label>
                </Col>
            </Row>
            <Row className="ml-1 mr-1">
                <Col className="mb-2">
                    <div style={{ minHeight: '100px' }} className='d-flex'>
                        <div className='mr-1'>
                            <div className='custom-input-box'>
                                < CustomInput
                                    type='checkbox'
                                    label=''
                                    className='custom-control-primary'
                                    id='defaultUomBoxId'
                                    name='isDefaultBoxOpen'
                                    checked={controls?.isDefaultBoxOpen}
                                    onChange={( e ) => handleBoxOpen( e )}
                                />
                            </div>
                        </div>
                        <div className="settings-content-section">
                            <div className="ml-1" >
                                <Label className="font-weight-bolder">
                                    Default UOM
                                </Label>
                                <FormText>
                                    It is a base UOM SET
                                </FormText>
                                {
                                    controls?.isDefaultBoxOpen &&
                                    <div className='d-flex align-items-center mt-1'>
                                        <div className='settings-section-dropdown'>
                                            <CreatableSelect
                                                id='unitsId'
                                                name="unit"
                                                isSearchable
                                                menuPosition={'fixed'}
                                                theme={selectThemeColors}
                                                options={dropDownUnitSet}
                                                classNamePrefix='select'
                                                // innerRef={register( { required: true } )}
                                                // className={classnames( 'po-details-select', { 'is-invalid': i.orderUOM === null } )}
                                                className={classnames( 'section-select-box' )}
                                                // onFocus={() => { handleUOMOnFocus( defaultUnitId ); }}
                                                value={costingSettings.defaultUOM}
                                                onChange={data => {
                                                    handleDefaultOUMDropdown( data );
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <Button.Ripple className='ml-1 btn-icon' color='primary'>
                                                <Save size={16} />
                                            </Button.Ripple>
                                        </div>
                                    </div>


                                }

                            </div>

                        </div>
                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default MerchandisingSettings;
