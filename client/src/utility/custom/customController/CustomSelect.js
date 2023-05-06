/*
     Title: Custom Select
     Description: Custom Select
     Author: Iqbal Hossain
     Date: 10-February-2022
     Modified: 10-February-2022
*/

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Select from 'react-select';
import { Label } from 'reactstrap';
import { selectThemeColors } from 'utility/Utils';

const CustomSelect = props => {
  const { id, name, title, value, options, onChange, placeholder, ...rest } = props;
  return (
    <Fragment>
      <Label for={title}>{title}</Label>
      <Select
        id={id}
        isSearchable
        isClearable
        theme={selectThemeColors}
        name={name}
        options={options}
        value={value}
        placeholder={placeholder}
        classNamePrefix="select"
        onChange={onChange}
        {...rest}
      />
    </Fragment>
  );
};
CustomSelect.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

CustomSelect.defaultProps = {
  title: 'Select',
  name: ''
};

export default CustomSelect;
