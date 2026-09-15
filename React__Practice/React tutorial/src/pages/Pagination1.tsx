import { useState } from "react";

interface Cricketer {
  id: number;
  name: string;
  role: string;
  jersey: number;
  image: string;
}

const cricketers: Cricketer[] = [
  {
    id: 1,
    name: "Virat Kohli",
    role: "Batsman",
    jersey: 18,
    image:
      "https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png",
  },
  {
    id: 2,
    name: "Rohit Sharma",
    role: "Batsman",
    jersey: 45,
    image:
      "https://documents.iplt20.com/ipl/IPLHeadshot2025/6.png",
  },
  {
    id: 3,
    name: "MS Dhoni",
    role: "Wicket Keeper",
    jersey: 7,
    image:
      "https://documents.iplt20.com/ipl/IPLHeadshot2025/57.png",
  },
  {
    id: 4,
    name: "Jasprit Bumrah",
    role: "Bowler",
    jersey: 93,
    image:
      "https://documents.iplt20.com/ipl/IPLHeadshot2025/9.png",
  },
  {
    id: 5,
    name: "Hardik Pandya",
    role: "All Rounder",
    jersey: 33,
    image:
      "https://documents.iplt20.com/ipl/IPLHeadshot2025/54.png",
  },
  {
    id: 6,
    name: "Ravindra Jadeja",
    role: "All Rounder",
    jersey: 8,
    image:
      "https://documents.iplt20.com/ipl/IPLHeadshot2025/46.png",
  },
  {
    id: 7,
    name: "Shubman Gill",
    role: "Batsman",
    jersey: 77,
    image:
      "https://documents.iplt20.com/ipl/IPLHeadshot2025/62.png",
  },
  {
    id: 8,
    name: "Rishabh Pant",
    role: "Wicket Keeper",
    jersey: 17,
    image:
      "https://documents.iplt20.com/ipl/IPLHeadshot2025/18.png",
  },
  {
    id: 9,
    name: "Suryakumar Yadav",
    role: "Batsman",
    jersey: 63,
    image:
      "https://documents.iplt20.com/ipl/IPLHeadshot2025/174.png",
  },
  {
    id: 10,
    name: "KL Rahul",
    role: "Wicket Keeper",
    jersey: 1,
    image:
      "https://documents.iplt20.com/ipl/IPLHeadshot2025/19.png",
  },
  {
    id: 11,
    name: "Mohammed Siraj",
    role: "Bowler",
    jersey: 73,
    image:
      "https://images.icc-cricket.com/image/upload/t_player-headshot-portrait-lg-webp/prd/assets/players/13203/65799.png",
  },
  {
    id: 12,
    name: "Yashasvi Jaiswal",
    role: "Batsman",
    jersey: 64,
    image:
      "https://documents.iplt20.com/ipl/IPLHeadshot2026/533.png",
  },
];

function Pagination1() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const playersPerPage = 4;

  const totalPages = Math.ceil(
    cricketers.length / playersPerPage
  );

  const lastIndex = currentPage * playersPerPage;

  const firstIndex = lastIndex - playersPerPage;

  const currentPlayers = cricketers.slice(
    firstIndex,
    lastIndex
  );

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container">

    
        <div className="text-center mb-4">
          <h2 className="fw-bold">
            Indian Cricketers
          </h2>

          <p className="text-secondary">
            Pagination without API
          </p>
        </div>


        <div className="row g-3">

          {currentPlayers.map((player) => (
            <div
              className="col-12 col-md-6"
              key={player.id}
            >
              <div className="card border-0 shadow-sm">

                <div className="card-body d-flex align-items-center">

                  <img
                    src={player.image}
                    alt={player.name}
                    className="rounded-circle bg-light me-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "contain",
                    }}
                  />

               
                  <div className="flex-grow-1">

                    <h5 className="fw-bold mb-1">
                      {player.name}
                    </h5>

                    <p className="text-secondary mb-1">
                      {player.role}
                    </p>

                    <small className="text-muted">
                      Jersey No: {player.jersey}
                    </small>

                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>


        <div className="d-flex justify-content-center align-items-center gap-2 mt-4">

          <button
            className="btn btn-outline-secondary"
            onClick={previousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {Array.from(
            { length: totalPages },
            (_, index) => index + 1
          ).map((page) => (
            <button
              key={page}
              className={`btn ${
                currentPage === page
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}

          <button
            className="btn btn-outline-secondary"
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>

        </div>

        
        <p className="text-center text-muted mt-3 mb-0">
          Page {currentPage} of {totalPages}
        </p>

      </div>
    </div>
  );
}

export default Pagination1;