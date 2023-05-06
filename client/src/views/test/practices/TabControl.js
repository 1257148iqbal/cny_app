
import '@custom-styles/merchandising/others/custom-collapse.scss';
import '@custom-styles/merchandising/others/pre-costing-details-table.scss';
import '@custom-styles/merchandising/select/pre-costing-select.scss';
import classnames from 'classnames';
import React, { useState } from 'react';
import { ArrowLeft, ChevronsDown, MinusSquare, PlusSquare } from 'react-feather';
import CreatableSelect from 'react-select/creatable';
import { Badge, Button, Card, CardHeader, CardTitle, Col, Input, Label, Nav, NavItem, NavLink, Row, TabContent, Table, TabPane } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import { randomIdGenerator, selectThemeColors } from '../../../utility/Utils';

const costingSummery = [
    { id: 1, costingGroupName: 'Fabric', buyerAmount: 0, inHouseAmount: 0 },
    { id: 2, costingGroupName: 'Accessories', buyerAmount: 0, inHouseAmount: 0 },
    { id: 3, costingGroupName: 'CM', buyerAmount: 0, inHouseAmount: 0 },
    { id: 4, costingGroupName: 'Print', buyerAmount: 0, inHouseAmount: 0 },
    { id: 5, costingGroupName: 'Wash', buyerAmount: 0, inHouseAmount: 0 },
    { id: 6, costingGroupName: 'Embroidery', buyerAmount: 0, inHouseAmount: 0 },
    { id: 7, costingGroupName: 'Profit', buyerAmount: 0, inHouseAmount: 0 },
    { id: 8, costingGroupName: 'Commission', buyerAmount: 0, inHouseAmount: 0 },
    { id: 9, costingGroupName: 'Logistics & Transport', buyerAmount: 0, inHouseAmount: 0 },
    { id: 10, costingGroupName: 'Other', buyerAmount: 0, inHouseAmount: 0 },
    { id: 11, costingGroupName: 'Total', buyerAmount: 0, inHouseAmount: 0 }
];

const selectItemGroups = [
    {
        value: 1,
        label: 'Fabric',
        sub: [
            {
                value: 1,
                label: 'Cotton Fabric'
            },
            {
                value: 2,
                label: 'Polyester Fabric'
            }
        ]
    },
    {
        value: 2,
        label: 'Zipper',
        sub: [
            {
                value: 1,
                label: 'Metal Zipper'
            },
            {
                value: 2,
                label: 'Plastic Zipper'
            }
        ]
    }
];
const selectUnits = [
    {
        value: 1,
        label: 'PCS'
    },
    {
        value: 2,
        label: 'DOZEN'
    },
    {
        value: 3,
        label: 'Meter'
    }
];


