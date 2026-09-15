import "./App.css";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import Table from "./components/Table";
import Form from "./components/Form";
import useUser from "./hooks/useUser";

function App() {
  const { show } = useUser();

  return (
    <>
      <Header />

      <div className="d-flex justify-content-center align-items-center flex-column mt-4">
        <SearchBox />
      </div>

      {show ? <Form /> : <Table />}
    </>
  );
}

export default App;