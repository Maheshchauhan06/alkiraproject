import { SearchRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import "./App.css";
import Table from "./comp/Table";

function App() {
  const [Teams, setTeams] = useState([]);
  const [newTeams, setnewTeams] = useState([]);
  const [search, setsearch] = useState("");

  // fetching data

  useEffect(() => {
    if (search) {
      setnewTeams(
        Teams.filter((res) => {
          return res.name.toLowerCase().includes(search.toLowerCase());
        })
      );
    } else {
      setnewTeams(Teams);
    }
  }, [search]);

  useEffect(() => {
    fetch(`https://www.balldontlie.io/api/v1/teams`)
      .then((res) => res.json())
      .then((res) => {
        setTeams(res.data);
        setnewTeams(res.data);
      });
  }, []);

  return (
    <div className="app_container">
      <div className="app_box">
        <div className="search_bar">
          <h1> NBA TEAMS</h1>
          <div className="inputfield">
            <SearchRounded sx={{ width: "2rem" }} />
            <input
              type="text"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
          </div>
        </div>
        <div className="table">
          <Table Teams={newTeams} />
        </div>
      </div>
    </div>
  );
}

export default App;
