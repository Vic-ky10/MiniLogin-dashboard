import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";

function Login() {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState("");

  const handleFunction = () => {
    if (name.trim() === "") {
      alert("please enter you name ");
    }
    setUser(name);
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        placeholder="Enter a name"
      />
      <button onClick={handleFunction}> Login</button>
    </div>
  );
}

export default Login;
