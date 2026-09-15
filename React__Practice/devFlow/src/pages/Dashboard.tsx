import StatCard from "../components/StatCard";
import ProjectCard from "../components/ProjectCard";

import { stats } from "../data/stats";
import { projects } from "../data/projects";

import useAuth from "../hooks/useAuth";

function Dashboard() {
  const { state, dispatch } = useAuth();

  return (
    <>
      <h2 className="fw-bold mb-1">
        Dashboard
      </h2>

      <p className="text-secondary mb-4">
        Welcome back 👋
      </p>

      <div className="mb-4">
        <button
          className="btn btn-primary me-2"
          onClick={() => {
            dispatch({
              type: "LOGIN",
              payload: {
                id: 1,
                name: "Developer",
                email: "developer@gmail.com",
                role: "user",
              },
            });
          }}
        >
          Login Test
        </button>

        <button
          className="btn btn-danger"
          onClick={() => {
            dispatch({
              type: "LOGOUT",
            });
          }}
        >
          Logout Test
        </button>

        <p className="mt-3">
          User:{" "}
          <strong>
            {state.user?.name ?? "Not logged in"}
          </strong>
        </p>
      </div>

      <div className="row g-4 mb-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
          />
        ))}
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h4 className="fw-bold mb-4">
            Recent Projects
          </h4>

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              status={project.status}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;