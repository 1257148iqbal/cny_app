import Repeater from '@components/repeater';
import { useState } from 'react';
import { Plus, X } from 'react-feather';
import CreatableSelect from 'react-select/creatable';
import { SlideDown } from 'react-slidedown';
import { Button, Card, CardBody, CardHeader, CardText, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { randomIdGenerator, selectThemeColors } from '../../../utility/Utils';
// import { randomIdGenerator, selectThemeColors } from '../../../../../utility/Utils';
const selectColor = [
  { value: 'red', label: 'Red' },
  { value: 'black', label: 'Black' },
  { value: 'blue', label: 'Blue' }
];
const RepeatingForm = () => {
  const [count, setCount] = useState( 1 );

  const increaseCount = () => {
    setCount( count + 1 );
  };

  const deleteForm = e => {
    e.preventDefault();
    const slideDownWrapper = e.target.closest( '.react-slidedown' ),
      form = e.target.closest( 'form' );
    if ( slideDownWrapper ) {
      slideDownWrapper.remove();
    } else {
      form.remove();
    }
  };
  const [styleCombination, setStyleCombination] = useState( [
    {
      fieldId: randomIdGenerator(),
      styleNo: '',
      size: '',
      color: '',
      quantity: ''
    }
  ] );

  return (
    <Card>
      <CardHeader>
        <h4 className='card-title'>With Animation</h4>
      </CardHeader>
      <CardBody>
        <CardText>
          Use were using <code>react-slidedown</code> component for slidedown animation. Refer this{' '}
          <a href='https://github.com/frankwallis/react-slidedown' target='_blank' rel='noopener noreferrer'>
            link
          </a>{' '}
          for more info.
        </CardText>
        <Repeater count={count}>
          {i => {
            const Tag = i === 0 ? 'div' : SlideDown;
            return (
              <Tag key={i}>
                <Form>
                  <Row className='justify-content-between align-items-center'>
                    <Col md={4}>
                      <FormGroup>
                        <Label for={`animation-item-name-${i}`}>Item Name</Label>
                        <CreatableSelect
                          isSearchable
                          isClearable
                          id='colorId'
                          name='color'
                          theme={selectThemeColors}
                          options={selectColor}
                          classNamePrefix='select'
                          value={styleCombination.color}
                          onChange={( data ) => console.log( data )}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={2}>
                      <FormGroup>
                        <Label for={`animation-cost-${i}`}>Cost</Label>
                        <Input type='number' id={`animation-cost-${i}`} placeholder='32' />
                      </FormGroup>
                    </Col>
                    <Col md={2}>
                      <FormGroup>
                        <Label for={`animation-quantity-${i}`}>Quantity</Label>
                        <Input type='number' id={`animation-quantity-${i}`} placeholder='1' />
                      </FormGroup>
                    </Col>
                    <Col md={2}>
                      <FormGroup>
                        <Label for={`animation-price-${i}`}>Price</Label>
                        <input
                          className='form-control-plaintext'
                          type='number'
                          id={`animation-price-${i}`}
                          value='$32'
                          placeholder='$32'
                          readOnly
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col md={2}>
                      <Button.Ripple color='danger' className='text-nowrap px-1' onClick={deleteForm} outline>
                        <X size={14} className='mr-50' />
                        <span>Delete</span>
                      </Button.Ripple>
                    </Col>
                    <Col sm={12}>
                      <hr />
                    </Col>
                  </Row>
                </Form>
              </Tag>
            );
          }}
        </Repeater>
        <Button.Ripple className='btn-icon' color='primary' onClick={increaseCount}>
          <Plus size={14} />
          <span className='align-middle ml-25'>Add New</span>
        </Button.Ripple>
      </CardBody>
    </Card>
  );
};

export default RepeatingForm;
