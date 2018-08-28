import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/auth';
import orgReducer from './reducers/organization';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	combineReducers({
		auth: authReducer,
		organization: orgReducer
	}),
	composeEnhancers(
		applyMiddleware(thunk),
	)
);

export default store;