import DummyImage from './DummyImage'
import Icon from './Icon'

const CardGrids = () => {
  return (
    <div className="grid" style={{ width: '100%' }}>
      <div className="box-l invert">
        <div>
          <DummyImage ratio={0.7} width={100} size={4} />
          <p>
            <Icon /> AAdfsdfsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf
            sdfsdfsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf
            sdfsdfsdfsdfsdfsdf
          </p>
        </div>
      </div>

      <div className="box-l invert">
        <div>
          <DummyImage ratio={0.7} width={100} size={4} />
          <p>
            sdfsdfsdfsdfsdfsdf <Icon /> sdfsdfsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf
            sdfsdfsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf
            sdfsdfsdfsdfsdfsdf
          </p>
        </div>
      </div>

      <div className="box-l invert">
        <div>
          <DummyImage ratio={0.7} width={100} size={4} />
          <p>
            sdfsdfsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf
            sdfsdfsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf
            sdfsdfsdfsdfsdfsdf{' '}
          </p>
        </div>
      </div>

      <div className="box-l invert">
        <div>
          <DummyImage ratio={0.7} width={100} size={4} />
          <p>
            sdfsdfsdfsdfsdfsdf sdfsdsdfsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf
            sdfsdfsdfsdfsdfsdf{' '}
          </p>
        </div>
      </div>

      <div className="box-l invert">
        <div>
          <DummyImage ratio={0.7} width={100} size={4} />
          <p>
            sdfsdfsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf
            sdfsdfsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf
          </p>
        </div>
      </div>

      <div className="box-l border">
        <div>
          {/*<DummyImage ratio={0.7} width={100} size={4} />*/}
          <div className="frame" style={{ marginBottom: '20px' }}>
            <img src="/images/dummy.jpg" />
          </div>
          <p>
            sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardGrids
