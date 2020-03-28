import axios from 'axios';

import { GET_ANKRS, DELETE_ANKR, ADD_ANKR } from './types';

// GET ANKRS
export const getCards = () => (dispatch) => {
  axios
    .get('/api/card/')
    .then((res) => {
      dispatch({
        type: GET_ANKRS,
        payload: res.data,
      });
    }).catch(console.log);
};

// DELETE ANKR
export const deleteCard = (id) => (dispatch) => {
  axios
    .delete(`/api/card/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_ANKR,
        payload: id,
      });
    }).catch(console.log);
};

// ADD ANKR
export const addCard = (card) => (dispatch) => {
  axios
    .post('/api/card/', card)
    .then((res) => {
      dispatch({
        type: ADD_ANKR,
        payload: res.data,
      });
    }).catch(console.log);
};

export const m = 1;
