import { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { buttonName, handleCalc } = this.props;

    const buttonStyle = buttonName === '0' ? 'double-button' : 'single-button';

    return (
      <button type="button" className={buttonStyle} onClick={handleCalc()}>
        {buttonName}
      </button>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  handleCalc: PropTypes.func.isRequired,
};

export default Button;
