import asyncStore from './async'
import spotifyStore from './spotify'

const state0 = Object.assign({}, spotifyStore.store, asyncStore.store)
export const state = state0

const commonReducer = (payload) => {
  const reducer = Object.assign({}, spotifyStore.reducer, asyncStore.reducer)

  if (reducer[payload.actionType]) {
    return Object.assign({}, state, reducer[payload.actionType](payload))
  } else {
    return payload.state
  }
}

export const tasksReducer = (state = state0, action) => {
  return commonReducer({
    state: state,
    value: action.value,
    actionType: action.type,
  })
}
