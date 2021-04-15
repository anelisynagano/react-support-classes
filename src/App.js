import { useEffect, useState } from "react";
import "./App.css";
import User from "./components/User";
import UserEmail from "./components/UserEmail";

function App() {
  const [userInfo, setUserInfo] = useState({});

  const fetchUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUserInfo(data.results[0]));
  };

  const handleChangeEmail = (userEmail) => {
    setUserInfo((prevState) => {
      return { ...prevState, email: userEmail };
    });
  };

  useEffect(fetchUser, []);

  return (
    Object.keys(userInfo).length && (
      <>
        <UserEmail email={userInfo.email} />
        <User {...userInfo} handleChangeEmail={handleChangeEmail} />
      </>
    )
  );
}

export default App;
