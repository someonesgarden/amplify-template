import { put, takeLatest } from '@redux-saga/core/effects'

function* asyncFailed() {
  yield put({ type: 'SAGA_REFRESH_ACCESSTOKEN' })
}

export default function* asyncWatcher() {
  yield takeLatest('SAGA_ASYNC_FAILED', asyncFailed)
}
