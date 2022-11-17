import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import createRootReducer from './reducer'
let store

export const sagaMiddleware = createSagaMiddleware()

function configureStore() {
  return createStore(
    createRootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  )
}

export function initializeStore(preloadedState) {
  let _store = store ?? configureStore()
  if (preloadedState && store) {
    _store = configureStore()
    store = undefined
  }

  sagaMiddleware.run(rootSaga)

  if (typeof window === 'undefined') return _store
  if (!store) store = _store
  return _store
}

export function useStore(initialState) {
  return useMemo(() => initializeStore(initialState), [initialState])
}
