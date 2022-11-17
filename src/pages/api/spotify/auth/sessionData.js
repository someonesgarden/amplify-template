import moment from 'moment'
import spotifyCommon from '../../../../lib/spotifyCommon'
import mySession from '../../session'

export const config = {
  api: {
    externalResolver: true,
  },
}

export default async (req, res) => {
  await mySession(req, res)

  const spotifyApi = spotifyCommon.setSpotifyApi(req)
  //const expires_time  =  req.session.expires_time;
  //const is_valid = parseInt(expires_time) > moment(new Date()).unix()*1000;

  let refresh_token = req.session.refresh_token
  let product = req.session.product

  if (!refresh_token) {
    delete req.session.access_token
    delete req.session.expires_time
    delete req.session.me
    delete req.session.product
    res.send(null)
  } else {
    spotifyApi.setRefreshToken(refresh_token)
    spotifyApi.refreshAccessToken().then(
      function (data) {
        const { access_token } = data.body
        const expires_time = moment(new Date()).unix() * 1000 + 300 * 1000

        spotifyApi.setAccessToken(access_token)

        spotifyApi.getMe().then(
          (res2) => {
            data.body.me = res2.body
            spotifyCommon.saveAuth(data.body, req)
            const me = data.body.me.id ? data.body.me.id : data.body.me
            // if(!req.session.access_token)  req.session.access_token  = access_token;
            // if(!req.session.refresh_token) req.session.refresh_token = refresh_token;
            // if(!req.session.expires_time)  req.session.expires_time  = expires_time;
            req.session.access_token = access_token
            req.session.refresh_token = refresh_token
            req.session.expires_time = expires_time
            if (!req.session.me) req.session.me = me
            if (!req.session.product) req.session.product = product
            res.send({ access_token, refresh_token, expires_time, me, product })
          },
          (err) => {
            delete req.session.refresh_token
            delete req.session.access_token
            delete req.session.expires_time
            delete req.session.me
            delete req.session.product
            res.send(null)
          },
        )
      },
      function (err) {
        delete req.session.refresh_token
        delete req.session.access_token
        delete req.session.expires_time
        delete req.session.me
        delete req.session.product
        res.send(null)
      },
    )
  }
}
