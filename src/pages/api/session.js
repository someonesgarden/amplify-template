import { applySession } from 'next-session'

//今回はセッションは使わない！（内部APIは必要としない）
export const options = {
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    maxage: 1000 * 60 * 60 * 2, // 2時間
  },
}

export const config = {
  api: {
    externalResolver: true,
  },
}

export default async (req, res) => {
  await applySession(req, res, options)
}
