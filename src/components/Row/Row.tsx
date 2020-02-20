import React, { memo } from 'react';
import {TCell, TCoordinates} from 'src/types';
import {Cell} from '../index';
import styles from './Row.module.css';

type RowProps = {
    cells: TCell[];
    handleMakeMove(coordinates: TCoordinates): void;
};

const Row: React.FC<RowProps> = ({cells, handleMakeMove}) => (
    <div className={styles.row}>
        {cells.map(({coordinates, value}) => (
            <Cell
                key={coordinates.x}
                coordinates={coordinates}
                handleMakeMove={handleMakeMove}
                value={value}
            />
        ))}
    </div>
);

export default memo(Row);
