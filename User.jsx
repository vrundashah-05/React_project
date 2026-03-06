import axios from "axios";
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(
        
    )
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {users.map(u => (
        <p key={u.id}>{u.name} - {u.age}</p>
      ))}
    </div>
  );
}
