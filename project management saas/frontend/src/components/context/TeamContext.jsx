import { createContext, useState } from "react";
import axios from "axios";

export const TeamContext = createContext();
export const TeamProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);

  const getTeams = async () => {
    try {
      const response = await axios.get("http://localhost:3000/teams/getallteams", {
        withCredentials: true,
      });
      setTeams(response.data.teams);
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  return (
    <TeamContext.Provider value={{ teams, setTeams, getTeams }}>
      {children}
    </TeamContext.Provider>
  );
};