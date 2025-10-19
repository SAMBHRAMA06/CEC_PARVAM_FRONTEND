import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
        setError("Error while loading the data");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (error) return <h1>{error}</h1>;

  if (loading) return <p>Loading....</p>;
  return (
    <>
      {data.map((d) => (
        <li key={d.id}>
          {d.name} - {d.email}
        </li>
      ))}
    </>
  );
}

export default App;