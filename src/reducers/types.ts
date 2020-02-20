import {TMove, EPointType} from '../types';

export type TAppState = {
    game: TGameState;
}

export type TGameState = {
    data: TAxisX;
    lastMove: TMove;
    isGameOver: boolean;
};

export type TAxisX = {
    [point: number]: TAxisY;
}

export type TAxisY = {
    [point: number]: EPointType;
}
