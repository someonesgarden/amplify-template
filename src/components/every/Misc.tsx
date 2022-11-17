import { EveryButton } from './EveryButton'
import Icon from './Icon'
import { CenterL } from './Layout'

const Misc = () => {
  return (
    <>
      <div
        style={{
          height: '300px',
          width: '100%',
          border: '1rem solid black',
          position: 'relative',
        }}
      >
        <h1
          className="imposter contain"
          style={{
            border: 'thin solid red',
            fontSize: '8rem',
            background: 'transparent',
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            '--positioning': 'absolute',
          }}
        >
          HELLO!
        </h1>
      </div>

      <CenterL max="40ch" min="80%">
        <div className="s1_squares">
          <div className="s-5" />
          <div className="s-4" />
          <div className="s-3" />
          <div className="s-2" />
          <div className="s-1" />
          <div className="s1" />
          <div className="s2" />
          <div className="s3" />
          <div className="s4" />
          <div className="s5" />
        </div>
      </CenterL>

      <div style={{ display: 'flex', gap: 10 }}>
        <EveryButton>
          <Icon /> Close
        </EveryButton>

        <EveryButton dir="rtl">
          <Icon /> Close
        </EveryButton>
      </div>
    </>
  )
}

export default Misc
