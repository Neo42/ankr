/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCards, deleteCard } from '../../actions/cards';

class Cards extends Component {
  componentDidMount() {
    this.props.getCards();
  }

  handleClick= (id) => {
    this.props.deleteCard(id);
  }


  render() {
    return (
      <>
        <h2>Cards</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>
                {' '}
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.cards.map(({
              id, name, email, message,
            }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{message}</td>
                <td>
                  <button
                    onClick={() => this.handleClick(id)}
                    type="button"
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

Cards.propTypes = {
  cards: PropTypes.instanceOf(Array).isRequired,
  getCards: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cards: state.cards.cards,
});

export default connect(mapStateToProps, { getCards, deleteCard })(Cards);
