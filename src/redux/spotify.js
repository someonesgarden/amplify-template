const store = {
  access_token: null,
  expires_time: null,
  refresh_token: null,
  updated: '',
  tracks: null,
  toptracks: null,
  pid: null,
  generating: false,
  albums: null,
}

const reducer = {
  SESSION_CHECKED: function (payload) {
    return {
      ...payload.state,
      session_checked: true,
    }
  },

  SET_GENERATING: function (payload) {
    return {
      ...payload.state,
      generating: payload.value,
    }
  },
  SET_PID: function (payload) {
    return {
      ...payload.state,
      pid: payload.value,
    }
  },
  SET_TRACKS: function (payload) {
    return {
      ...payload.state,
      tracks: payload.value,
    }
  },

  SET_ALBUMS: function (payload) {
    return {
      ...payload.state,
      albums: payload.value,
    }
  },
  CLEAR_AUTHORIZATION: function (payload) {
    return {
      ...payload.state,
      access_token: null,
      expires_time: null,
      refresh_token: null,
    }
  },

  SET_AUTHORIZATION: function (payload) {
    return {
      ...payload.state,
      ...payload.value,
    }
  },
}

export default {
  store,
  reducer,
}
