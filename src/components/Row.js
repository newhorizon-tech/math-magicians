import { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { rowButtons, handleCalc } = this.props;
    return (
      <div className="row">
        {rowButtons.map((name) => (
          <Button key={name} buttonName={name} handleCalc={handleCalc} />
        ))}
      </div>
    );
  }
}
Row.propTypes = {
  rowButtons: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleCalc: PropTypes.func.isRequired,
};

export default Row;
