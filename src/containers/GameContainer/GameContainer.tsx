import range from 'lodash/range';
import React, {memo, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {makeMove} from 'src/actions';
import {Gift, Row, Wrapper} from 'src/components';
import {DEFAULT_COORDINATES, LENGTH_X, LENGTH_Y} from 'src/constants';
import {selectGameState} from 'src/selectors';
import {TCell, TCoordinates} from 'src/types';

const GameContainer: React.FC = () => {
    const dispatch = useDispatch();
    const state = useSelector(selectGameState);

    const handleMakeMove = useCallback((coordinates: TCoordinates) => {
        dispatch(makeMove(coordinates));
    }, [dispatch]);

    const axisY = range(DEFAULT_COORDINATES.y + LENGTH_Y, DEFAULT_COORDINATES.y - LENGTH_Y);
    const axisX = range(DEFAULT_COORDINATES.x - LENGTH_X, DEFAULT_COORDINATES.x + LENGTH_X);

    const rowsHtml = axisY.map((y) => {
        const cells: TCell[] = axisX.map((x) => ({
            coordinates: {x, y},
            value: state.data?.[x]?.[y],
        }));
        return (
            <Row
                key={y}
                cells={cells}
                handleMakeMove={handleMakeMove}
            />
        );
    });

    return (
        <Wrapper>
            {state.isGameOver && <Gift winner={state.lastMove.value}/>}
            <div>
                {rowsHtml}
            </div>
        </Wrapper>
    );
};

export default memo(GameContainer);
