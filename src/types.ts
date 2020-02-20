export enum EPointType {
    cross = 'X',
    nought = 'O',
}

export type TCoordinates = {
    x: number;
    y: number;
};

export type TMove = {
    coordinates: TCoordinates;
    value: EPointType;
};

export type TCell = {
    coordinates: TCoordinates;
    value?: EPointType;
};
