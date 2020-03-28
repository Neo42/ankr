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
        <h2>全部卡片</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>序号</th>
              <th>正面</th>
              <th>反面</th>
              <th>怎么记</th>
              <th>编辑</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cards.map(({
              id, face, back, trick,
            }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{face}</td>
                <td>{back}</td>
                <td>{trick}</td>
                <td>
                  <button
                    onClick={() => this.handleClick(id)}
                    type="button"
                    className="btn btn-danger btn-sm"
                  >
                    删除
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
