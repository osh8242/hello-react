import React, { Component } from 'react';

class EventPracticeClass extends Component {
    state = {
        message : "",
        username : "",
        userid : ""
    };

    // handlerChangeMessage = e => {
    //     console.log(e.target.value);
    //     this.setState({ [e.target.name] : e.target.value})
    // };

    // handlerChangeUsername = e=>{
    //     console.log(e.target.value);
    //     this.setState({username : e.target.value})
    // };
    handlerChange = e => {
        this.setState({[e.target.name] : e.target.value});
    };

    handlerClick = e => {
        this.setState({
            message : "",
            username : "",
            userid : ""
        });
    }


    render() {
        return (
            <div>
                <h1>이벤트연습</h1>
                메시지 : {' '}
                <input
                    type="text"
                    name="message"
                    placeholder='아무거나 입력해보세요'
                    onChange={this.handlerChange}
                    onKeyDown={e=>{
                        console.log(e);
                
                        if (e.keyCode === 13){
                            this.handlerClick(e);
                        }
                    }}
                    value={this.state.message}
                />
                <br/>
                사용자 : {' '}
                <input
                    type="text"
                    name="username"
                    placeholder='아무거나 입력해보세요'
                    onChange={this.handlerChange}
                    value={this.state.username}
                />
                <br/>
                아이디 : {' '}
                <input
                    type="text"
                    name="userid"
                    placeholder='아무거나 입력해보세요'
                    onChange={this.handlerChange}
                    value={this.state.userid}
                />

                
                <h2>메세지 : {this.state.message}</h2>
                <h2>사용자 : {this.state.username}</h2>

                <button onClick={this.handlerClick}>초기화</button>
            </div>
        );
    }
}

export default EventPracticeClass;