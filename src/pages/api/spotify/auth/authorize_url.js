import spotifyCommon from '../../../../lib/spotifyCommon'
import mySession from '../../session'

export const config = {
  api: {
    externalResolver: true,
  },
}

export default async (req, res) => {
  await mySession(req, res)
  if (req.query.backto) req.session.backto = req.query.backto
  let authorizeURL = spotifyCommon.getAuthorizeURL(req)
  res.send(authorizeURL)
}
