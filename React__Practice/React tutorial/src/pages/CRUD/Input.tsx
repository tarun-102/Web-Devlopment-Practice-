import { useState, type ChangeEvent, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import { setSearchUser } from "../../store/slice/userSlice";
import AppButton from "../../components/AppButton";

function Input() {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUser(value);
    dispatch(setSearchUser(value));
  };

  const handleSearch = (e: FormEvent) => {
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
      <AppButton className="btn-primary ms-2" type="submit">
        Search
      </AppButton>
    </form>
  );
}

export default Input;