/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';

class Register extends Component {
state = {
  username: '',
  email: '',
  password: '',
  password2: '',
}

onSubmit= (e) => {
  e.preventDefault();
  const {
    username, email, password, password2,
  } = this.state;
  if (password !== password2) {
    this.props.createMessage({
      passwordsNotMatch: '确认密码与原密码不一致',
    });
  } else {
    const newUser = {
      email, username, password,
    };
    this.props.register(newUser);
  }
}

onChange = (e) => this.setState({
  [e.target.name]: e.target.value,
});

render() {
  if (this.props.isAuthenticated) {
    return <Redirect to="/" />;
  }
  const {
    username, email, password, password2,
  } = this.state;
  return (
    <div className="col-md-6 m-auto">
      <div className="card card-body mt-5">
        <h2 className="text-center">注册</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>
              用户名
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              电子邮箱
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={this.onChange}
                value={email}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              密码
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              确认密码
              <input
                type="password"
                className="form-control"
                name="password2"
                onChange={this.onChange}
                value={password2}
              />
            </label>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              注册
            </button>
          </div>
          <p>
            已经有账号了？
            {' '}
            <Link to="/login">登录</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
}


Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

Register.defaultProps = {
  isAuthenticated: false,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
