import { put, takeLatest } from '@redux-saga/core/effects'
import axios from 'axios'
// import { arrayChunk } from '../utils/common'

function* SAGA_SESSION_DATA() {
  console.log('SAGA_SESSION_DATA!')
  const result = yield axios
    .get('/api/spotify/auth/sessionData')
    .then((res) => res.data)
  yield put({ type: 'SESSION_CHECKED' })
  yield
  if (result) {
    console.log('result', result)
    yield put({ type: 'SET_AUTHORIZATION', value: result })
  } else {
    console.log('no data..')
    yield put({ type: 'CLEAR_AUTHORIZATION' })
  }
}

function* SAGA_GET_TRACKS(action) {
  const { pid } = action.value
  const entry_point = pid
    ? '/api/spotify/playlists/tracks'
    : '/api/spotify/me/top/tracks'
  const params = pid ? { params: { playlistId: pid } } : {}
  let result = yield axios.get(entry_point, params).then((res) => res.data)

  yield
  if (result) {
    if (pid) {
      yield put({
        type: 'SET_PARAM',
        value: { key: 'default_tracks', val: result },
      })
    } else {
      yield put({ type: 'SET_PARAM', value: { key: 'toptracks', val: result } })
    }
  }
}

function* SAGA_RECOMMENDATIONS(action) {
  const { params, seeds } = action.value
  let result = yield axios
    .get('/api/spotify/recommendations', { params: { seeds, params } })
    .then((res) => res.data)
  yield
  if (result) {
    yield put({
      type: 'SET_PARAM',
      value: { key: 'tracks', val: result.tracks },
    })
  } else {
    yield put({ type: 'SET_PARAM', value: { key: 'tracks', val: [] } })
  }
}

export default function* spotifyWatcher() {
  yield takeLatest('SAGA_RECOMMENDATIONS', SAGA_RECOMMENDATIONS)
  yield takeLatest('SAGA_SESSION_DATA', SAGA_SESSION_DATA)
  yield takeLatest('SAGA_TOP_TRACKS', SAGA_GET_TRACKS)
  yield takeLatest('SAGA_PLAYLIST_TRACKS', SAGA_GET_TRACKS)
}
