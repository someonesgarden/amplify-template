import DummyImage from './DummyImage'
import { CenterL } from './Layout'

const Footer = () => {
  return (
    <footer style={{ marginBottom: '5rem' }}>
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
              <a>menu1</a>
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
    </footer>
  )
}

export default Footer
