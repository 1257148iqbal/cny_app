import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  Checkbox,
  Form,
  FormWrapper,
  ResetButton,
  SaveButton,
  TextInput,
} from "app/components/CustomControls";
import { requiredMessage } from "app/constants/ErrorMessages";
import React, { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
}));

const initialFieldValues = {
  id: 0,
  name: "",
  userName: "",
  email: "",
  phone: "",
  password: "",
  isActive: true,
};

const UserForm = (props) => {
  const classes = useStyles();
  const { onSubmit } = props;
  //#region states
  const [state, setState] = React.useState(initialFieldValues);
  const [errors, setErrors] = React.useState({});

  //#endregion

  //#region UDF
  const validate = (fieldValues = state) => {
    let temp = { ...errors };
    if ("name" in fieldValues) {
      if (!fieldValues.name) {
        temp.name = requiredMessage;
      } else if (fieldValues.name.length > 20) {
        temp.name = "Name can not exceed twenty character";
      } else {
        temp.name = "";
      }
    }
    if ("email" in fieldValues) {
      if (!fieldValues.email) {
        temp.email = requiredMessage;
      } else if (fieldValues.email.length > 50) {
        temp.email = "Email can not exceed fifty character";
      } else {
        temp.email = "";
      }
    }
    if ("phone" in fieldValues) {
      if (!fieldValues.phone) {
        temp.phone = requiredMessage;
      } else if (fieldValues.phone.length > 12) {
        temp.phone = "Phone number can not exceed eleven character";
      } else {
        temp.phone = "";
      }
    }
    setErrors({ ...temp });
    if (fieldValues === state)
      return Object.values(temp).every((x) => x === "");
  };
  //#region

  //#region hook

  //#endregion

  //#region Events
  const onChange = (e) => {
    const { type, name, value, checked } = e.target;
    const filedValue = { [name]: value };
    setState({
      ...state,
      [name]: type === "checkbox" ? checked : value,
    });
    validate(filedValue);
  };

  const onReset = () => {
    setState(initialFieldValues);
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(e, state);
    }
  };
  //#endregion

  return (
    <FormWrapper>
      <Form className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TextInput
              name="name"
              label="Name"
              value={state.name}
              error={errors.name}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TextInput
              name="userName"
              label="User Name"
              value={state.userName}
              error={errors.userName}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TextInput
              name="email"
              label="Email"
              value={state.email}
              error={errors.email}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TextInput
              name="phone"
              label="Phone"
              value={state.phone}
              error={errors.phone}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TextInput
              name="password"
              label="Password"
              value={state.password}
              error={errors.password}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Checkbox
              name="isActive"
              label="Is Active"
              checked={state.isActive}
              onChange={onChange}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end">
          <SaveButton onClick={handleSubmit} />
          <ResetButton onClick={onReset} />
        </Grid>
      </Form>
    </FormWrapper>
  );
};

export default UserForm;
