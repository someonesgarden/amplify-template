import type { NextPage } from 'next'
import styled from 'styled-components'
import BoxArea from '../components/every/BoxArea'
import CardGrids from '../components/every/CardGrids'
import Footer from '../components/every/Footer'
import Form from '../components/every/Form'
import Grids from '../components/every/Grids'
import Hero from '../components/every/Hero'
import NewsArea from '../components/every/News'
import Reel from '../components/every/Reel'
import SearchBar from '../components/every/SearchBar'
import Stack from '../components/every/Stack'
import { basicAuthorization } from '../lib/basicAuth'

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

const Home: NextPage = (props) => {
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


Home.getInitialProps = async ({ req, res }) => {
  if (!process.browser) basicAuthorization(req, res)
  return { stars: 123 }
}
export default Home
