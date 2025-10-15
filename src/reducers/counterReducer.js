import {
  ADD_COUNTER,
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  SELECT_COUNTER,
  REMOVE_COUNTER,
  RESET_COUNTER,
} from '../actions/types';
import {REHYDRATE} from 'redux-persist';

const INITIAL_STATE = [];

const selectItem = paramState => {
  if (!paramState || paramState.length === 0) {
    return false;
  }

  if (paramState.filter(item => item.selected).length === 0) {
    paramState[0].selected = true;
  }
};

const counterReducer = (state = INITIAL_STATE, action) => {
  let newState;

  switch (action.type) {
    case REHYDRATE:
      if (action.payload && action.payload.counters) {
        return action.payload.counters;
      }
      return state;
    case ADD_COUNTER:
      newState = [...state];
      newState.push({number: 0});
      selectItem(newState);
      return newState;
    case REMOVE_COUNTER:
      newState = state.filter(item => !item.selected);
      selectItem(newState);
      return newState;
    case SELECT_COUNTER:
      const counterSelect = state.map((item, index) => {
        if (action.index - 1 === index) {
          item.selected = true;
          return item;
        }

        item.selected = false;
        return item;
      });
      return counterSelect;
    case INCREASE_COUNTER:
      newState = state.map(item => {
        if (item.selected) {
          item.number++;
          return item;
        }

        return item;
      });
      return newState;
    case DECREASE_COUNTER:
      newState = state.map(item => {
        if (item.selected && item.number > 0) {
          item.number--;
          return item;
        }

        return item;
      });
      return newState;
    case RESET_COUNTER:
      newState = state.map(item => {
        if (item.selected) {
          item.number = 0;
          return item;
        }

        return item;
      });
      return newState;
    default:
      return state;
  }
};

export default counterReducer;
