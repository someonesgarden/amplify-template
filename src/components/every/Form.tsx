import { CenterL } from './Layout'

const Form = () => {
  return (
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
  )
}

export default Form
