类组件
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            n: 0
        }
    }

    addNum = () => {
        this.setState({n: this.state.n + 1})
    }

    render() {
        return (
            <div className='App'>
                <span>n:{this.state.n}</span>
                <button onClick={this.addNum}>n+1</button>
            </div>
        )
    }
}
函数组件
//纯函数，输入props，输出JSX
const App = props => {
    const [n,setN] = React.useState(0)
    function addNum(){
        setN(n + 1)
    }
    return (
        <div className='App'>
            {n}
            <button onClick={addNum}>+1</button>
        </div>
    )
}
//函数组件没有state => React v16.8.0推出Hooks API，其中的一个API叫做useState可以解决问题
//函数组件没有生命周期 => React v16.8.0推出Hooks API，其中的一个API叫做useEffect可以解决问题

