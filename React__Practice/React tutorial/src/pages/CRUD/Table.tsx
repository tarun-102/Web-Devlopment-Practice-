import { useSelector, useDispatch } from "react-redux";
import AppButton from "../../components/AppButton";
import { toast } from "react-toastify";
import {
  deleteUser,
  setEditUser,
  toggleSelectUser,
  moveuserup,
  moveuserdown,
  selectAllUsers,

   type User,
} from "../../store/slice/userSlice";
import { setShowForm } from "../../store/slice/showFormSlice";
import type { RootState } from "../../store/store";

function Table() {
  const dispatch = useDispatch();
  const { users, searchUser, selectUsers } = useSelector(
    (state: RootState) => state.users
  );

  const filteredUsers = users.filter((user: User) =>
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
                onChange={() => dispatch(selectAllUsers())}
              />
            </th>
            <th scope="col">No.</th>
            <th scope="col">
              FullName
              <AppButton onClick={() => dispatch(moveuserup())}>▲</AppButton>
              <AppButton onClick={() => dispatch(moveuserdown())}>▼</AppButton>
            </th>
            <th scope="col">
              UserName
              <AppButton onClick={() => dispatch(moveuserup())}>▲</AppButton>
              <AppButton onClick={() => dispatch(moveuserdown())}>▼</AppButton>
            </th>
            <th scope="col">
              email
              <AppButton onClick={() => dispatch(moveuserup())}>▲</AppButton>
              <AppButton onClick={() => dispatch(moveuserdown())}>▼</AppButton>
            </th>
            <th scope="col">
              gender
              <AppButton onClick={() => dispatch(moveuserup())}>▲</AppButton>
              <AppButton onClick={() => dispatch(moveuserdown())}>▼</AppButton>
            </th>
            <th scope="col">
              date
              <AppButton onClick={() => dispatch(moveuserup())}>▲</AppButton>
              <AppButton onClick={() => dispatch(moveuserdown())}>▼</AppButton>
            </th>
            <th scope="col">
              city
              <AppButton onClick={() => dispatch(moveuserup())}>▲</AppButton>
              <AppButton onClick={() => dispatch(moveuserdown())}>▼</AppButton>
            </th>
            <th scope="col">
              Country
              <AppButton onClick={() => dispatch(moveuserup())}>▲</AppButton>
              <AppButton onClick={() => dispatch(moveuserdown())}>▼</AppButton>
            </th>
            <th scope="col">Condition</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user: User, index: number) => (
            <tr key={user.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectUsers.includes(user.id)}
                  onChange={() => dispatch(toggleSelectUser(user.id))}
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
                <AppButton
                  className="btn-primary"
                  onClick={() => {
                    dispatch(setEditUser(user));
                    dispatch(setShowForm());
                  }}
                >
                  Update
                </AppButton>
                <AppButton
                  className="ms-2 btn-danger"
                  onClick={() => {
                    dispatch(deleteUser(user.id));
                    toast.success("User deleted successfully!");
                  }}
                >
                  Delete
                </AppButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;