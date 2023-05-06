import { store } from '@store/storeConfig/store';

import '@styles/react/libs/flatpickr/flatpickr.scss';
import '@styles/react/libs/react-select/_react-select.scss';
import { selectThemeColors } from '@utils';
import classnames from 'classnames';
import 'cleave.js/dist/addons/cleave-phone.us';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import CreatableSelect from 'react-select/creatable';
import {
  Button, Card, CardBody, CardHeader,
  CardTitle, Form, FormGroup, Label
} from 'reactstrap';
import BuyerAddForm from '../../../merchandising/buyer/form/BuyerAddForm';
import { getDropDownBuyers, handleOpenBuyerSidebar } from '../../../merchandising/buyer/store/actions';


const colourOptions = [
  { value: 'ocean', label: 'Ocean' },
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' }
];

const defaultValues = {
  phoneNumber: '',
  ReactSelect: [],
  buyer: []
};

const ValidationThirdPartyComponents = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState( defaultValues );
  const [buyerNewData, setbuyerNewData] = useState( null );
  const [buyerName, setBuyerName] = useState( null );
  const { dropDownBuyers, lastBuyerAdded, openBuyerSidebar } = useSelector( ( { buyers } ) => buyers );
  const toggleSidebar = () => store.dispatch( handleOpenBuyerSidebar( !openBuyerSidebar ) );
  console.log( buyerNewData );
  useEffect( () => {
    dispatch(
      getDropDownBuyers()
    );

  }, [dropDownBuyers.length] );


  const { handleSubmit, control, errors, register } = useForm( { defaultValues } );

  const createOption = ( label ) => ( {
    label,
    value: label.toLowerCase().replace( /\W/g, '' )
  } );


  const onSubmit = data => {
    setData( data );
  };

  const handleDropDownChange = ( newValue ) => {
    setData( {
      ...data,
      ReactSelect: [...newValue]
    } );
  };


  const handleCreate = ( inputValue ) => {
    if ( inputValue !== undefined ) {
      setBuyerName( inputValue );
      toggleSidebar();
      const newOption = createOption( inputValue );
      setData( {
        ...data,
        ReactSelect: [...data.ReactSelect, newOption]
      } );
    }
  };


  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Instant Create</CardTitle>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit( onSubmit )}>
          <FormGroup>
            <Label for='react-select'>Buyer</Label>
            {/* <Controller
              render={
                ( field ) => <CreatableSelect
                  id='react-select'
                  name='ReactSelect'
                  isMulti
                  isClearable
                  isSearchable
                  options={colourOptions}
                  theme={selectThemeColors}
                  onChange={data => { handleDropDownChange( data ); }}
                  onCreateOption={data => { handleCreate( data ); }}
                  {...field}
                  value={data?.ReactSelect}
                  classNamePrefix='select'
                  className={classnames( 'react-select', { 'is-invalid': data !== null && !data.ReactSelect?.length } )}
                />}

              control={control}
              id='react-select'
              name='ReactSelect'
            /> */}
            {/* {!data.ReactSelect?.length && <FormFeedback>Total Order Quantity No is required!</FormFeedback>} */}
            <CreatableSelect
              id='react-select'
              name='ReactSelect'
              isMulti
              isClearable
              isSearchable
              options={dropDownBuyers}
              allowCreateWhileLoading
              isLoading
              theme={selectThemeColors}
              onChange={data => { handleDropDownChange( data ); }}
              onCreateOption={data => { handleCreate( data ); }}
              value={data?.ReactSelect}
              classNamePrefix='select'
              className={classnames( 'react-select', { 'is-invalid': data !== null && !data.ReactSelect?.length } )}
            />
          </FormGroup>
          {/* <FormGroup>
            <Label for='react-select'>React Select</Label>
            <Controller
              isClearable
              as={Select}
              id='react-select'
              control={control}
              name='MeSelect'
              options={colourOptions}
              className={classnames( 'react-select', { 'is-invalid': data !== null && data.MeSelect === null } )}
              innerRef={register( { required: true } )}
              classNamePrefix='select'
              theme={selectThemeColors}
            />
          </FormGroup> */}

          <FormGroup className='d-flex mb-0'>
            <Button.Ripple className='mr-1' color='primary' type='submit'>
              Submit
            </Button.Ripple>
            <Button.Ripple outline color='secondary' type='reset'>
              Reset
            </Button.Ripple>
          </FormGroup>

        </Form>
      </CardBody>
      {
        openBuyerSidebar && (
          <BuyerAddForm open={openBuyerSidebar} buyerName={buyerName} toggleSidebar={toggleSidebar} />
        )
      }
    </Card>
  );
};

export default ValidationThirdPartyComponents;
