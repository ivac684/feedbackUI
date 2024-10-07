import PropTypes from 'prop-types'
import { Button as StyledButton} from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";

function Button({ children, type, isDisabled }) {
  return (
    <StyledButton severity='success' label='Send' size='small' type={type} disabled={isDisabled} text>
      { children }
    </StyledButton>
  )
}

Button.defaultProps = {
    type: 'button',
    isDisabled: false
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    isDisabled: PropTypes.bool
}

export default Button;
