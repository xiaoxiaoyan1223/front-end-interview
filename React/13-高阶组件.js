////HOC
//高阶组件不是一种功能而是一种模式，在此定义多个组件的公共逻辑
//模式比较简单 但是会增加组件层级
import React from 'react'
const withMouse=(component)=>{
    class WithMouseComponent extends React.Component{
        constructor(props){
            super(props)
            this.state={x:0,y:0}
        }
        handleMouseMove=(event)=>{
            this.setState({
                x:event.clientX,
                y:event.clientY
            })
        }
        render(){
            return(
                <div onMouseMove={this.handleMouseMove}>
                    {/* 1.透传所有的props 2.增加mouse属性 */}
                    <Component {...this.props} mouse={this.state}/>
                </div>
            )
        }
    }
    return withMouseComponent
}
const App=(props)=>{
    const {x,y}=props.mouse
    return (
        <div>
            <h1>The mouse position is ({x},{y})</h1>
        </div>
    )
}
export default withMouse(App)

////Render Props核心思想 通过一个函数将class组件的state作为props传递给纯函数组件
//代码比较简洁 但是学习成本比较高