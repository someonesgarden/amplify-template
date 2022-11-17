import { nextCsrf } from 'next-csrf'

const options = {
  secret: 'sadf2waf2aesdfdsf11ff1ff1',
}

export const { csrf, csrfToken } = nextCsrf(options)
