/*
   Title: Custom Date Picker
   Description: Custom Date Picker
   Author: Iqbal Hossain
   Date: 06-February-2022
   Modified: 06-February-2022
*/

import PropTypes from 'prop-types';
import { Fragment } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Label } from 'reactstrap';

const CustomDateMonthPicker = props => {
  const { name, title, selected, onChange, minDate, maxDate, showMonthYearPicker, ...rest } = props;
  return (
    <Fragment>
      <Label for={title}>{title}</Label>
      <DatePicker
        name={name}
        selected={selected}
        dateFormat="MMMM yyyy"
        className="form-control"
        onChange={onChange}
        minDate={minDate}
        maxDate={maxDate}
        showMonthYearPicker={showMonthYearPicker}
        {...rest}
      />

    </Fragment>
  );
};
CustomDateMonthPicker.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func
};

export default CustomDateMonthPicker;
