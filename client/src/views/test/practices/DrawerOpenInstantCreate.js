import { merchandisingApi } from "@api/merchandising";
import { baseAxios } from "@services";
import { store } from '@store/storeConfig/store';

import '@styles/react/libs/flatpickr/flatpickr.scss';
import '@styles/react/libs/react-select/_react-select.scss';
import { selectThemeColors } from '@utils';
import 'cleave.js/dist/addons/cleave-phone.us';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import CreatableSelect from 'react-select/creatable';
import {
  Button, Card, CardBody, CardHeader,
  CardTitle, Form, FormGroup, Label, UncontrolledTooltip
} from 'reactstrap';
import { createOption } from "../../../utility/Utils";
import BuyerAddForm from '../../merchandising/buyer/form/BuyerAddForm';
import { getDropDownBuyers, handleOpenBuyerSidebar } from '../../merchandising/buyer/store/actions';

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

const DrawerOpenInstantCreate = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState( defaultValues );
  const [buyerName, setBuyerName] = useState( null );
  const { dropDownBuyers, openBuyerSidebar } = useSelector( ( { buyers } ) => buyers );
  const buyerToggleSidebar = () => store.dispatch( handleOpenBuyerSidebar( !openBuyerSidebar ) );
  const [buyer, setBuyer] = useState( [] );

  useEffect( () => {
    dispatch(
      getDropDownBuyers()
    );

  }, [dropDownBuyers.length] );


  const { handleSubmit, control, errors, register } = useForm( { defaultValues } );

  const onSubmit = data => {
    setData( data );
  };

  const handleDropDownChange = ( newValue ) => {
    setBuyer( newValue );
  };


  const handleBuyerInstantCreate = ( inputValue ) => {
    if ( inputValue !== undefined ) {
      setBuyerName( inputValue );
      buyerToggleSidebar();
    }
  };


  const handleBuyerInstantAdd = ( values ) => {
    baseAxios.post( `${merchandisingApi.buyer.add_buyer}`, values ).then(
      response => {
        const newOption = createOption( values.name, response.data );
        setBuyer( [...buyer, newOption] );
      }
    );
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
              onCreateOption={data => { handleBuyerInstantCreate( data ); }}
              value={buyer}
              classNamePrefix='select'
            />
          </FormGroup>
          <FormGroup className='d-flex mb-0'>
            <Button.Ripple className='mr-1' color='primary' type='submit' id='positionTop'>
              Submit
            </Button.Ripple>
            <UncontrolledTooltip placement='top' target='positionTop'>
              Tooltip on Top
            </UncontrolledTooltip>
            <Button.Ripple outline color='secondary' type='reset'>
              Reset
            </Button.Ripple>
          </FormGroup>

        </Form>
      </CardBody>
      {
        openBuyerSidebar && (
          <BuyerAddForm open={openBuyerSidebar} addInstantCreate={handleBuyerInstantAdd} buyerName={buyerName} toggleSidebar={buyerToggleSidebar} />
        )
      }
    </Card>
  );
};

export default DrawerOpenInstantCreate;
