import { IncomingMessage, ServerResponse } from 'http'
import type { NextPage } from 'next'
import styled from 'styled-components'
import BoxArea from '../components/every/BoxArea'
import CardGrids from '../components/every/CardGrids'
import Footer from '../components/every/Footer'
//import Form from '../components/every/Form'
import Grids from '../components/every/Grids'
import Hero from '../components/every/Hero'
import NewsArea from '../components/every/News'
import Reel from '../components/every/Reel'
import SearchBar from '../components/every/SearchBar'
import Stack from '../components/every/Stack'

const StyledContainer = styled.div`
  padding: 0 2rem;
  main {
    min-height: 100vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Home: NextPage = () => {
  return (
    <StyledContainer>
      <main>
        <Hero />
        <NewsArea />

        <BoxArea invert={false}>
          <h2>this is box</h2>
          <p>
            This is test text, sample text is this. this is for you. This is
            test text, sample text is this. this is for you. This is test text,
            sample text is this. this is for you.
          </p>
        </BoxArea>

        <BoxArea invert={true}>
          <h2>this is box</h2>
          <p>
            This is test text, sample text is this. this is for you. This is
            test text, sample text is this. this is for you. This is test text,
            sample text is this. this is for you.
          </p>
        </BoxArea>
        <SearchBar />
        <Grids />
        <CardGrids />
        <Stack />
        {/*<Form />*/}
        <Reel />
      </main>
      <Footer />
    </StyledContainer>
  )
}

//////////////////////// BASIC 認証 /////////////
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

Home.getInitialProps = async ({ req, res }) => {
  if (!process.browser) basicAuthorization(req, res)
  return { stars: 123 }
}
export default Home
