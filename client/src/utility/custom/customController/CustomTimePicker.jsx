/*
   Title: Custom Time Picker
   Description: Custom Time Picker
   Author: Iqbal Hossain
   Date: 06-February-2022
   Modified: 06-February-2022
*/

import '@styles/react/libs/flatpickr/flatpickr.scss';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import Flatpickr from 'react-flatpickr';
import { Label } from 'reactstrap';

const CustomTimePicker = (props) => {
  const { id, name, title, value, onChange, placeholder } = props;
  return (
    <Fragment>
      <Label for={id}>{title}</Label>
      <Flatpickr
        name={name}
        value={value}
        placeholder={placeholder}
        id={id}
        className="form-control "
        onChange={onChange}
        options={{
          enableTime: true,
          noCalendar: true,
          dateFormat: 'h:i K',
          time_24hr: false,
        }}
      />
    </Fragment>
  );
};
CustomTimePicker.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default CustomTimePicker;

/** Change Log
 * 	 06-February-2022 (Iqbal): Custom Time Picker
 */
