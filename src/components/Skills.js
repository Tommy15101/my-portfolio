import React from 'react';
import Marquee from 'react-fast-marquee';
import { 
  SkillsMainContainer,
  SkillsIconContainer,
  SingleSkill,
  SkillsInformationContainer,
  SkillsInformationWindow,
  SkillsBlock,
  Skill 
} from '../styles/SkillsStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faEthereum, faGit, faHtml5, faJsSquare, faNode, faReact } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
    <SkillsMainContainer>

      <SkillsInformationContainer>
        <SkillsInformationWindow>
          <SkillsBlock>
            <Skill><FontAwesomeIcon icon={faHtml5} /><FontAwesomeIcon icon={faCss3} /></Skill>
            <a href="https://freecodecamp.org/certification/tommy15101/responsive-web-design" target="_blank" rel="noreferrer">HTML CSS Certificate</a>
          </SkillsBlock>

          <SkillsBlock></SkillsBlock>

          <SkillsBlock>
            <Skill><FontAwesomeIcon icon={faReact} /></Skill>
            <a href="React.pdf" target="_blank" rel="noreferrer">React Certificate</a>
          </SkillsBlock>

          <SkillsBlock></SkillsBlock>

          <SkillsBlock>
            <Skill><FontAwesomeIcon icon={faJsSquare} /></Skill>
            <a href="JS.pdf" target="_blank" rel="noreferrer">Javascript Certificate</a>
          </SkillsBlock>

          <SkillsBlock></SkillsBlock>

          <SkillsBlock>
            <Skill><FontAwesomeIcon icon={faNode} /></Skill>
            <a href="Node.pdf" target="_blank" rel="noreferrer">Node JS Certificate</a>
          </SkillsBlock>

          <SkillsBlock></SkillsBlock>

          <SkillsBlock>
            <Skill><FontAwesomeIcon icon={faEthereum} /></Skill>
            <a href="blockchain.pdf" target="_blank" rel="noreferrer">Solidity Blockchain Certificate</a>
          </SkillsBlock>

          <SkillsBlock></SkillsBlock>

        </SkillsInformationWindow>
      </SkillsInformationContainer>

      <Marquee pauseOnHover={true} speed={200} loop={0} gradientWidth={600}>

        <SkillsIconContainer>

          <SingleSkill>
            <FontAwesomeIcon icon={faEthereum} />
          </SingleSkill>
        
          <SingleSkill>
            <FontAwesomeIcon icon={faHtml5} />
          </SingleSkill>
        
          <SingleSkill>
            <FontAwesomeIcon icon={faCss3} />
          </SingleSkill>
        
          <SingleSkill>
            <FontAwesomeIcon icon={faReact} />
          </SingleSkill>
          
          <SingleSkill>
            <FontAwesomeIcon icon={faNode} />
          </SingleSkill>
          
          <SingleSkill>
            <FontAwesomeIcon icon={faJsSquare} />
          </SingleSkill>
          
          <SingleSkill>
            <FontAwesomeIcon icon={faGit} />
          </SingleSkill>

        </SkillsIconContainer>

      </Marquee>

    </SkillsMainContainer>
  )
};

export default Skills;
