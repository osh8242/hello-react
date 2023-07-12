import React, { useState } from "react";

function EventPracticeFunction(props) {
  const [profile, setProfile] = useState({
    message: "",
    username: "",
    userid: "",
  });

  let handlerChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  let handlerClick = (e) => {
    setProfile({
      message: "",
      username: "",
      userid: "",
    });
  };

  return (
    <div>
      <h1>이벤트연습</h1>
      메시지 :{" "}
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해보세요"
        onChange={handlerChange}
        onKeyPress={(e) => {
          console.log(e);
          if (e.charCode === 13) {
            handlerClick(e);
          }
        }}
        value={profile.message}
      />
      <br />
      사용자 :{" "}
      <input
        type="text"
        name="username"
        placeholder="아무거나 입력해보세요"
        onChange={handlerChange}
        value={profile.username}
      />
      <br />
      아이디 :{" "}
      <input
        type="text"
        name="userid"
        placeholder="아무거나 입력해보세요"
        onChange={handlerChange}
        value={profile.userid}
      />
      <h2>메세지 : {profile.message}</h2>
      <h2>사용자 : {profile.username}</h2>
      <h2>아이디 : {profile.userid}</h2>
      <button onClick={handlerClick}>초기화</button>
    </div>
  );
}

export default EventPracticeFunction;
