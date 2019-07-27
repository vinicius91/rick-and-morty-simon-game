import { combineReducers } from 'redux';
import character from './character';
import game from './game';

const rootReducer = combineReducers({ character, game });

export default rootReducer;
