import spotifyCommon from '../../../../lib/spotifyCommon'

export const config = {
  api: {
    externalResolver: true,
  },
}

export default async (req, res) => {
  let authInfo = spotifyCommon.getAuthInfo()
  res.send(authInfo)
}
