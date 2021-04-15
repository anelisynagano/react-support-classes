import { useState } from "react";

const User = ({ dob, email, name, picture, handleChangeEmail }) => {
  const [newEmail, setNewEmail] = useState("");

  const handleChange = (e) => {
    setNewEmail(e.target.value);
  };

  return (
    <div className='user-card'>
      <img src={picture.thumbnail} alt='' />
      <p>{email}</p>
      <p>
        {name.first} {name.last}
      </p>
      <p>age: {dob.age}</p>
      <input onChange={handleChange} type='text' value={newEmail} />
      <button onClick={() => handleChangeEmail(newEmail)}>Change email :)</button>
    </div>
  );
};

export default User;
