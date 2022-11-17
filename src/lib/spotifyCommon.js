import moment from 'moment'
import SpotifyWebApi from 'spotify-web-api-node'
import HttpManager from 'spotify-web-api-node/src/http-manager'
import WebApiRequest from 'spotify-web-api-node/src/webapi-request'
export const MODE = 'dev'

const BASE_URL = {
  DEV: 'http://localhost:3000',
  PROD: 'https://main.dvqpdmasf1sf7.amplifyapp.com',
}

const AUTH_COMMON = {
  appId: 'Spotify App Prototype',
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SEC,
  scopes: [
    'user-read-private',
    'ugc-image-upload',
    'playlist-modify-public',
    'user-top-read',
  ],
}

let saveAuth = function (data, req) {
  let params = {}
  if (data['access_token']) {
    params.access_token = data['access_token']
    req.session.access_token = data['access_token']
  }
  if (data['refresh_token']) {
    params.refresh_token = data['refresh_token']
    req.session.refresh_token = data['refresh_token']
  }
  if (data['me']) {
    req.session.me = data['me'].id
  }
  req.session.expires_time = new Date().getTime() + 3600 * 1000
}

let setSpotifyApi = function (req) {
  const AUTHS = {
    ...AUTH_COMMON,
    redirectUri: BASE_URL[MODE] + '/api/callback',
  }

  return new SpotifyWebApi({
    scope: AUTHS.scopes.join(' '),
    clientId: AUTHS.clientId,
    clientSecret: AUTHS.clientSecret,
    redirectUri: AUTHS.redirectUri,
  })
}

let setSpotifyApiPopup = function (req) {
  const AUTHS = {
    ...AUTH_COMMON,
    redirectUri: BASE_URL[MODE] + '/api/callback/popup',
  }
  return new SpotifyWebApi({
    scope: AUTHS.scopes.join(' '),
    clientId: AUTHS.clientId,
    clientSecret: AUTHS.clientSecret,
    redirectUri: AUTHS.redirectUri,
  })
}

const getAuthorizeURL = (req) => {
  const spotifyApi = setSpotifyApi(req)
  let state = ''
  let length = 40
  let possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++) {
    state += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return spotifyApi.createAuthorizeURL(AUTH_COMMON.scopes, state)
}

const getAuthorizeURLPopup = (req) => {
  const spotifyApi = setSpotifyApiPopup()
  let state = ''
  let length = 40
  let possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++) {
    state += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return spotifyApi.createAuthorizeURL(AUTH_COMMON.scopes, state)
}

async function execApi(endpoint, rest, options, callback, req) {
  //const spotifyApi = setSpotifyApi(req);

  if (
    !req.session ||
    req.session.access_token === undefined ||
    (req.session.expires_time &&
      parseInt(req.session.expires_time) < moment(new Date()).unix() * 1000)
  ) {
    //access_tokenがない場合は、再生成する
    // const client_creds = await spotifyApi.clientCredentialsGrant().then(data => data.body);
    // if (client_creds) {
    //   req.session.access_token = client_creds.access_token;
    //   req.session.expires_time = new Date().getTime() + 3600 * 1000;
    // }else {
    //   console.log("no creds and error!");
    // }
    callback(null)
    return
  }

  let builder = WebApiRequest.builder(req.session.access_token)
    .withPath(endpoint)
    .withHeaders({
      'Content-Type': 'application/json',
      'Accept-Language': 'ja;q=1',
    })
  if (options) builder.withQueryParameters(options)

  return builder.build().execute(HttpManager[rest], function (err, data) {
    if (err) {
      callback(null)
      return
    }
    //console.log(endpoint);
    callback(data.body)
  })
}

async function execApiAsync(endpoint, rest, options, req, bodies) {
  const spotifyApi = setSpotifyApi(req)

  if (
    !req.session ||
    req.session.access_token === undefined ||
    (req.session.expires_time &&
      parseInt(req.session.expires_time) < moment(new Date()).unix() * 1000)
  ) {
    //access_tokenがない場合は、再生成するフローを入れる！
    const client_creds = await spotifyApi
      .clientCredentialsGrant()
      .then((data) => data.body)
    if (client_creds) {
      req.session.access_token = client_creds.access_token
      req.session.expires_time = new Date().getTime() + 3600 * 1000
    } else {
      console.log('no creds and error!')
      return
    }
  }

  let builder = WebApiRequest.builder(req.session.access_token)
    .withPath(endpoint)
    .withHeaders({
      'Content-Type': 'application/json',
      'Accept-Language': 'ja;q=1',
    })
  if (options) builder.withQueryParameters(options)
  if (bodies) builder.withBodyParameters(bodies)

  return new Promise((resolve, reject) => {
    builder.build().execute(HttpManager[rest], function (err, data) {
      if (err) {
        console.log(err)
        reject(null)
      }
      resolve(data && data.body)
    })
  })
}

const arrayChunk = ([...array], size = 1) => {
  return array.reduce(
    (acc, value, index) =>
      index % size ? acc : [...acc, array.slice(index, index + size)],
    [],
  )
}

export default {
  saveAuth: saveAuth,
  execApi: execApi,
  execApiAsync: execApiAsync,
  setSpotifyApi: setSpotifyApi,
  setSpotifyApiPopup: setSpotifyApiPopup,
  getAuthorizeURL: getAuthorizeURL,
  getAuthorizeURLPopup: getAuthorizeURLPopup,
  arrayChunk: arrayChunk,
  url: BASE_URL[MODE],
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSec: process.env.SPOTIFY_CLIENT_SEC,
}
