import styled from 'styled-components'

export const BoxL = styled.div`
  display: block;
  padding: var(--s1);
  &.border-thin {
    border-width: var(--border-thin);
  }

  & * + * {
    margin-block-start: var(--s1);
  }

  &.large {
    & * + * {
      margin-block-start: var(--s2);
    }
  }

  &.small {
    & * + * {
      margin-block-start: var(--s-1);
    }
  }
`
