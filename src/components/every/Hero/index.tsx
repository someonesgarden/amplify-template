import DummyImage from '../DummyImage'
import Icon from '../Icon'
import { CenterL } from '../Layout'

const Hero = () => {
  return (
    <div className="box-l cover invert">
      <CenterL max="40ch" min="100%">
        <div
          className="cluster"
          style={{
            height: 80,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ height: '100%' }}>
            <DummyImage ratio={0.7} width={60} size={4} />
          </div>
          <div className="cluster">
            <div className="border small">
              <a className="with-icon">
                <Icon /> menu1
              </a>
            </div>
            <div className="border small">
              <a>menu2</a>
            </div>
            <div className="border small">
              <a>menu3</a>
            </div>
            <div className="border small">
              <a>menu4</a>
            </div>
            <div className="border small">
              <a>menu5</a>
            </div>
          </div>
        </div>
      </CenterL>

      <div className="cover__center">
        <h1>CENTER</h1>
        <p>description</p>
      </div>

      <div>bottom</div>
    </div>
  )
}
export default Hero
