import { all, put } from 'redux-saga/effects'
import asyncWatcher from './async'
import spotifyWatcher from './spotify'

export default function* rootSaga() {
  try {
    yield all([spotifyWatcher(), asyncWatcher()])
  } catch (error) {
    console.log(error)
    yield put({ type: 'ASN_FAILED', value: error })
  }
}
