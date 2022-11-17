import Router from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import BoxArea from '../components/every/BoxArea'
import { basicAuthorization } from '../lib/basicAuth'
import { login, checkExpire } from '../lib/hooks'

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

const PopupResult = () => {
  const dispatch = useDispatch()
  const { access_token, refresh_token, expires_time, product } = useSelector(
    ({ app }) => app,
  )
  useEffect(function () {
    if (!window.opener) {
      Router.push('/popup_error')
    } else {
      dispatch({ type: 'SAGA_SESSION_DATA' })
    }
  }, [])

  useEffect(
    function () {
      if (access_token && refresh_token && expires_time) {
        const valid = refresh_token && checkExpire(expires_time)
        if (valid) {
          window.opener.postMessage({
            mode: 'auth',
            auth: { product, access_token, refresh_token, expires_time },
          })
          // dispatch({type: "SAGA_CUSTOM_API", value: {access_token}});
          dispatch({
            type: 'SET_AUTHORIZATION',
            value: { product, access_token, refresh_token, expires_time },
          })
          window.close()
        } else {
          Router.push('/popup_error')
        }
      }
    },
    [access_token, refresh_token],
  )

  return (
    <StyledContainer>
      <main>
        <BoxArea invert={false}>
          <h2>Authorization Success!</h2>
          <p>please wait while forwarding..</p>
        </BoxArea>
      </main>
    </StyledContainer>
  )
}

PopupResult.getInitialProps = async ({ req, res }) => {
  if (!process.browser) basicAuthorization(req, res)
  return { stars: 123 }
}
export default PopupResult
