import styled from 'styled-components'

type DummyImageProps = {
  width?: number
  size?: number
  ratio?: number
}

const StyledSVG = styled.svg`
  margin-bottom: 1rem;
`

const DummyImage = ({ width = 300, size = 10, ratio = 1 }: DummyImageProps) => {
  const st0 = {
    fill: 'none',
    stroke: '#000000',
    strokeWidth: size,
    strokeMiterlimit: 10,
  }

  return (
    <StyledSVG
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox={`0 0 ${width} ${width * ratio}`}
      width="100%"
      height="100%"
    >
      <rect
        style={st0}
        x={size / 2}
        y={size / 2}
        width={width - size}
        height={width * ratio - size}
      />
      <line
        style={st0}
        x1={size / 2}
        y1={size / 2}
        x2={width - size}
        y2={width * ratio - size}
      />
    </StyledSVG>
  )
}

export default DummyImage
