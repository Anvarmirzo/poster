import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { forbiddenWordsMiddleware } from './middleware';
import { rootReducer } from './reducers';
import createSagaMiddleware from 'redux-saga';
import { sagaWatcher } from './sagas/sagas';

const saga = createSagaMiddleware();

export const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk, forbiddenWordsMiddleware, saga),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__(),
	),
);
saga.run(sagaWatcher);
