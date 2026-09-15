import { useNavigate } from "react-router-dom";
import AppButton from "../components/AppButton";

const Home = () => {
  const navigate = useNavigate();

  const projects = [
    { id: "todo", label: "Todo App", path: "/todo" },
    { id: "calculator", label: "Calculator", path: "/calculator" },
    { id: "form-react", label: "Form Using React", path: "/form-react" },
    { id: "form-formik", label: "Form Using Formik(UseFormik) & Yup", path: "/form-formik" },
    { id: "form-formik-tag", label: "Form Using Formik(Formik Tag) & Yup", path: "/form-formik-tag" },
    { id: "crud", label: "CRUD", path: "/crud" },
    { id: "todo-reducer", label: "Todo Using Reducer and Context", path: "/todo-reducer" },
    { id: "login", label: "Login Practice", path: "/login" },
    { id: "infinite-scroll", label: "Infinite Scroll", path: "/infinite-scroll" },
    { id: "infinite-scroll-pkg", label: "Infinite Scroll Using Package", path: "/infinite-scroll-pkg" },
    { id: "pagination", label: "Pagination", path: "/pagination" },
    { id: "usememo", label: "UseMemo and UseCallback", path: "/usememocallback" },
    { id: "pagination2", label: "Pagination2", path: "/pagination2" },
  ];

  return (
    <div className="d-flex flex-wrap gap-3">
      {projects.map((proj) => (
        <AppButton
          key={proj.id}
          className="btn-info text-dark"
          onClick={() => navigate(proj.path)}
        >
          {proj.label}
        </AppButton>
      ))}
    </div>
  );
};

export default Home;