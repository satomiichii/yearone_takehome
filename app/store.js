import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';
import reducer from './reducer';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware.withExtraArgument({ axios }),
      createLogger({ collapsed: true })
    )
  )
);

export default store;
