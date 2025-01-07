import React from "react";
import "./App.css";
import Avatar from "./Card/Avatar";
import Intro from "./Card/Intro";
import SkillList from "./Card/SkillList";
import Skill from "./Card/Skill";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
        <Skill />
      </div>
    </div>
  );
}

export default App;
