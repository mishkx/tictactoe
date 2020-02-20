import {createReducer} from '@reduxjs/toolkit';
import {makeMove} from 'src/actions';
import {FIRST_MOVE, WIN_LINE_LENGTH} from 'src/constants';
import {EPointType} from 'src/types';
import {TGameState} from './types';

export const initialState: TGameState = {
    data: {
        [FIRST_MOVE.coordinates.x]: {
            [FIRST_MOVE.coordinates.y]: FIRST_MOVE.value,
        }
    },
    lastMove: FIRST_MOVE,
    isGameOver: false,
};

const getNextPointType = (currentPoint: EPointType) => {
    const pointTypes = Object.values(EPointType);
    const currentPointIndex = pointTypes.findIndex(value => value === currentPoint);
    const nextPointIndex = currentPointIndex === pointTypes.length - 1 ? 0 : currentPointIndex + 1;
    return pointTypes[nextPointIndex];
};

const getLastMoveMaxWinLineLength = (state: TGameState): number => {
    const {data, lastMove: {value, coordinates: {x, y}}} = state;

    const walk = (startX: number, startY: number, stepX: number, stepY: number, point: EPointType) => {
        let count = 0;
        let isPointExists = true;

        while (isPointExists) {
            const nextX = startX + stepX * (count + 1);
            const nextY = startY + stepY * (count + 1);
            const iterationPoint = data?.[nextX]?.[nextY];

            if (iterationPoint === point) {
                count++;
            } else {
                isPointExists = false;
            }
        }

        return count;
    };

    const vertical = walk(x, y, 0, 1, value) + walk(x, y, 0, -1, value);
    const horizontal = walk(x, y, 1, 0, value) + walk(x, y, -1, 0, value);
    const diagonalUp = walk(x, y, 1, 1, value) + walk(x, y, -1, -1, value);
    const diagonalDown = walk(x, y, -1, 1, value) + walk(x, y, 1, -1, value);

    return Math.max(vertical, horizontal, diagonalUp, diagonalDown) + 1;
};

export default createReducer(initialState, (builder) => builder
    .addCase(makeMove, (state, action) => {
        const pointType = getNextPointType(state.lastMove.value);
        const {x, y} = action.payload;

        state.data[x] = state.data[x] || {};

        if (!state.data[x][y] && !state.isGameOver) {
            state.data[x][y] = pointType;

            state.lastMove = {
                coordinates: action.payload,
                value: pointType,
            };

            state.isGameOver = getLastMoveMaxWinLineLength(state) >= WIN_LINE_LENGTH;
        }
    })
);
