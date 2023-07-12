import React from 'react';

const MyComponent3 = (props) => {
  const {name, age} = props;
  return <div>
    <h1>나의 세번째 컴포넌트</h1>
    <h2>이름 : {name}</h2>
    <h2>나이 : {age}</h2>
    </div>;
};

export default MyComponent3;
