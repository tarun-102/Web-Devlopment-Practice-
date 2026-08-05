import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleUser } from "../utils/fetchuserdata";

function UserDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    async function fetchUser() {
      const data = await getSingleUser(userId);
      setUser(data);
    }

    fetchUser();
  }, [userId]);


  if (!user) return <h2>Loading...</h2>;

  return (
    <div className="container mt-5">
    
    <h1>User ID :{user.id}</h1>        
      <p>userName: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>{user.website}</p>
      <p>City: {user.address.city}</p>
      <p>Zipcode: {user.address.zipcode}</p>

      <button 
      className="btn btn-primary"
        onClick={() => navigate("/")}
      >Back</button>
    </div>

  );
}

export default UserDetails;