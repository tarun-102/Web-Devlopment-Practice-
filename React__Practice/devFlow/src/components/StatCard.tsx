import type { state } from "../types/state";

type StatCardProps = Omit<state, "id">;

function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <div className="col-md-4">
      <div className="card border-0 shadow-sm h-100">
        <div className="card-body">
          <p className="text-secondary mb-1">
            {title}
          </p>

          <h2 className="fw-bold mb-0">
            {value}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default StatCard;