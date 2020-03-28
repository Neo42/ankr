/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCard } from '../../actions/cards';

class Form extends Component {
  state = {
    face: '',
    back: '',
    trick: '',
  }

onChange = (e) => this.setState({ [e.target.name]: e.target.value });

onSubmit = (e) => {
  e.preventDefault();
  const { face, back, trick } = this.state;
  const card = { face, back, trick };
  this.props.addCard(card);
  this.setState({
    face: '',
    back: '',
    trick: '',
  });
}

render() {
  const { face, back, trick } = this.state;
  return (
    <div className="card card-body mt-4 mb-4">
      <h2>添加卡片</h2>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>
            正面
            <input
              type="text"
              name="face"
              className="form-control"
              onChange={this.onChange}
              value={face}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            背面
            <input
              type="text"
              name="back"
              className="form-control"
              onChange={this.onChange}
              value={back}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            怎么记
            <textarea
              type="text"
              name="trick"
              className="form-control"
              onChange={this.onChange}
              value={trick}
            />
          </label>
        </div>
        <div className="form-group">
          <button
            className="btn btn-primary"
            type="submit"
          >
            生成卡片
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
