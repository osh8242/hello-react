import React, { Component } from 'react';
import './EventPractice.css';

class EventPractice extends Component {
  state = {
    message: '',
    username: '',
    userid: '',
    passwd: '',
  };

  //   handlerChangeMessage = (e) => {
  //     console.log(e.target);
  //     this.setState({ [e.target.name]: e.target.value });
  //   };
  //   handlerChangeUsername = (e) => {
  //     console.log(e.target);
  //     // this.setState({ username: e.target.value });
  //     // this.setState({ username: e.target.value });
  //     this.setState({ [e.target.name]: e.target.value });
  //   };
  handlerChange = (e) => {
    //    console.log(e.target);
    this.setState({ [e.target.name]: e.target.value });
  };
  handlerClick = (e) => {
    this.setState({ message: '', username: '', userid: '', passwd: '' });
  };
  // handlerKeydown = (e) => {
  //   console.log(e);
  //   if (e.keyCode === 13) {
  //     this.handlerClick(e);
  //   }
  // };

  handlerSubmit = (e) => {
    let passwd = document.getElementById('passwd');
    //let passwd = document.querySelector("input[name='passwd']");
    passwd.className = '';
    if (this.state.passwd === '0000') {
      passwd.className = 'success';
    } else {
      passwd.className = 'failure';
    }

    //form속성 action에 설정된 주소로 입력 값 전달을 취소한다
    if (this.state.userid === '') {
      alert('아이디 입력해줘~~~');
      e.preventDefault();
      //let userid = document.querySelector("input[name='userid']");
      this.useridInput.focus();
      return false;
    }
    if (this.state.username === '') {
      alert('사용자이름  입력해줘~~~');
      e.preventDefault();
      //let username = document.querySelector("input[name='username']");
      this.usernameInput.focus();
      return false;
    }
  };
  render() {
    return (
      <div id="idDiv">
        <h1>이벤트 연습</h1>
        <form
          name="myForm"
          action="registerMember.do"
          method="get"
          onSubmit={this.handlerSubmit}
        >
          메시지 :{' '}
          <input
            type="text"
            name="message"
            placeholder="아무키나 입력해 보세요"
            onChange={this.handlerChange}
            value={this.state.message}
          />
          <br />
          사용자명 :
          <input
            type="text"
            name="username"
            placeholder="사용자이름 입력..."
            onChange={this.handlerChange}
            value={this.state.username}
            ref={(ref) => (this.usernameInput = ref)}
          />
          <br />
          아이디 :
          <input
            type="text"
            name="userid"
            placeholder="사용자 아이디 입력..."
            onChange={this.handlerChange}
            value={this.state.userid}
            ref={(ref) => (this.useridInput = ref)}
          />
          <br />
          비밀번호 :
          <input
            type="password"
            name="passwd"
            id="passwd"
            placeholder="비밀번호 입력..."
            onChange={this.handlerChange}
            value={this.state.passwd}
          />
          <h2>메시지 : {this.state.message}</h2>
          <h2>사용자명 : {this.state.username}</h2>
          <h2>아이디 : {this.state.userid}</h2>
          <button type="submit">확인</button>
          <image src=""></image>
          <button onClick={this.handlerClick}>초기화</button>
        </form>
      </div>
    );
  }
}

export default EventPractice;
