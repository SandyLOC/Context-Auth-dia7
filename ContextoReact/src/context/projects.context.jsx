import projectsData from "../projects-data.json";
import { createContext } from "react";
 
const ProjectContext = createContext();
 
function ProjectProviderWrapper(props) {
 
    return (
      
      <ProjectContext.Provider value={projectsData}>
          {props.children}
      </ProjectContext.Provider>
    )
  }
   
  export { ProjectContext, ProjectProviderWrapper };