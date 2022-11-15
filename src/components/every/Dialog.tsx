import styled from 'styled-components'

export const EveryDialog = styled.div`
  .dialog {
    &__header {
      color: red;
    }

    &__body {
      color: green;
    }
    &__foot {
      color: blue;
    }
  }
`

const EveryDialogComponent = ({ children }: never) => {
  return (
    <EveryDialog className="dialog">
      <div className="dialog__header">{children}</div>
    </EveryDialog>
  )
}

export default EveryDialogComponent
