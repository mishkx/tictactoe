import {createAction} from '@reduxjs/toolkit';
import {TCoordinates} from 'src/types';

const MAKE_MOVE = 'MAKE_MOVE';

export const makeMove = createAction<TCoordinates>(MAKE_MOVE);
