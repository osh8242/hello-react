import React, { Component } from 'react';
import { MyComponent } from './comp/MyComponent';

class Counter extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         number : props.number,
    //         fixedNumber : 0,
    //     }
    // }
    
    state = {
        number : 0,
        fixedNumber : 0,
    }

    render() {
        
        const {number, fixedNumber} = this.state;    
        console.log("랜더러 호출");    

        return (            
            <div>
                <h1>{number}</h1>
                <h2>값이 변경되지 않는 값 : {fixedNumber}</h2>
                <button
                    onClick={() => {
                        
                        console.log("값이 증가 전", number);    
                        // this.number++;d
                        // this.setState({number : number+1}); // 비동기로 내부적으로  render() 함수 호출
                        this.setState((prevState) => {
                            return {number : prevState.number+1};
                        }); // 동기화 루틴 state값을 변경함
                        console.log("값이 증가 후 1 : " , this.state.number);
                        this.setState((prevState) => {
                            return {number : prevState.number+1};
                        }); // 마지막에 비동기로 render() 함수 호출
                        console.log("값이 증가 후 2 : " , this.state.number);
                                                                
                    }}
                >1증가
                </button>
                <MyComponent name="홍길동" age={this.state.number} />
            </div>
        );

    }
}

export default Counter;