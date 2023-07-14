import React, { Component } from "react";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class LifeCycleSample extends Component {
  state = {
    number: 0,
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log("생성자 호출");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps() ...");
    if (nextProps.color !== prevState.color) {
      const R = nextProps.color.substring(1, 3);
      const G = nextProps.color.substring(3, 5);
      const B = nextProps.color.substring(5);
      const newColor = "#" + B + G + R;
      return { color: newColor };
    }
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount() ...");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate() ...", nextProps, nextState);
    //잠시 후 상황에 따라 render() 함수를 호출 할 수 있게 조건을 추가할 것임
    //return true : render() 함수 호출 됨
    //return false : render() 함수 호출되지 않음
    return nextState.number % 10 !== 4 ? true : false;
  }

  componentWillUnmount() {
    //DOM에서 컴포넌트가 제거 되기 직전 호출됨
    //DOM에서 컴포넌트가 제거 되기 직전 마무리 작업 필요하면 이부분에서 구현한다
    console.log("componentWillUnmount() ...");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    //render() 함수에서 만들어진 결과물을 브라우저에 실제 반영되기 직전에 호출되는 함수
    console.log("getSnapshotBeforeUpdate() ...");
    if (prevProps.color !== this.state.color) {
      console.log("prevProps.color", prevProps);
      console.log("this.state.color", this.state.color);
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate() ...");
    if (snapshot) {
      console.log("업데이트 되기 직전 색상", snapshot);
    }
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  handleIncClick = () => {
    this.setState({ number: this.state.number + 1 });
  };

  render() {
    console.log("render()...");

    const style = {
      color: this.props.color,
    };

    const { number } = this.state;

    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {number}
        </h1>
        <p>parent color : {this.props.color}</p>
        <p>child color : {this.state.color}</p>
        <button onClick={this.handleIncClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
