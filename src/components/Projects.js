import React from 'react';
import { 
  ProjectsMainContainer,
  ProjectsWindowDisplay,
  ProjectsWindowImage,
  ProjectsWindowHeader,
  ProjectsWindowInfo,
  ProjectsWindowButtons,
  Footer
} from '../styles/ProjectsStyle';
import { ProjectsData } from './ProjectsData';

const Projects = () => {
  return (
    <ProjectsMainContainer>

      {ProjectsData.projects.map((item, index) => {
        return(
          <ProjectsWindowDisplay key={index}>

            <ProjectsWindowImage>
              <a href={item.visit} target="_blank"rel="noreferrer"><img src={item.imgSrc} alt=""/></a>
            </ProjectsWindowImage>

            <ProjectsWindowHeader>
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <p>{item.info}</p>
            </ProjectsWindowHeader>
            
            <ProjectsWindowInfo>
                <h2>{item.skillsHeader}</h2>
                <li>{item.skillsOne}</li>
                <li>{item.skillsTwo}</li>
                <li>{item.skillsThree}</li>
            </ProjectsWindowInfo>

            <ProjectsWindowButtons>
            <a href={item.code} target="_blank" rel="noreferrer"><button>{item.buttonOne}</button></a>
            <a href={item.visit} target="_blank" rel="noreferrer"><button>{item.buttonTwo}</button></a>
            </ProjectsWindowButtons>

          </ProjectsWindowDisplay>
        )
      })}
      <Footer />
    </ProjectsMainContainer>
  )
};

export default Projects;
