import { combineReducers } from 'redux';
import game from './game';
import {TAppState} from './types';

const rootReducer = combineReducers<TAppState>({
    game,
});

export default rootReducer;
