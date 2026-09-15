import React from "react";
import Button from "./Button";
import { toast } from "react-toastify";
import useUser from "../hooks/useUser";

function Table() {
  const {
    users,
    searchUser,
    selectUsers,
    deleteUser,
    setEditUser,
    toggleSelectUser,
    moveuserup,
    moveuserdown,
    selectAllUsers,
    setShowForm,
  } = useUser();

  const filteredUsers = users.filter((user) =>
    user.FullName.toLowerCase().includes(searchUser.toLowerCase())
  );

  return (
    <div className="m-4">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">
              <input
                type="checkbox"
                checked={
                  selectUsers.length === users.length && users.length > 0
                }
                onChange={selectAllUsers}
              />
            </th>

            <th scope="col">No.</th>

            <th scope="col">
              FullName
              <Button name="▲" onClick={moveuserup} />
              <Button name="▼" onClick={moveuserdown} />
            </th>

            <th scope="col">
              UserName
              <Button name="▲" onClick={moveuserup} />
              <Button name="▼" onClick={moveuserdown} />
            </th>

            <th scope="col">
              Email
              <Button name="▲" onClick={moveuserup} />
              <Button name="▼" onClick={moveuserdown} />
            </th>

            <th scope="col">
              Gender
              <Button name="▲" onClick={moveuserup} />
              <Button name="▼" onClick={moveuserdown} />
            </th>

            <th scope="col">
              Date
              <Button name="▲" onClick={moveuserup} />
              <Button name="▼" onClick={moveuserdown} />
            </th>

            <th scope="col">
              City
              <Button name="▲" onClick={moveuserup} />
              <Button name="▼" onClick={moveuserdown} />
            </th>

            <th scope="col">
              Country
              <Button name="▲" onClick={moveuserup} />
              <Button name="▼" onClick={moveuserdown} />
            </th>

            <th scope="col">Condition</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={user.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectUsers.includes(user.id)}
                  onChange={() => toggleSelectUser(user.id)}
                />
              </td>

              <td>{index + 1}</td>
              <td>{user.FullName}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.date}</td>
              <td>{user.city}</td>
              <td>{user.country}</td>
              <td>{user.condition ? "True" : "False"}</td>

              <td>
                <Button
                  className="btn-primary"
                  name="Update"
                  onClick={() => {
                    setEditUser(user);
                    setShowForm();
                  }}
                />

                <Button
                  className="ms-2 btn-danger"
                  name="Delete"
                  onClick={() => {
                    deleteUser(user.id);
                    toast.success("User deleted successfully!");
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