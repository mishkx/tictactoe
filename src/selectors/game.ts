import {createSelector, Selector} from 'reselect';
import {initialState} from 'src/reducers/game';
import {TAppState, TGameState} from 'src/reducers/types';

export const gameStateSelector: Selector<TAppState, TGameState> = (state) => {
    return state.game || initialState;
};

export const selectGameState = createSelector(
    gameStateSelector,
    (state) => state,
);
