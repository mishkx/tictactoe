import {applyMiddleware, compose, createStore, Store} from 'redux';
import {createLogger} from 'redux-logger';
import rootReducer from 'src/reducers';

const configureStore = (): Store => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any,no-underscore-dangle
    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const logger = createLogger({
        duration: true,
    });

    const store: Store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(logger)),
    );

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').default;
            store.replaceReducer(nextRootReducer());
        })
    }

    return store;
};

const configuredStore = configureStore();

export default configuredStore;
