import { CenterL } from './Layout'

const Stack = () => {
  return (
    <CenterL max="40ch" min="80%" position="center">
      <h1>Stack</h1>
      <div className="box-l stack-l container border-thin">
        <div className="box-l border" />
        <div className="box-l border" />
        <div className="box-l border" />
        <div className="box-l border small">
          <div className="box-l border" />
          <div className="box-l border" />
        </div>
        <div className="box-l border" />
      </div>
    </CenterL>
  )
}

export default Stack
