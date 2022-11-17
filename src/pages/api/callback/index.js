import spotifyCommon from '../../../lib/spotifyCommon'
import mySession from '../session'

export const config = {
  api: {
    externalResolver: true,
  },
}

export default async (req, res) => {
  await mySession(req, res)

  const error = req.query.error
  if (error === 'access_denied') {
    const backto = req.session.backto ? req.session.backto : '/'
    res.redirect(backto)
    return
  }

  const code = req.query.code
  const spotifyApi = spotifyCommon.setSpotifyApi()
  spotifyApi.authorizationCodeGrant(code).then((data) => {
    const { access_token, refresh_token } = data.body
    const expires_time = new Date().getTime() + 300 * 1000
    req.session.access_token = access_token
    req.session.refresh_token = refresh_token
    req.session.expires_time = expires_time

    spotifyApi.setAccessToken(access_token)

    spotifyApi.getMe().then(
      (res2) => {
        data.body.me = res2.body
        spotifyCommon.saveAuth(data.body, req)
        const me = data.body
          ? data.body.me
            ? data.body.me.id
            : data.body.display_name
            ? data.body.display_name
            : ''
          : ''
        const backto = req.session.backto ? req.session.backto : '/'

        req.session.access_token = access_token
        req.session.refresh_token = refresh_token
        req.session.expires_time = expires_time
        req.session.me = me
        req.session.product = res2.body.product
        res.redirect(
          backto + '?expires_time=' + req.session.expires_time + '&me=' + me,
        )
        //res.redirect(backto+'?expires_time='+req.session.expires_time);
      },
      (err) => {
        res.redirect('/')
        console.log('Could not get me!', err)
        res.send('error;' + err.message)
      },
    )
  })
}
