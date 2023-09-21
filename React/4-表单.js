//受控组件
export class App extends PureComponent {
    constructor() {
      super()
      this.state = {
        inputValue: "abcd"
      }
    }
    inputChange(event) {
      this.setState({
        inputValue: event.target.value
      })
    }
    render() {
      const { inputValue } = this.state
      return (
        <div>
        {/* 类似于vue中v-model双向数据绑定*/}
        {/* 由于 inputChange 在每次按键时都会执行并更新 React 的 state，因此显示的值将随着用户输入而更新 */}
        {/* input textarea select用value
            checkbox radio 用checked */}
          <input type="text" value={inputValue} onChange={e => this.inputChange(e)}/>
        </div>
      )
    }
  }
  
//input textarea select用value
//checkbox radio 用checked