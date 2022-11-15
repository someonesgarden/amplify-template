import * as React from 'react'
import styled from 'styled-components'
import { toPropValue } from '../../utils/styles'

interface CenterLProps {
  children?: React.ReactNode
  min?: string
  max?: string
  position?: string
}

const getMargin = ({ children }: CenterLProps) => (children ? '.0em' : '0em')

export const CenterL = styled.div<CenterLProps>`
  ${({ max, min, position }) => {
    const styles = []
    max && styles.push(toPropValue('max-width', max))
    min && styles.push(toPropValue('min-width', min))
    position && styles.push(toPropValue('text-align', position))
    return styles.join('\n')
  }}

  display: block;
  box-sizing: content-box;
  margin-inline: auto;
  max-inline-size: 65ch;
  &::before,
  &::after {
    content: '';
  }
  ::before {
    margin-right: ${getMargin};
  }
  ::after {
    margin-left: ${getMargin};
  }
`
