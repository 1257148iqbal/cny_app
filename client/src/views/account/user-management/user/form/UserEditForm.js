/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import Sidebar from '@components/sidebar';
import { selectedCity, selectedCountry, selectedState } from '@enums';
import { isObjEmpty, selectThemeColors } from '@utils';
import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Edit, Upload, XCircle } from 'react-feather';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import CreatableSelect from 'react-select/creatable';
import { Button, Form, FormFeedback, FormGroup, FormText, Input, Label } from 'reactstrap';
import ButtonGroup from 'reactstrap/lib/ButtonGroup';
import Card from 'reactstrap/lib/Card';
import { getDropDownModules } from '../../module/store/actions';
import { getDropDownRoles } from '../../role/store/actions';
import { selectedUserNull, updateUser } from '../store/actions';

const UserEditForm = ({ open, toggleSidebar, data }) => {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState({ url: data?.photo });
  const { dropDownRoles } = useSelector(({ roles }) => roles);
  const { dropDownModules } = useSelector(({ modules }) => modules);
  const [role, setRole] = useState();
  const existingModule = data.module.map(i => ({
    value: i.id,
    label: i.name
  }));
  const [module, setModule] = useState(existingModule);
  const handlePhotoUpload = e => {
    setPhoto({
      url: URL.createObjectURL(e.target.files[0])
    });
  };

  // ** Vars React HOOK Form

  useEffect(() => {
    dispatch(getDropDownModules());
    dispatch(getDropDownRoles());
    if (dropDownRoles.length) {
      const filterRole = dropDownRoles?.find(i => i.label === data.role);
      setRole(filterRole);
    }
  }, [dispatch, dropDownRoles.length]);

  // ** Vars
  const { register, errors, handleSubmit } = useForm();
  // ** Function to handle form submit
  const onSubmit = values => {
    const moduleMuted = module.map(i => ({
      id: i.value,
      name: i.label
    }));
    if (isObjEmpty(errors)) {
      toggleSidebar();
      dispatch(
        updateUser({
          id: data.id,
          fullName: values.fullName,
          userName: values.userName,
          email: values.email,
          phoneNumber: values.phoneNumber,
          fax: values.fax,
          address: {
            address: values.address,
            country: values.country,
            state: values.state,
            city: values.city,
            zipCode: values.zipCode,
            street: values.street
          },
          module: moduleMuted,
          role: role.label,
          status: 'active',
          photo: photo.url
        })
      );
      dispatch(selectedUserNull());
    }
  };

  const handleCancel = () => {
    toggleSidebar();
    dispatch(selectedUserNull());
  };

  const handlePhotoRemove = () => {
    setPhoto({
      ...photo,
      url: ''
    });
  };
  return (
    <Sidebar size="lg" open={open} title="Edit User" headerClassName="mb-1" contentClassName="pt-0" toggleSidebar={toggleSidebar}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="fullName">
            Name <span className="text-danger">*</span>
          </Label>
          <Input
            name="fullName"
            id="fullName"
            placeholder="John Doe"
            defaultValue={data.fullName}
            innerRef={register({ required: true })}
            invalid={errors.fullName && true}
            className={classnames({ 'is-invalid': errors['fullName'] })}
          />
          {errors && errors.fullName && <FormFeedback>Name is required!</FormFeedback>}
        </FormGroup>

        <FormGroup>
          <Label for="userName">
            User Name <span className="text-danger">*</span>
          </Label>
          <Input
            name="userName"
            id="userName"
            placeholder="Kevin Pietersen"
            defaultValue={data.userName}
            innerRef={register({ required: true })}
            invalid={errors.userName && true}
            className={classnames({ 'is-invalid': errors['userName'] })}
          />
          {errors && errors.userName && <FormFeedback>Name is required!</FormFeedback>}
        </FormGroup>

        <FormGroup>
          <Label for="email">
            Email <span className="text-danger">*</span>
          </Label>
          <Input
            type="email"
            name="email"
            defaultValue={data.email}
            id="email"
            placeholder="john.doe@example.com"
            innerRef={register({ required: true })}
            invalid={errors.email && true}
            className={classnames({ 'is-invalid': errors['email'] })}
          />
          <FormText color="muted">You can use letters, numbers & periods</FormText>
          {errors && errors.email && <FormFeedback>Email is required!</FormFeedback>}
        </FormGroup>

        <FormGroup>
          <Label className="text-dark font-weight-bold" for="module">
            {' '}
            Module{' '}
          </Label>
          <CreatableSelect
            isMulti
            id="module"
            isSearchable
            isClearable
            theme={selectThemeColors}
            options={dropDownModules}
            classNamePrefix="select"
            innerRef={register({ required: true })}
            value={module}
            onChange={data => {
              setModule(data);
            }}
          />
          {errors && errors.module && <FormFeedback>Module is required!</FormFeedback>}
        </FormGroup>

        <FormGroup>
          <Label className="text-dark font-weight-bold" for="role">
            {' '}
            Role{' '}
          </Label>
          {dropDownRoles?.length && (
            <CreatableSelect
              id="role"
              isSearchable
              isClearable
              theme={selectThemeColors}
              options={dropDownRoles}
              // options={[]}
              classNamePrefix="select"
              innerRef={register({ required: true })}
              // defaultValue={data.role}
              value={role}
              onChange={data => {
                setRole(data);
              }}
            />
          )}

          {errors && errors.role && <FormFeedback>Role is required!</FormFeedback>}
        </FormGroup>

        <FormGroup>
          <Label for="phone">
            Phone <span className="text-danger">*</span>
          </Label>
          <Input
            type="tel"
            name="phoneNumber"
            defaultValue={data.phoneNumber}
            id="phoneNumber"
            placeholder="(+880) 1811-275653"
            innerRef={register({ required: true })}
            invalid={errors.phoneNumber && true}
            className={classnames({ 'is-invalid': errors['phoneNumber'] })}
          />
          {errors && errors.phoneNumber && <FormFeedback>Phone is required!</FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label for="fax">
            Fax <span className="text-danger">*</span>
          </Label>
          <Input
            name="fax"
            id="fax"
            defaultValue={data.fax}
            placeholder="22-21421411"
            innerRef={register({ required: true })}
            invalid={errors.fax && true}
            className={classnames({ 'is-invalid': errors['fax'] })}
          />
          {errors && errors.fax && <FormFeedback>Fax is required!</FormFeedback>}
        </FormGroup>

        <FormGroup>
          <Label for="address">Address:</Label>
          <Input
            name="address"
            type="textarea"
            id="address"
            placeholder="Write address"
            defaultValue={data.address.address}
            innerRef={register({ required: true })}
            invalid={errors.address && true}
            className={classnames({ 'is-invalid': errors['address'] })}
          />
          {errors && errors.address && <FormFeedback>Address is required!</FormFeedback>}
        </FormGroup>

        <FormGroup>
          <Label for="country">Country</Label>
          <Input
            name="country"
            type="select"
            id="country"
            defaultValue={data.address.country}
            innerRef={register({ required: true })}
            invalid={errors.country && true}
            className={classnames({ 'is-invalid': errors['country'] })}
          >
            {selectedCountry.map(item => (
              <option key={item.value} value={item.label}>
                {item.label}
              </option>
            ))}
          </Input>
          {errors && errors.country && <FormFeedback>Country is required!</FormFeedback>}
        </FormGroup>

        <FormGroup>
          <Label for="state">State</Label>
          <Input
            name="state"
            type="select"
            id="state"
            defaultValue={data.address.state}
            innerRef={register({ required: true })}
            invalid={errors.state && true}
            className={classnames({ 'is-invalid': errors['state'] })}
          >
            {selectedState.map(item => (
              <option key={item.value} value={item.label}>
                {item.label}
              </option>
            ))}
          </Input>
          {errors && errors.country && <FormFeedback>Country is required!</FormFeedback>}
        </FormGroup>

        <FormGroup>
          <Label for="city">City</Label>
          <Input
            name="city"
            type="select"
            id="city"
            defaultValue={data.address.city}
            innerRef={register({ required: true })}
            invalid={errors.city && true}
            className={classnames({ 'is-invalid': errors['city'] })}
          >
            {selectedCity.map(item => (
              <option key={item.value} value={item.label}>
                {item.label}
              </option>
            ))}
          </Input>
          {errors && errors.country && <FormFeedback>Country is required!</FormFeedback>}
        </FormGroup>

        <FormGroup>
          <Label for="zipCode">
            Zip Code <span className="text-danger">*</span>
          </Label>
          <Input
            name="zipCode"
            id="zipCode"
            placeholder="6118"
            defaultValue={data.address.zipCode}
            innerRef={register({ required: true })}
            invalid={errors.zipCode && true}
            className={classnames({ 'is-invalid': errors['zipCode'] })}
          />
          {errors && errors.zipCode && <FormFeedback>Zip Code is required!</FormFeedback>}
        </FormGroup>

        <FormGroup>
          <Label for="street">
            Street <span className="text-danger">*</span>
          </Label>
          <Input
            name="street"
            id="street"
            placeholder="201,Nasirabad"
            defaultValue={data.address.street}
            innerRef={register({ required: true })}
            invalid={errors.street && true}
            className={classnames({ 'is-invalid': errors['street'] })}
          />
          {errors && errors.street && <FormFeedback>Street is required!</FormFeedback>}
        </FormGroup>

        <FormGroup>
          <div className="main-div">
            <Card className="img-holder">
              <img src={photo.url !== '' ? photo?.url : data?.photo} alt="Example" className="image" />

              {photo.url !== '' ? (
                <div className="overlay">
                  <div className="text">
                    <ButtonGroup size="sm">
                      <Button id="change-img" tag={Label} className="btn-icon " color="relief-success">
                        <Edit size={20} />

                        <input type="file" hidden id="change-img" onChange={handlePhotoUpload} accept="image/*" />
                      </Button>
                      <Button tag={Label} className="btn-icon " color="relief-danger">
                        <XCircle
                          size={20}
                          onClick={() => {
                            handlePhotoRemove();
                          }}
                        />
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              ) : (
                <div className="overlay">
                  <div className="text">
                    <Button id="change-img" tag={Label} className="btn-icon " color="relief-primary">
                      <Upload size={20} />
                      <input type="file" hidden id="change-img" onChange={handlePhotoUpload} accept="image/*" />
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </FormGroup>

        <Button type="submit" className="mr-1" color="primary">
          Submit
        </Button>
        <Button
          type="reset"
          color="secondary"
          outline
          onClick={() => {
            handleCancel();
          }}
        >
          Cancel
        </Button>
      </Form>
    </Sidebar>
  );
};

export default UserEditForm;
