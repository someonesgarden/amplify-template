import { getSession } from '../../lib/get-session.js'

export const config = {
  api: {
    externalResolver: true,
  },
}

export default async (req, res) => {
  await getSession(req, res)
}
