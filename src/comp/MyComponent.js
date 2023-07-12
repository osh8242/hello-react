import React, { Component } from 'react';

class MyComponent extends Component {

  render() {
    //지역변수 선언
    const {name, age, favoriteNumber} = this.props;

    return (
      <>
      <div>나의 첫번째 컴포넌트</div>
      <div>이름 : {name}</div>
      <div>나이 : {age}</div>
      </>
    );   
  };
}

//export default MyComponent;
export { MyComponent };

