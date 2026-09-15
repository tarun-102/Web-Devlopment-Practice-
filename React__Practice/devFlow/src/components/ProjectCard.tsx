import type { Project } from "../types/project";

type ProjectCardProps = Omit<Project, "id">;

function ProjectCard({
  name,
  description,
  status,
}: ProjectCardProps) {
  const badgeClass =
    status === "Active"
      ? "text-bg-success"
      : status === "Pending"
      ? "text-bg-warning"
      : "text-bg-primary";

  return (
    <div className="d-flex justify-content-between align-items-center border-bottom py-3">
      <div>
        <h6 className="fw-bold mb-1">
          {name}
        </h6>

        <small className="text-secondary">
          {description}
        </small>
      </div>

      <span className={`badge ${badgeClass}`}>
        {status}
      </span>
    </div>
  );
}

export default ProjectCard;