import { CenterL } from './Layout'

type BoxAreaProps = {
  invert: boolean
  children?: React.ReactNode
}

const BoxArea = ({ invert = false, children }: BoxAreaProps) => {
  return (
    <CenterL max="40ch" min="80%">
      <div className={`box-l ${invert ? 'invert' : 'border'}`}>
        <div className="box-l center">{children}</div>
      </div>
    </CenterL>
  )
}

export default BoxArea
