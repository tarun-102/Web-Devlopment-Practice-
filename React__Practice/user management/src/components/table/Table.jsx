import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../Button";
import { toast } from "react-toastify";
import {
  deleteUser,
  setEditUser,
  toggleSelectUser,
  moveuserup,
  moveuserdown,
  selectAllUsers,
} from "../../app/userSlice";
import { setShowForm } from "../../app/showFormSlice";
function Table() {
  const dispatch = useDispatch();
  const { users, searchUser, selectUsers } = useSelector(
    (State) => State.users,
  );
  const filteredUsers = users.filter((user) =>
    user.FullName.toLowerCase().includes(searchUser.toLowerCase()),
  );
  return (
    <div className="m-4">
      <table className="table table-hover ">
        <thead>
          <tr>
            <th scope="col">
              <input
                type="checkbox"
                checked={
                  selectUsers.length === users.length && users.length > 0
                }
                onChange={() => dispatch(selectAllUsers())}
              />
            </th>
            <th scope="col">No.</th>
            <th scope="col">
              FulltName
              <Button
                name="▲"
                onClick={() => {
                  dispatch(moveuserup());
                }}
              />
              <Button
                name="▼"
                onClick={() => {
                  dispatch(moveuserdown());
                }}
              />
            </th>
            <th scope="col">
              UserName
              <Button
                name="▲"
                onClick={() => {
                  dispatch(moveuserup());
                }}
              />
              <Button
                name="▼"
                onClick={() => {
                  dispatch(moveuserdown());
                }}
              />
            </th>
            <th scope="col">
              email
              <Button
                name="▲"
                onClick={() => {
                  dispatch(moveuserup());
                }}
              />
              <Button
                name="▼"
                onClick={() => {
                  dispatch(moveuserdown());
                }}
              />
            </th>
            <th scope="col">
              gendar
              <Button
                name="▲"
                onClick={() => {
                  dispatch(moveuserup());
                }}
              />
              <Button
                name="▼"
                onClick={() => {
                  dispatch(moveuserdown());
                }}
              />
            </th>
            <th scope="col">
              date
              <Button
                name="▲"
                onClick={() => {
                  dispatch(moveuserup());
                }}
              />
              <Button
                name="▼"
                onClick={() => {
                  dispatch(moveuserdown());
                }}
              />
            </th>
            <th scope="col">
              city
              <Button
                name="▲"
                onClick={() => {
                  dispatch(moveuserup());
                }}
              />
              <Button
                name="▼"
                onClick={() => {
                  dispatch(moveuserdown());
                }}
              />
            </th>
            <th scope="col">
              Country
              <Button
                name="▲"
                onClick={() => {
                  dispatch(moveuserup());
                }}
              />
              <Button
                name="▼"
                onClick={() => {
                  dispatch(moveuserdown());
                }}
              />
            </th>
            <th scope="col">Condittion</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, indiex) => (
            <tr key={user.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectUsers.includes(user.id)}
                  onChange={() => dispatch(toggleSelectUser(user.id))}
                />
              </td>
              <td>{indiex}</td>
              <td>{user.FullName}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.date}</td>
              <td>{user.city}</td>
              <td>{user.country}</td>
              <td>{user.condition ? "Ture" : "False"}</td>
              <td>
                <Button
                  className={"btn-primary"}
                  onClick={() => {
                    dispatch(setEditUser(user));
                    dispatch(setShowForm());
                  }}
                  name={"Update"}
                />
                <Button
                  className="ms-2 btn-danger"
                  name={"delete"}
                  onClick={() => {
                    dispatch(deleteUser(user.id));
                    toast.success("user deleted successfylly!");
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
