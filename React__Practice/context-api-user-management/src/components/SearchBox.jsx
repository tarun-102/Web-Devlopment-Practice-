import React, { useState } from "react";
import Button from "./Button";
import useUser from "../hooks/useUser";

function SearchBox() {
  const [user, setUser] = useState("");

  const { setSearchUser } = useUser();

  const handleChange = (e) => {
    const value = e.target.value;
    setUser(value);
    setSearchUser(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchUser(user);
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

      <Button
        className="btn-primary ms-2"
        name="Search"
        type="submit"
      />
    </form>
  );
}

export default SearchBox;