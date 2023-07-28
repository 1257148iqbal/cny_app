/*
   Title: Role Form
   Description: 
   Author: Iqbal Hossain
   Date: 25-July-2023
   Modified: 25-July-2023
*/

import classNames from 'classnames'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap'
import Sidebar from '../../../../@core/components/sidebar'

const RoleForm = (props) => {
  const { isOpenSidebar, toggleRoleSidebar, selectedRole  } = props
  //#region Hooks
  const {register, errors, handleSubmit } = useForm()
  //#endregion
console.log(register)
  //#region Events
  const onSubmit = values => {
    console.log(values)
  }
  //#endregion
  return (
    <Sidebar
      size="lg"
      open={isOpenSidebar}
      title={selectedRole ? 'Edit Role' : 'New Role'}
      toggleSidebar={() => toggleRoleSidebar(!isOpenSidebar)}
    >
      <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            name="name"
            id="name"
            type="text"
            placeholder="Name"
            defaultValue={selectedRole ? selectedRole?.name : ''}
            invalid={errors?.name && true}
            className={classNames({ 'is-invalid': errors?.['name'] })}
          />
          {errors && errors.name && <FormFeedback>Name is Required</FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label for="details">Details</Label>
          <Input
            name="details"
            id="details"
            type="text"
            placeholder="Details"
            defaultValue={selectedRole ? selectedRole?.details : ''}
            invalid={errors?.details && true}
            className={classNames({ 'is-invalid': errors?.['details'] })}
          />
          {errors && errors.details && <FormFeedback>Details is Required</FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label for="status">
            <Input
              name="status"
              id="status"
              type="checkbox"
              style={{ marginLeft: '5px' }}
              defaultChecked={selectedRole ? selectedRole?.status : true}
            />
            <span style={{ marginLeft: '25px' }}>Is Active</span>
          </Label>
        </FormGroup>
        <Button type="submit" className="mr-1" color="primary">
          Submit
        </Button>
        <Button type="reset" className="mr-1" color="secondary">
          Reset
        </Button>
        <Button type="cancel" color="danger" onClick={() => toggleRoleSidebar(!isOpenSidebar)}>
          Cancel
        </Button>
      </Form>
    </Sidebar>
  )
}

export default RoleForm
