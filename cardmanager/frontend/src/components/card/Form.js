/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCard } from '../../actions/cards';

class Form extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  }

onChange = (e) => this.setState({ [e.target.name]: e.target.value });

onSubmit = (e) => {
  e.preventDefault();
  const { name, email, message } = this.state;
  const card = { name, email, message };
  this.props.addCard(card);
  console.log('Submit');
  this.setState({
    name: '',
    email: '',
    message: '',
  });
}

render() {
  const { name, email, message } = this.state;
  return (
    <div className="card card-body mt-4 mb-4">
      <h2>Add Card</h2>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>
            Name
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={this.onChange}
              value={name}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            email
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={this.onChange}
              value={email}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Message
            <textarea
              type="text"
              name="message"
              className="form-control"
              onChange={this.onChange}
              value={message}
            />
          </label>
        </div>
        <div className="form-group">
          <button
            className="btn btn-primary"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
}

Form.propTypes = {
  addCard: PropTypes.func.isRequired,
};

export default connect(null, { addCard })(Form);
