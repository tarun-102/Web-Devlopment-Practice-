import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../Button";
import { setSearchUser } from "../../app/userSlice";

function Input() {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    setUser(value);
    dispatch(setSearchUser(value));
  };

  const handleSearch = (e) => {
  e.preventDefault();
  dispatch(setSearchUser(user));
};

  return (
    <form onSubmit={handleSearch} className="d-flex">
      <input
        className="form-control"
        type="search"
        placeholder="Search user"
        value={user}
        onChange={handleChange}
      />

      <Button className="btn-primary ms-2" name="Search" type="submit" />
    </form>
  );
}

export default Input;
