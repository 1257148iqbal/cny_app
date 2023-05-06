import PropTypes from 'prop-types';
import { Input } from 'reactstrap';
import { ensureOnlyNumber } from 'utility/commonHelper';

const CustomInputBox = (props) => {
  const { isNumberOnly, ...rest } = props;
  return (
    <Input {...rest} {...(isNumberOnly && { onKeyDown: ensureOnlyNumber })} />
  );
};

CustomInputBox.propTypes = {
  isNumberOnly: PropTypes.bool,
};

CustomInputBox.defaultProps = {
  isNumberOnly: false,
};
export default CustomInputBox;
