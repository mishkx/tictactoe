import React from 'react';
import styles from './Wrapper.module.css';

const Wrapper: React.FC = ({children}) => (
    <div className={styles.wrapper}>
        {children}
    </div>
);

export default Wrapper;
