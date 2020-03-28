import React, { Component } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Alerts extends Component {
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.face) {
        alert.error(
          error.msg.face.join() === 'card with this face already exists.'
            ? '正面跟已有卡片重复'
            : '请填写卡片正面',
        );
      } else if (error.msg.back) {
        alert.error(
          error.msg.back.join() === 'card with this back already exists.'
            ? '背面跟已有卡片重复'
            : '请填写卡片背面',
        );
      } else if (error.msg.username) {
        alert.error('用户名已被占用');
      } else if (error.msg.non_field_errors) {
        alert.error('账号或密码不正确');
      }
    }
    if (message !== prevProps.message) {
      if (message.deleteCard) {
        alert.success(message.deleteCard);
      } else if (message.addCard) {
        alert.success(message.addCard);
      } else if (message.passwordsNotMatch) {
        alert.error(message.passwordsNotMatch);
      }
    }
  }

  render() {
    return (
      <></>
    );
  }
}

Alerts.propTypes = {
  error: PropTypes.instanceOf(Object).isRequired,
  message: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
