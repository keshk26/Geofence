import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from './reducers/index';

export default function configureStore() {
  let middleware = [];
  let enhancers = [];

  middleware.push(thunk);

  const logger = createLogger({
    level: 'info',
    collapsed: true,
  });

  middleware.push(logger);

  return createStore(rootReducer, applyMiddleware(...middleware));
}
