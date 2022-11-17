import nextSession from 'next-session'

const options = {
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 60 * 60 * 2,
  },
}

export const getSession = nextSession(options)
