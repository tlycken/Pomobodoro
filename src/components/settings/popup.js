import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import {pause, start} from '../../actions/timer';

class SettingsPopup extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {isShowingModal: false};

    this.handleClick = () => {
      this.setState({isShowingModal: true});
      this.props.pause();
    }
    this.handleClose = () => {
      this.setState({isShowingModal: false});
      this.props.start();
    }
  }

  render(props) {
    return (
      <a onClick={this.handleClick}>
        <span>{this.props.linkText}</span>
        {this.state.isShowingModal && <ModalContainer onClose={this.handleClose}>
          <ModalDialog onClose={this.handleClose}>
            <h1>These are the settings!</h1>
          </ModalDialog>
        </ModalContainer>}
      </a>
    );
  }
}

SettingsPopup.propTypes = {
  linkText: PropTypes.element.isRequired,
  start: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired
};

export default connect(null, {pause,start})(SettingsPopup); 