import { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { buttonName } = this.props;

    const buttonStyle = buttonName === '0' ? 'double-button' : 'single-button';

    return (
      <button type="button" className={buttonStyle}>
        {buttonName}
      </button>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
