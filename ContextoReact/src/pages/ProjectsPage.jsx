import { useState, useContext } from "react";
import ProjectCard from "../components/ProjectCard";
import { ProjectContext } from "../context/projects.context";
import { ThemeContext } from "../context/theme.context"; 

function ProjectsPage() {
    const projectList = useContext(ProjectContext);
  const [projects, setProjects] = useState(projectList);
  const {theme} = useContext(ThemeContext); 

  return (
    <div className={"ProjectsPage " + theme}>
      <h1>My Projects</h1>
      <div className="projects">
        {projects.map(p => (
          <ProjectCard key={p._id} project={p} />
        ))}
      </div>
    </div>
  );
}
 
export default ProjectsPage;