import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Games.css";

const Games = ({ name }) => {
  const [details, setdetails] = useState([]);
  const [hometeam, sethometeam] = useState([]);
  const [visitorteam, setvisitorteam] = useState([]);

  const datafetch = async () => {
    const response = await axios.get("https://www.balldontlie.io/api/v1/games");
    const fatchData = response.data.data.find(
      (match) => match.home_team.id === name
    );
    if (fatchData) {
      setdetails(fatchData);
      sethometeam(fatchData.home_team);
      setvisitorteam(fatchData.visitor_team);
    }
  };

  useEffect(() => {
    datafetch();
  }, []);

  return (
    <div>
      {" "}
      {details ? (
        <div className="gamedetails">
          <h1 className="title">{name}</h1>
          <div className="home_team">
            <div className="detail">
              <p>Team Full Name</p>
              <p>Total Game in 2021</p>
            </div>

            <div className="detail">
              <p>{hometeam.full_name} </p>
              <p> 88 </p>
            </div>
          </div>
          <h1 className="heading">Random Game Details</h1>
          <div className="home_team games">
            <div className="detail">
              <p>Date</p>
              <p>Home Team</p>
              <p>Home Team Score</p>
              <p>Visitor Team</p>
              <p>Visitor Team Score</p>
            </div>
            <div className="detail">
              <p>{details.date ? details.date.slice(0, 10) : ""}</p>
              <p>{hometeam.name}</p>
              <p>{details.home_team_score}</p>
              <p>{visitorteam.name}</p>
              <p>{details.visitor_team_score} </p>
            </div>
          </div>
        </div>
      ) : (
        <p>no data</p>
      )}
    </div>
  );
};

export default Games;
