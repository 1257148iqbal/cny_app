/*
   Title: Role Form
   Description: 
   Author: Iqbal Hossain
   Date: 25-July-2023
   Modified: 25-July-2023
*/

import React from "react"
import { Controller, useForm } from "react-hook-form"
import { Button, Form, Input, Label } from "reactstrap"
import Sidebar from "../../../../@core/components/sidebar"

const defaultValues = {
  name: "",
  details: "",
  status: true
}
const checkIsValid = (data) => {
  return Object.values(data).every((field) => (typeof field === "object" ? field !== null : field.length > 0)
  )
}

const RoleForm = (props) => {
  const { isOpenSidebar, setIsOpenSideBar, selectedRole } = props

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  //#region Events
  const onSubmit = (data) => {
    if (checkIsValid(data)) {
      console.log(data)
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: "manual"
          })
        }
      }
    }
  }
  //#endregion
  return (
    <Sidebar
      size="lg"
      open={isOpenSidebar}
      title={selectedRole ? "Edit Role" : "New Role"}
      toggleSidebar={() => setIsOpenSideBar(!isOpenSidebar)}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-1">
          <Label className="form-label" for="name">
            Role Name <span className="text-danger">*</span>
          </Label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                id="name"
                placeholder="Role Name"
                invalid={errors.name && true}
                {...field}
              />
            )}
          />
        </div>
        <div className="mb-1">
          <Label className="form-label" for="details">
            Details <span className="text-danger">*</span>
          </Label>
          <Controller
            name="details"
            control={control}
            render={({ field }) => (
              <Input
                id="details"
                placeholder="Enter Details"
                invalid={errors.details && true}
                {...field}
              />
            )}
          />
        </div>
        <div className="mb-1">
          <Label for="status">
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Input
                  id="status"
                  type="checkbox"
                  invalid={errors.status && true}
                  {...field}
                />
              )}
            />
            <span style={{ marginLeft: "25px" }}>Is Active</span>
          </Label>
        </div>

        <Button type="submit" className="me-1" color="primary">
          Submit
        </Button>
        <Button
          type="reset"
          color="secondary"
          outline
          onClick={() => setIsOpenSideBar(!isOpenSidebar)}
        >
          Cancel
        </Button>
      </Form>
    </Sidebar>
  )
}

export default RoleForm
