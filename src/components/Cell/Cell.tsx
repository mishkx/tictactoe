import React, {memo} from 'react';
import {TCoordinates, TCell} from 'src/types';
import styles from './Cell.module.css';

type TCellProps = TCell & {
    handleMakeMove(coordinates: TCoordinates): void;
};

const Cell: React.FC<TCellProps> = ({coordinates, handleMakeMove, value}) => (
    <div className={styles.cell} onClick={() => handleMakeMove(coordinates)}>{value}</div>
);

export default memo(Cell);
