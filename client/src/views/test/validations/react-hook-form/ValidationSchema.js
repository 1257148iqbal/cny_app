import { yupResolver } from '@hookform/resolvers/yup';
import classnames from 'classnames';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable';
import { Button, Card, CardBody, CardHeader, CardTitle, FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import * as yup from 'yup';
import { selectThemeColors } from '../../../../utility/Utils';

const sizeGroups = [
  {
    value: 1,
    label: "X-XL"
  },
  {
    value: 2,
    label: "M-XL"
  },
  {
    value: 3,
    label: "S-M"
  }
];

const ValidationOnChange = () => {
  const [sizeGroup, setSizeGroup] = useState( null );
  console.log( sizeGroup );
  const SignupSchema = yup.object().shape( {

    sizeGroup: sizeGroup ? yup.string() : yup.string().required( 'Hello' ),
    password: yup.string().min( 6 ).required()
  } );

  const { register, errors, handleSubmit } = useForm( { mode: 'onChange', resolver: yupResolver( SignupSchema ) } );


  console.log( errors );

  const onSubmit = values => {
    //  isValidate();
    // yupResolver( SignupSchema );
    console.log( 'It is OK' );
    console.log( values );

  };
  const handleDataChange = ( data ) => {
    setSizeGroup( data );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Validation Schema With OnChange</CardTitle>
      </CardHeader>
      <CardBody>
        <div >
          <FormGroup>
            <Label for='password'>Password</Label>
            <Input
              type='password'
              id='password'
              name='password'
              innerRef={register( { required: true } )}
              invalid={errors.password && true}
              placeholder='password'
            />
            {errors && errors.password && <FormFeedback>{errors.password.message}</FormFeedback>}
          </FormGroup>
          <FormGroup>
            <Label for='sizeGroupId'>Size Group</Label>
            {/* <CreatableSelect
              id='sizeGroupId'
              menuPlacement="top"
              isClearable
              name="sizeGroup"
              isSearchable
              menuPosition="fixed"
              theme={selectThemeColors}
              options={sizeGroups}
              classNamePrefix='select'
              invalid={true}
              innerRef={register( { required: true } )}
              className={classnames( `react-select ${( errors && errors.sizeGroup && !sizeGroup ) && 'is-invalid'}` )}
              value={sizeGroup}
              onChange={data => {
                handleDataChange( data );
              }}
            /> */}
            <CreatableSelect
              id='consumptionUom'
              menuPosition="auto"
              isSearchable
              isClearable
              theme={selectThemeColors}
              options={sizeGroups}
              classNamePrefix='dropdown'
              innerRef={register( { required: true } )}
              className={classnames( `erp-dropdown-select ${( errors && errors.sizeGroup && !sizeGroup ) && 'is-invalid'}` )}
              value={sizeGroup}
              onChange={data => {
                handleDataChange( data );
              }}
            />
            {( errors && errors.sizeGroup && !sizeGroup ) && <FormFeedback>{errors.sizeGroup.message}</FormFeedback>}
          </FormGroup>

          <FormGroup className='d-flex mb-0'>
            <Button.Ripple
              className='mr-1'
              type="submit"
              color='primary'
              onClick={handleSubmit( onSubmit )}
            >
              Submit
            </Button.Ripple>
            <Button.Ripple outline color='secondary' type='reset'>
              Reset
            </Button.Ripple>
          </FormGroup>
        </div>
      </CardBody>
    </Card>
  );
};

export default ValidationOnChange;
