/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SPOTIFY_CLIENT_ID: `${process.env.SPOTIFY_CLIENT_ID}`,
    SPOTIFY_CLIENT_SEC: `${process.env.SPOTIFY_CLIENT_SEC}`,
    BASIC_AUTH_ID: `${process.env.BASIC_AUTH_ID}`,
    BASIC_AUTH_SEC: `${process.env.BASIC_AUTH_SEC}`,
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: (() => {
    let compilerConfig = {
      // styledComponentsの有効化
      styledComponents: true,
    }

    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...compilerConfig,
        // 本番環境ではReact Testing Libraryで使用するdata-testid属性を削除
        reactRemoveProperties: { properties: ['^data-testid$'] },
      }
    }
    return compilerConfig
  })(),
  async rewrites() {
    return [
      {
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:match*`,
        destination: `${process.env.API_BASE_URL}/:match`,
      },
    ]
  },
}

module.exports = nextConfig
