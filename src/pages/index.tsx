import type { NextPage } from 'next'
import styled from 'styled-components'
import DummyImage from '../components/every/DummyImage'
import { EveryButton } from '../components/every/EveryButton'
import Footer from '../components/every/Footer'
import Icon from '../components/every/Icon'
import { CenterL } from '../components/every/Layout'

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

        <CenterL max="40ch" min="80%">
          <div className="box-l stack-l border">
            <div className="box-l large">
              <div className="box-l small">
                名前
                <div className="box-l border" />
              </div>
              <div className="box-l small">
                メールアドレス
                <div className="box-l border" />
                <span>正しいメールアドレスを入力してください</span>
              </div>
            </div>
          </div>
        </CenterL>
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
        <CenterL max="40ch" min="80%">
          <div className="box-l border">
            <div className="box-l center">
              <h2>this is box</h2>
              <p>
                This is test text, sample text is this. this is for you. This is
                test text, sample text is this. this is for you. This is test
                text, sample text is this. this is for you.
              </p>
            </div>
          </div>
        </CenterL>

        <CenterL max="80vw" min="80%">
          <div className="box-l invert">
            <div className="box-l center">
              <h2>this is box</h2>
              <p>
                This is test text, sample text is this. r you. This is test
                text, sample text is this. this is for you. This is test text,
                sample text is this. this is for you.{' '}
              </p>
            </div>
          </div>
        </CenterL>

        <div className="container invert">
          <div className="inner with-sidebar">
            <div className="stack-l sidebar">
              <ul className="">
                <DummyImage ratio={0.7} />
                <li>vitae cubilia quisque</li>
                <li>vitae cubilia quisque</li>
                <li>vitae cubilia quisque</li>
                <li>vitae cubilia quisque</li>
                <li>vitae cubilia quisque</li>
              </ul>
            </div>

            <div className="stack-l not-sidebar">
              <h1>Our documentation</h1>
              <p className="center">
                ornare lorem faucibus odio enim sodales pretium sit blandit in
                egestas duis nec justo blandit quam ac ultricies sapien leo diam
                enim efficitur vulputate luctus erat bibendum euismod dui nec
                ipsum et tellus arcu ipsum nec pellentesque enim
              </p>
              <p>
                ornare lorem faucibus odio enim sodales pretium sit blandit in
                egestas duis nec justo blandit quam ac ultricies sapien leo diam
                enim efficitur vulputate luctus erat bibendum euismod dui nec
                ipsum et tellus arcu ipsum nec pellentesque enim
              </p>
              <p>
                ornare lorem faucibus odio enim sodales pretium sit blandit in
                egestas duis nec justo blandit quam ac ultricies sapien leo diam
                enim efficitur vulputate luctus erat bibendum euismod dui nec
                ipsum et tellus arcu ipsum nec pellentesque enim
              </p>
              <p>
                ornare lorem faucibus odio enim sodales pretium sit blandit in
                egestas duis nec justo blandit quam ac ultricies sapien leo diam
                enim efficitur vulputate luctus erat bibendum euismod dui nec
                ipsum et tellus arcu ipsum nec pellentesque enim
              </p>
              <p>
                ornare lorem faucibus odio enim sodales pretium sit blandit in
                egestas duis nec justo blandit quam ac ultricies sapien leo diam
                enim efficitur vulputate luctus erat bibendum euismod dui nec
                ipsum et tellus arcu ipsum nec pellentesque enim
              </p>
              <p>
                ornare lorem faucibus odio enim sodales pretium sit blandit in
                egestas duis nec justo blandit quam ac ultricies sapien leo diam
                enim efficitur vulputate luctus erat bibendum euismod dui nec
                ipsum et tellus arcu ipsum nec pellentesque enim
              </p>
            </div>
          </div>
        </div>

        <div className="input-container">
          <div className="inner with-input">
            <input type="text" />
            <button>Search</button>
          </div>
        </div>

        <div className="switcher">
          <div style={{ width: '100%' }}>
            <div className="box-l border">
              <p style={{ minWidth: 100 }}>
                <Icon /> This is it.
              </p>
            </div>
            <div className="box-l border">
              <p style={{ minWidth: 100 }}>This is it.</p>
            </div>
            <div className="box-l border">
              <p style={{ minWidth: 100 }}>This is it.</p>
            </div>
            <div className="box-l border">
              <p style={{ minWidth: 100 }}>This is it.</p>
            </div>
            <div className="box-l border">
              <p style={{ minWidth: 100 }}>This is it.</p>
            </div>
            <div className="box-l border">
              <p style={{ minWidth: 100 }}>This is it.</p>
            </div>
          </div>
        </div>

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

        <div className="grid" style={{ width: '100%' }}>
          <div className="box-l invert">
            <div>
              <DummyImage ratio={0.7} width={100} size={4} />
              <p>
                <Icon /> AAdfsdfsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf
                sdfsdfsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf
                sdfsdfsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf
              </p>
            </div>
          </div>

          <div className="box-l invert">
            <div>
              <DummyImage ratio={0.7} width={100} size={4} />
              <p>
                sdfsdfsdfsdfsdfsdf <Icon /> sdfsdfsdfsdfsdfsdf
                sdfsdfsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf
                sdfsdfsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf
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
        <div className="invert" style={{ width: '100%' }}>
          <div className="reel">
            <div className="box-l border">reel</div>
            <div className="box-l border">reel</div>
            <div className="box-l border">reel</div>
            <div className="box-l border">reel</div>
            <div className="box-l border">reel</div>
            <div className="box-l border">reel</div>
            <div className="box-l border"></div>
          </div>
        </div>

        <div
          style={{
            height: '300px',
            width: '800px',
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

        <div style={{ display: 'flex', gap: 10 }}>
          <EveryButton>
            <Icon /> Close
          </EveryButton>

          <EveryButton dir="rtl">
            <Icon /> Close
          </EveryButton>
        </div>
      </main>
      <Footer />
    </StyledContainer>
  )
}

export default Home
