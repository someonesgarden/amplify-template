import { put } from '@redux-saga/core/effects'
const store = {}

const reducer = {
  ASN_FAILED: (payload) => {
    const error = payload.value || 'asn_failed'
    put({ type: 'SAGA_SESSION_CLEAR' })
    console.log('ASN_FAILED', error)
    // Router.push("/");
    return store
  },
}

export default {
  store: store,
  reducer: reducer,
}
