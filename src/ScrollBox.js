import React, { Component } from 'react';

class ScrollBox extends Component {
  scrollToBottom = () => {
    this.outerBox.scrollTop =
      this.outerBox.scrollHeight - this.outerBox.clientHeight;
  };
  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative',
      background: 'red',
    };
    const innerStyle = {
      width: '100%',
      height: '1000px',
      background: 'green',
    };

    return (
      <>
        <div style={style} ref={(ref) => (this.outerBox = ref)}>
          <div style={innerStyle}></div>
        </div>
        <button onClick={this.scrollToBottom}>바닥으로(컴포넌트)</button>
      </>
    );
  }
}
export default ScrollBox;
