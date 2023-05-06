import CustomSteeper from '@custom/CustomSteeper';
import classnames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Box, List, PenTool, User } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CreatableSelect from 'react-select/creatable';
import { Button, Col, FormGroup, NavItem, NavLink, Row } from 'reactstrap';
import ActionMenu from '../../../layouts/components/menu/action-menu';
import { selectThemeColors } from '../../../utility/Utils';
import { getDropDownBuyers } from '../../merchandising/buyer/store/actions';
const breadcrumb = [
  {
    id: 'home',
    name: 'Home',
    link: "/",
    isActive: false
  },
  {
    id: 'procurements',
    name: 'Procurement List',
    link: "/purchase-order",
    isActive: false
  }
];

const selectBudget = [
  { value: 1, label: 'Budget 01' },
  { value: 2, label: 'Budget 02' }
];
const selectPurchaseOrder = [
  { value: 1, label: 'PO 01' },
  { value: 2, label: 'PO 02' }
];
const selectStyle = [
  { value: 1, label: 'style 01' },
  { value: 2, label: 'style 02' }
];
const itemGroupType = [
  { value: 1, label: 'Fabric' },
  { value: 2, label: 'Accessories' }
];

const initialControlValue = {
  buyer: null,
  budget: null,
  style: null,
  purchaseOrder: null,
  itemGroup: null,
  isDataFind: false
};
const WizardHorizontal = () => {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const { dropDownBuyers } = useSelector( ( { buyers } ) => buyers );
  const [stepper, setStepper] = useState( null );
  const ref = useRef( null );
  const [controls, setControls] = useState( initialControlValue );

  useEffect( () => {
    dispatch( getDropDownBuyers() );
  }, [] );

  const handleControlDropdownChange = ( data, e ) => {
    const { action, name, option } = e;
    if ( name === 'buyer' ) {
      setControls( {
        ...controls,
        [name]: data,
        budget: null,
        style: null,
        purchaseOrder: null,
        itemGroup: null,
        isDataFind: false
      } );
    } else if ( name === 'budget' ) {
      setControls( {
        ...controls,
        [name]: data,
        style: null,
        purchaseOrder: null,
        itemGroup: null,
        isDataFind: false
      } );
    } else if ( name === 'style' ) {
      setControls( {
        ...controls,
        [name]: data,
        purchaseOrder: null,
        itemGroup: null,
        isDataFind: false
      } );
    } else if ( name === 'purchaseOrder' ) {
      setControls( {
        ...controls,
        [name]: data,
        itemGroup: null,
        isDataFind: false

      } );
    } else if ( name === 'itemGroup' ) {
      setControls( {
        ...controls,
        [name]: data,
        isDataFind: false
      } );
    }
  };
  const onSubmit = () => {
    console.log( 'Hello' );
  };
  const handleCancel = () => {
    console.log( 'Cancel' );
    push( '/procurements' );
  };

  const handleNext = () => {
    stepper.next();
  };
  const handlePrevious = () => {
    stepper.previous();
  };

  const steps = [
    {
      id: 'buyer',
      title: 'Buyer & Budget',
      icon: <User size={18} />,
      content:
        <div>
          <Row>
            <FormGroup tag={Col} xs={12} sm={12} md={4} lg={2} xl={2} >
              <CreatableSelect
                id='buyerId'
                name="buyer"
                placeholder="Select Buyer"
                isDisabled={controls.isDataFind}
                isSearchable
                menuPosition="fixed"
                isClearable
                theme={selectThemeColors}
                options={dropDownBuyers}
                classNamePrefix='select'
                //   innerRef={register( { required: true } )}
                className={classnames( 'react-select' )}
                value={controls?.buyer}
                onChange={( data, e ) => {
                  handleControlDropdownChange( data, e );
                }}
              />
            </FormGroup>
            <FormGroup tag={Col} xs={12} sm={12} md={4} lg={2} xl={2} >
              <CreatableSelect
                id='budgetId'
                name="budget"
                isDisabled={!controls.buyer || controls.isDataFind}
                isSearchable
                placeholder="Select Budget"
                menuPosition="fixed"
                isClearable
                theme={selectThemeColors}
                options={selectBudget}
                classNamePrefix='select'
                // innerRef={register( { required: true } )}
                className={classnames( 'react-select' )}
                value={controls?.budget}
                onChange={( data, e ) => {
                  handleControlDropdownChange( data, e );
                }}
              />
            </FormGroup>
          </Row>

          <div className='d-flex justify-content-between'>
            <Button.Ripple color='secondary' className='btn-prev' outline disabled size="sm">
              <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
              <span className='align-middle d-sm-inline-block d-none'>Previous</span>
            </Button.Ripple>
            <Button.Ripple color='primary' className='btn-next' outline size="sm" onClick={() => { handleNext(); }}>
              <span className='align-middle d-sm-inline-block d-none'>Next</span>
              <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
            </Button.Ripple>
          </div>
        </div>
    },
    {
      id: 'budget',
      title: 'Budget',
      icon: <Box size={18} />,
      content: <div>
        <FormGroup  >
          <CreatableSelect
            id='budgetId'
            name="budget"
            isMulti
            isDisabled={!controls.buyer || controls.isDataFind}
            isSearchable
            placeholder="Select Budget"
            menuPosition="fixed"
            isClearable
            theme={selectThemeColors}
            options={selectBudget}
            classNamePrefix='select'
            // innerRef={register( { required: true } )}
            className={classnames( 'react-select' )}
            value={controls?.budget}
            onChange={( data, e ) => {
              handleControlDropdownChange( data, e );
            }}
          />
        </FormGroup>
        <div className='d-flex justify-content-between'>
          <Button.Ripple color='secondary' className='btn-prev' outline size="sm" onClick={() => { handlePrevious(); }}>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple color='primary' className='btn-next' outline size="sm" onClick={() => { handleNext(); }}>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
          </Button.Ripple>
        </div>
      </div>
    },
    {
      id: 'style',
      title: 'Style',
      icon: <PenTool size={18} />,
      content: <div>
        <FormGroup >
          <CreatableSelect
            isMulti
            id='styleId'
            name="style"
            isSearchable
            isDisabled={!controls.budget || controls.isDataFind}
            menuPosition="fixed"
            placeholder="Select Style"
            isClearable
            theme={selectThemeColors}
            options={selectStyle}
            classNamePrefix='select'
            // innerRef={register( { required: true } )}
            className={classnames( 'react-select' )}
            value={controls?.style}
            onChange={( data, e ) => {
              handleControlDropdownChange( data, e );
            }}
          />
        </FormGroup>
        <div className='d-flex justify-content-between'>
          <Button.Ripple color='secondary' className='btn-prev' outline size="sm" onClick={() => { handlePrevious(); }}>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple color='primary' className='btn-next' outline size="sm" onClick={() => { handleNext(); }}>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
          </Button.Ripple>
        </div>
      </div>
    },
    {
      id: 'purchaseOrder',
      title: 'Purchaser Order',
      icon: <List size={18} />,
      content: <div>
        <FormGroup >
          <CreatableSelect
            id='purchaseOrderId'
            name="purchaseOrder"
            isSearchable
            isDisabled={!controls.style || controls.isDataFind}
            isMulti
            placeholder="Select PO"
            menuPosition="fixed"
            isClearable
            theme={selectThemeColors}
            options={selectPurchaseOrder}
            classNamePrefix='select'
            // innerRef={register( { required: true } )}
            className={classnames( 'react-select' )}
            value={controls?.purchaseOrder}
            onChange={( data, e ) => {
              handleControlDropdownChange( data, e );
            }}
          />
        </FormGroup>
        <div className='d-flex justify-content-between'>
          <Button.Ripple color='secondary' className='btn-prev' outline size="sm" onClick={() => { handlePrevious(); }}>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple color='primary' className='btn-next' outline size="sm" onClick={() => { handleNext(); }}>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
          </Button.Ripple>
        </div>
      </div>
    },
    {
      id: 'others',
      title: 'Others',
      icon: <List size={18} />,
      content: <div>
        <div className='d-flex justify-content-between'>
          <Button.Ripple color='secondary' className='btn-prev' outline size="sm" onClick={() => { handlePrevious(); }}>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple color='primary' className='btn-next' outline size="sm" >
            <span className='align-middle d-sm-inline-block d-none'>Search</span>
            <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
          </Button.Ripple>
        </div>
      </div>
    }
  ];

  return (
    <div>
      <ActionMenu breadcrumb={breadcrumb} title='New Procurement' >
        <NavItem className="mr-1" >
          <NavLink
            tag={Button}
            size="sm"
            color="primary"
            //  type="submit"
            onClick={() => { onSubmit(); }}
          >Save</NavLink>
        </NavItem>
        <NavItem className="mr-1" >
          <NavLink
            tag={Button}
            size="sm"
            color="secondary"
            onClick={() => { handleCancel(); }}
          >
            Cancel
          </NavLink>
        </NavItem>
      </ActionMenu>
      <div className='horizontal-wizard mt-3'>
        <CustomSteeper
          instance={el => setStepper( el )}
          ref={ref}
          steps={steps}
          options={{
            linear: false
          }}
        />
      </div>
    </div>

  );
};

export default WizardHorizontal;
