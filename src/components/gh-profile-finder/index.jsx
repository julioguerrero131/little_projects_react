import { useEffect, useState } from "react";
import UserCard from "./user";
import './styles.css'

export default function GithubProfileFinder() {
  const [username, setUsername] = useState("julioguerrero131");
  const [userdata, setUserdata] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();

    if (data) {
      setUserdata(data);
      setLoading(false);
    }
  }

  function handleSubmit() {
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <p>Loading data...</p>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Buscar Usuario de Github..."
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <button onClick={handleSubmit}>Buscar</button>
      </div>
      {userdata !== null ? <UserCard user={userdata} /> : null}
    </div>
  );
}
