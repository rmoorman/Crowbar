import { createStore, combineReducers, applyMiddleware } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'

import messageReducers from './messages/reducers'
import channelsReducers from './channels/reducers'
import { reducer as cognito } from './cognito/user'

const reducers = combineReducers({
  channels: channelsReducers,
  messages: messageReducers,
  cognito
})

const createStoreWithMiddlware = applyMiddleware(apiMiddleware)(createStore)

const store = createStoreWithMiddlware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store