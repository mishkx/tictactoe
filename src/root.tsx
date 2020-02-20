import React from 'react';
import {Provider} from 'react-redux';
import {GameContainer} from 'src/containers';
import store from 'src/store';

const Root: React.FC = () => (
    <Provider store={store}>
        <GameContainer/>
    </Provider>
);

export default Root;
