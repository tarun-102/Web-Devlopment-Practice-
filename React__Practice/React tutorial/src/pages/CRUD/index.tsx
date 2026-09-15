import Input from "./Input";
import Header from "./Header";
import Table from "./Table";
import Form from "./Form";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

function CrudApp() {
  const show = useSelector((state: RootState) => state.showForm.show);

  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center align-items-center flex-column mt-4">
        <Input />
      </div>
      {show === true ? <Form /> : <Table />}
    </div>
  );
}

export default CrudApp;