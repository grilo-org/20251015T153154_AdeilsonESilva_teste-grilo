import {ADD_COUNTER} from './types';

export const addCounter = counter => {
  return {
    type: ADD_COUNTER,
    payload: counter,
  };
};
