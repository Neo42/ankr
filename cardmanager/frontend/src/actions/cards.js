import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import {
  GET_CARDS, DELETE_CARD, ADD_CARD,
} from './types';

// GET CARDS
export const getCards = () => (dispatch, getState) => {
  axios
    .get('/api/cards/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_CARDS,
        payload: res.data,
      });
    }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE CARD
export const deleteCard = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/cards/${id}`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({
        deleteCard: '卡片已删除',
      }));
      dispatch({
        type: DELETE_CARD,
        payload: id,
      });
    }).catch(console.log);
};

// ADD CARD
export const addCard = (card) => (dispatch, getState) => {
  axios
    .post('/api/cards/', card, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({
        addCard: '卡片已添加',
      }));
      dispatch({
        type: ADD_CARD,
        payload: res.data,
      });
    }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
