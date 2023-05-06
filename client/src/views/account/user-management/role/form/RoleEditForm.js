import Sidebar from '@components/sidebar';
import { isObjEmpty } from '@utils';
import classnames from 'classnames';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Button, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { selectedRoleNull, updateRole } from '../store/actions';

const RoleEditForm = ({ open, toggleSidebar, data }) => {
  // ** Store Vars
  const dispatch = useDispatch();
  //** State */

  const { register, errors, handleSubmit } = useForm();
  // ** Function to handle form submit
  const onSubmit = values => {
    if (isObjEmpty(errors)) {
      toggleSidebar();
      dispatch(
        updateRole({
          id: data.id,
          roleName: values.roleName,
          description: values.description,
          status: values.status
        })
      );
      dispatch(selectedRoleNull());
    }
  };

  const handleCancel = () => {
    toggleSidebar();
    dispatch(selectedRoleNull());
  };
  return (
    <Sidebar size="lg" open={open} title="Edit Role " headerClassName="mb-1" contentClassName="pt-0" toggleSidebar={toggleSidebar}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="roleName">
            Name <span className="text-danger">*</span>
          </Label>
          <Input
            name="roleName"
            id="roleName"
            placeholder="XL"
            defaultValue={data.roleName}
            innerRef={register({ required: true })}
            invalid={errors.roleName && true}
            className={classnames({ 'is-invalid': errors['roleName'] })}
          />
          {errors && errors.roleName && <FormFeedback>Name is required!</FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label for="description">
            Description <span className="text-danger">*</span>
          </Label>
          <Input
            type="description"
            name="description"
            id="description"
            placeholder="Write Description"
            defaultValue={data.description}
            innerRef={register({ required: true })}
            invalid={errors.description && true}
            className={classnames({ 'is-invalid': errors['description'] })}
          />

          {errors && errors.description && <FormFeedback>Description is required!</FormFeedback>}
        </FormGroup>

        <FormGroup check className="mt-1 mb-1">
          <Input name="status" type="checkbox" id="acceptId" defaultChecked={data.status} innerRef={register({ required: false })} />
          <span> IsActive</span>
        </FormGroup>

        <Button.Ripple type="submit" className="mr-1" color="primary">
          Submit
        </Button.Ripple>

        <Button
          type="reset"
          className="mr-1"
          color="danger"
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

export default RoleEditForm;
