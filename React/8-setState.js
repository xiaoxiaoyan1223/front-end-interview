//不可变值  普通值 数组 对象
//可能是异步更新
//可能会被合并  传入对象会被合并  函数不会

import React, { Component } from 'react'
//函数组件默认没有state
export default class App extends Component {
  constructor(props) {
    super(props);
//state要在构造函数中定义
    this.state = {
      message: "Hello World"
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={e => this.changeText()}>改变文本</button>
      </div>
    )
  }
//不要直接修改state  this.state.message='ok'是在错误的  state是不可变值
//正确做法如下
 changeText() {
    this.setState({
      message: "文本已经被改变"
    })
     //异步更新 拿不到最新值
    console.log(this.state.message); // Hello World
  }
  //加一个回调函数可同步  加setTimeout也可以实现同步
  changeText() {
    this.setState({
      message: "文本已经被改变"
    }, () => {
      console.log(this.state.message); // 文本已经被改变
    });
  }
  //自己定义的DOM事件，setState是同步的
  componentDidUpdate(prevProps, provState, snapshot) {
    document.body.addEventListener('click',()=>{
        this.setState({
            message:this.state.message+'ok'
        })
    })
    console.log(this.state.message);
  }
  
  
  }


