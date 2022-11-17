//////////////////////// BASIC 認証 /////////////
import { IncomingMessage, ServerResponse } from 'http'

const USER_PASS = process.env.BASIC_AUTH_ID + ':' + process.env.BASIC_AUTH_SEC
const sendUnauthorized = (res: ServerResponse<IncomingMessage> | undefined) => {
  res?.writeHead(401, { 'www-authenticate': 'Basic realm=secret string' })
  res?.end()
}

export const basicAuthorization = (
  req: IncomingMessage | undefined,
  res: ServerResponse<IncomingMessage> | undefined,
) => {
  const authorization = req?.headers['authorization']
  if (typeof authorization === 'undefined') {
    sendUnauthorized(res)
    return
  }

  const matches = authorization.match(/[^\s]+$/)
  if (matches === null) {
    sendUnauthorized(res)
    return
  }

  const userPass = Buffer.from(matches[0], 'base64').toString()
  if (userPass !== USER_PASS) {
    sendUnauthorized(res)
  }
}
