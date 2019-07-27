import { combineReducers } from 'redux';
import characters from './character';
import game from './game';

const rootReducer = combineReducers({ characters, game });

export default rootReducer;