const TabsVerticalLeft = ( { children, title } ) => {

    //for Table
    const [active, setActive] = useState( '1' );
    // For Collapsible
    const [openCustomizer, setOpenCustomizer] = useState( false );

    ///For Fabric
    const [fabricDetails, setFabricDetails] = useState( [
        {
            fieldId: randomIdGenerator(),
            itemGroup: null,
            itemSubGroup: null,
            itemDescription: '',
            uom: null,
            processLoss: 0,
            consumptionQuantity: 0,
            costPerUnit: 0,
            inHouseConsumption: 0,
            inHouseRatePerUnit: '',
            inHouseCostPerUnit: 0
        }
    ] );

    const [accessoriesDetails, setAccessoriesDetails] = useState( [
        {
            fieldId: randomIdGenerator(),
            itemGroup: null,
            itemSubGroup: null,
            itemDescription: '',
            uom: null,
            processLoss: 0,
            consumptionQuantity: 0,
            costPerUnit: 0,
            inHouseConsumption: 0,
            inHouseRatePerUnit: '',
            inHouseCostPerUnit: 0
        }
    ] );

    const [itemGroup, setItemGroup] = useState( null );
    const [itemSubGroup, setItemSubGroup] = useState( null );
    const [unit, setUnit] = useState( null );
    //Start For Tab and Collapsible
    const toggle = tab => {
        console.log( tab );
        if ( active !== tab ) {
            setActive( tab );
        }
    };
    const handleToggle = e => {
        e.preventDefault();
        setOpenCustomizer( !openCustomizer );
    };
    //End For Tab and Collapsible

    const handleAddFabricRow = () => {
        const newRow = {
            fieldId: randomIdGenerator(),
            itemGroup: null,
            itemSubGroup: null,
            itemDescription: '',
            uom: null,
            processLoss: 0,
            consumptionQuantity: 0,
            costPerUnit: 0,
            inHouseConsumption: 0,
            inHouseRatePerUnit: '',
            inHouseCostPerUnit: 0
        };
        setFabricDetails( [...fabricDetails, newRow] );
    };
    const handleRemoveFabricRow = ( fieldId ) => {
        const updatedData = [...fabricDetails];
        updatedData.splice(
            updatedData.findIndex( x => x.fieldId === fieldId ),
            1
        );
        setFabricDetails( updatedData );
    };
    const handleAddAccessoriesRow = () => {
        const newRow = {
            fieldId: randomIdGenerator(),
            itemGroup: null,
            itemSubGroup: null,
            itemDescription: '',
            uom: null,
            processLoss: 0,
            consumptionQuantity: 0,
            costPerUnit: 0,
            inHouseConsumption: 0,
            inHouseRatePerUnit: '',
            inHouseCostPerUnit: 0
        };
        setAccessoriesDetails( [...accessoriesDetails, newRow] );
    };
    const handleRemoveAccessoriesRow = ( fieldId ) => {
        const updatedData = [...accessoriesDetails];
        updatedData.splice(
            updatedData.findIndex( x => x.fieldId === fieldId ),
            1
        );
        setAccessoriesDetails( updatedData );
    };


    return (
        <>
            <div className='nav-vertical p-0 m-0'>
                <Nav tabs className='nav-left mt-3 p-0'>
                    <NavItem className="d-flex justify-content-end ">
                        <NavLink active={active === '1'} onClick={() => { toggle( '1' ); }} className={active === '1' ? 'disabled' : ''}>
                            <span className={active === '1' ? 'bg-gradient-success text-white  active-btn-color pl-1 pr-1' : ' inactive-btn-color rounded-0 text-white bg-gradient-primary  pl-1 pr-1'}  >
                                Fabric
                            </span>
                        </NavLink>
                    </NavItem>
                    <NavItem className="d-flex justify-content-end">
                        <NavLink active={active === '2'} onClick={() => { toggle( '2' ); }} className={active === '2' ? 'disabled ' : ''} >
                            <span className={active === '2' ? 'bg-gradient-success text-white active-btn-color pl-1 pr-1' : ' inactive-btn-color text-white bg-gradient-primary rounded-0 bg-white  pl-1 pr-1'} >
                                Accessories
                            </span>
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent tag={Row} activeTab={active}>
                    <Col lg={4} className={classnames( 'custom-collapse', {
                        open: openCustomizer
                    } )}>
                        {
                            !openCustomizer && <Badge className='custom-collapse-toggle d-flex align-items-center justify-content-center rotateX' onClick={handleToggle} color='primary'>
                                <ChevronsDown className='align-middle ml-25' size={20} />
                                <span className='align-middle ml-25'>Costing Summary</span>
                            </Badge>
                        }
                        {
                            openCustomizer &&
                            <Card className=" mt-0 p-0">
                                <CardHeader >
                                    <CardTitle tag='h4'>Costing Summary</CardTitle>
                                    <Button.Ripple onClick={handleToggle} className='btn-icon' outline color='primary'>
                                        <ArrowLeft size={16} />
                                    </Button.Ripple>
                                </CardHeader>
                                <CardBody>
                                    <div className="pre-costing-summary-table">
                                        <Table responsive size='sm'>
                                            <thead>
                                                <tr className='bg-light'>
                                                    <th className=' text-nowrap small'><strong>Costing Groups</strong></th>
                                                    <th className=' text-nowrap text-right small'><strong>Buyer Amount</strong></th>
                                                    <th className=' text-nowrap text-right  small'><strong>In House Amount</strong></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {costingSummery.length &&
                                                    costingSummery.map( i => (
                                                        <tr key={i.id}>
                                                            <td className='text-left small'> <strong>{i.costingGroupName}</strong></td>
                                                            <td className='text-right'><Input bsSize="sm" /></td>
                                                            <td className=' text-right'><Input bsSize="sm" /></td>
                                                        </tr>
                                                    ) )
                                                }
                                            </tbody>
                                        </Table>
                                    </div>

                                </CardBody>
                            </Card>
                        }
                    </Col>
                    <Col lg={openCustomizer ? 8 : 12}>
                        <TabPane className='mt-3 ml-2 pr-0 pl-0 bg-white' style={{ overflow: 'hidden', width: "100%", zIndex: -1 }} tabId='1' >
                            <div style={{ padding: '9px', border: '1px #E5E5E5 solid', borderBottom: 'none', borderRadius: '5px 5px 0 0', maxWidth: '150px' }}>
                                <h4 className="text-center" >Fabric</h4>
                            </div>
                            <div className="pre-costing-details-table">
                                <Table responsive size="sm">
                                    <thead className='th-dark ' >
                                        <tr >
                                            <th><strong>Item Group</strong></th>
                                            <th className='text-nowrap '><strong>Item Sub</strong></th>
                                            <th className='text-nowrap '><strong>Item Description</strong></th>
                                            <th className='text-nowrap  '><strong>UOM</strong></th>
                                            <th className='text-nowrap  '><strong>Process Loss(%)</strong></th>
                                            <th className='text-nowrap  '><strong>Cons(Qty.)</strong></th>
                                            <th className='text-nowrap '><strong>Cost Per Unit</strong></th>
                                            <th className='text-nowrap  '><strong>In-House Cons.(Qty.)</strong></th>
                                            <th className='text-nowrap  '><strong>In-House Rate Per Unit</strong></th>
                                            <th className='text-nowrap  '><strong>In-House Cost Per Unit</strong></th>
                                            <th className='text-nowrap '><strong>Action</strong></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            fabricDetails.map( i => (
                                                <tr key={i.fieldId}>
                                                    <td className='text-nowrap ' >
                                                        <CreatableSelect
                                                            id='itemGroupId'
                                                            isClearable={false}
                                                            isSearchable
                                                            theme={selectThemeColors}
                                                            options={selectItemGroups}
                                                            classNamePrefix='select'
                                                            // innerRef={register( { required: true } )}
                                                            className={classnames( 'costing-select ' )}
                                                            value={itemGroup}
                                                            onChange={data => {
                                                                setItemGroup( data );
                                                            }}
                                                        />
                                                    </td>
                                                    <td >
                                                        <CreatableSelect
                                                            id='itemSubGroupId'
                                                            isClearable={false}
                                                            isSearchable
                                                            theme={selectThemeColors}
                                                            options={itemGroup?.sub}
                                                            classNamePrefix='select'
                                                            // innerRef={register( { required: true } )}
                                                            className={classnames( 'costing-select' )}
                                                            value={itemSubGroup}
                                                            onChange={data => {
                                                                setItemSubGroup( data );
                                                            }}
                                                        />
                                                    </td>
                                                    <td ><Input placeholder="Description" bsSize="sm" /></td>
                                                    <td >
                                                        <CreatableSelect
                                                            id='unitId'
                                                            isClearable={false}
                                                            isSearchable
                                                            theme={selectThemeColors}
                                                            options={selectUnits}
                                                            classNamePrefix='select'
                                                            // innerRef={register( { required: true } )}
                                                            className={classnames( 'costing-select' )}
                                                            value={unit}
                                                            onChange={data => {
                                                                setUnit( data );
                                                            }}
                                                        />
                                                    </td>
                                                    <td ><Input placeholder="Profit Lost" bsSize="sm" /></td>
                                                    <td ><Input bsSize="sm" /></td>
                                                    <td ><Input bsSize="sm" /></td>
                                                    <td><Input bsSize="sm" /></td>
                                                    <td ><Input bsSize="sm" /></td>
                                                    <td ><Input bsSize="sm" /></td>
                                                    <td >
                                                        <span>
                                                            <Button.Ripple id="deleteFabId" tag={Label} disabled={( fabricDetails.length === 1 )} onClick={() => { handleRemoveFabricRow( i.fieldId ); }} className='btn-icon' color='flat-danger' >
                                                                <MinusSquare id="deleteFabId" color="red" />
                                                            </Button.Ripple>
                                                        </span>
                                                    </td>
                                                </tr>
                                            ) )
                                        }

                                    </tbody>
                                </Table>
                            </div>


                            <Button.Ripple id="addFabId" tag={Label} onClick={() => { handleAddFabricRow(); }} className='btn-icon' color='flat-success' >
                                <PlusSquare id="addFabId" color="green" />
                            </Button.Ripple>
                        </TabPane>
                        <TabPane className='mt-3 ml-2 pl-0 bg-white' tabId='2' style={{ overflow: 'hidden', width: "100%", zIndex: -1 }} >
                            <div style={{ padding: '9px', border: '1px #E5E5E5 solid', borderBottom: 'none', borderRadius: '5px 5px 0 0', maxWidth: '150px' }}>
                                <h4 className="text-center" >Accessories</h4>
                            </div>
                            <div className="pre-costing-details-table">

                                <Table size="sm">
                                    <thead >
                                        <tr className='bg-light-primary' >
                                            <th scope='col' className='text-nowrap'><strong>Item Group</strong></th>
                                            <th scope='col' className='text-nowrap'><strong>Item Sub</strong></th>
                                            <th scope='col' className='text-nowrap'><strong>Item Description</strong></th>
                                            <th scope='col' className='text-nowrap'><strong>UOM</strong></th>
                                            <th scope='col' className='text-nowrap'><strong>Process Loss(%)</strong></th>
                                            <th scope='col' className='text-nowrap'><strong>Cons(Qty.)</strong></th>
                                            <th scope='col' className='text-nowrap'><strong>Cost Per Unit</strong></th>
                                            <th scope='col' className='text-nowrap'><strong>In-House Cons.(Qty.)</strong></th>
                                            <th scope='col' className='text-nowrap'><strong>In-House Rate Per Unit</strong></th>
                                            <th scope='col' className='text-nowrap'><strong>In-House Cost Per Unit</strong></th>
                                            <th scope='col' className='text-nowrap'><strong>Action</strong></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            accessoriesDetails.map( i => (
                                                <tr key={i.fieldId}>
                                                    <td className='text-nowrap ' >
                                                        <CreatableSelect
                                                            id='itemGroupId'
                                                            isClearable={false}
                                                            isSearchable
                                                            theme={selectThemeColors}
                                                            options={selectItemGroups}
                                                            classNamePrefix='select'
                                                            // innerRef={register( { required: true } )}
                                                            className={classnames( 'costing-select ' )}
                                                            value={itemGroup}
                                                            onChange={data => {
                                                                setItemGroup( data );
                                                            }}
                                                        />
                                                    </td>
                                                    <td >
                                                        <CreatableSelect
                                                            id='itemSubGroupId'
                                                            isClearable={false}
                                                            isSearchable
                                                            theme={selectThemeColors}
                                                            options={itemGroup?.sub}
                                                            classNamePrefix='select'
                                                            // innerRef={register( { required: true } )}
                                                            className={classnames( 'costing-select' )}
                                                            value={itemSubGroup}
                                                            onChange={data => {
                                                                setItemSubGroup( data );
                                                            }}
                                                        />
                                                    </td>
                                                    <td ><Input placeholder="Description" bsSize="sm" /></td>
                                                    <td >
                                                        <CreatableSelect
                                                            id='unitId'
                                                            isClearable={false}
                                                            isSearchable
                                                            theme={selectThemeColors}
                                                            options={selectUnits}
                                                            classNamePrefix='select'
                                                            // innerRef={register( { required: true } )}
                                                            className={classnames( 'costing-select' )}
                                                            value={unit}
                                                            onChange={data => {
                                                                setUnit( data );
                                                            }}
                                                        />
                                                    </td>
                                                    <td ><Input placeholder="Profit Lost" bsSize="sm" /></td>
                                                    <td ><Input bsSize="sm" /></td>
                                                    <td ><Input bsSize="sm" /></td>
                                                    <td><Input bsSize="sm" /></td>
                                                    <td ><Input bsSize="sm" /></td>
                                                    <td ><Input bsSize="sm" /></td>
                                                    <td className='text-nowrap'>
                                                        <span>
                                                            <Button.Ripple id="deleteAccId" tag={Label} disabled={( accessoriesDetails.length === 1 )} onClick={() => { handleRemoveAccessoriesRow( i.fieldId ); }} className='btn-icon' color='flat-danger' >
                                                                <MinusSquare id="deleteAccId" color="red" />
                                                            </Button.Ripple>
                                                        </span>
                                                    </td>
                                                </tr>
                                            ) )
                                        }

                                    </tbody>
                                </Table>
                            </div>

                            <Button.Ripple id="addAccId" tag={Label} onClick={() => { handleAddAccessoriesRow(); }} className='btn-icon' color='flat-success' >
                                <PlusSquare id="addAccId" color="green" />
                            </Button.Ripple>

                        </TabPane>
                    </Col>


                </TabContent>

            </div>
        </>
    );
};
export default TabsVerticalLeft;