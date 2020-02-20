import React, {memo} from 'react';
import {EPointType} from 'src/types';
import styles from './Gift.module.css';

type TGiftProps = {
    winner: EPointType;
};

const Gift: React.FC<TGiftProps> = ({winner}) => (
    <div className={styles.gift}>{winner} is winner!</div>
);

export default memo(Gift);
