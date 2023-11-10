import React from "react";
import Project from "./Project.jsx";
import "../styles/Projects.css";

const Projects = () => {
  const projectsInfo = [
    {
      name: "YTD",
      desc: "a simple youtube video downloader to download youtube videos",
      liveLink: "https://tuts-downloader.onrender.com/",
      githubLink: "https://github.com/obaddabo/youtube-video-downloader-telegram-bot",
      techs: ["EJS", "CSS", "NodeJS"],
      isOpenSource: true,
    },
    {
      name: "Gen z Dictionary",
      desc: " a simple app to find out the meaning of popular slangs etc ",
      liveLink: "https://genzdictionary.onrender.com",
      githubLink: "https://github.com/obaddabo/genz-dictionary",
      techs: ["React", "Node", "MongoDB", "Socket.io", "Redux"],
      isOpenSource: true,
    },
  ];
  return (
    <div className="Projects" id="projects">
      <h2>My Projects</h2>
      <div>
        {projectsInfo.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
