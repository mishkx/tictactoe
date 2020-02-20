import {TCoordinates, TMove, EPointType} from 'src/types';

export const DEFAULT_COORDINATES: TCoordinates = {
    x: 0,
    y: 0,
};

export const FIRST_MOVE: TMove = {
    coordinates: DEFAULT_COORDINATES,
    value: EPointType.cross
};

export const LENGTH_X = 32;
export const LENGTH_Y = 16;

export const WIN_LINE_LENGTH = Number(process.env.REACT_APP_WIN_LINE_LENGTH) || 5;
