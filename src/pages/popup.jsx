import styled from 'styled-components'
import BoxArea from '../components/every/BoxArea'
import { EveryButton } from '../components/every/EveryButton'
import { basicAuthorization } from '../lib/basicAuth'
import { login } from '../lib/hooks'

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

const Popup = () => {
  return (
    <StyledContainer>
      <main>
        <BoxArea invert={false}>
          <h2>Spotify Authorization</h2>
          <p>This is test text</p>
          <EveryButton dir="rtl" style={{ width: '100%' }}>
            <a onClick={() => login('from_popup')}>LOGIN</a>
          </EveryButton>
        </BoxArea>
      </main>
    </StyledContainer>
  )
}

Popup.getInitialProps = async ({ req, res }) => {
  if (!process.browser) basicAuthorization(req, res)
  return { stars: 123 }
}
export default Popup
