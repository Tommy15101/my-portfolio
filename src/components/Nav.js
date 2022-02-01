import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    NavContainer,
    MyName,
    SocialLinks,
    Twitter,
    GitHub,
    Email,
    NavLinks,
    MobileNavToggle,
    MobileNavExtension,
    SocialLinksExtended,
    NavLinksExtended
} from '../styles/NavStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCaretLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    let navigate = useNavigate();
    const [mobileNav, setMobileNav] = useState(false);
  return (
        <>     
            <NavContainer>
                <MyName onClick={() => {
                            setMobileNav((curr) => !curr)
                            }}>
                    <h1 onClick={() => navigate("./")} >Tommy Atkins</h1>
                    <SocialLinks>
                        <a href="https://twitter.com/BlockchainVeins" target="_blank" rel="noreferrer">
                            <Twitter><FontAwesomeIcon icon={faTwitter}/></Twitter>
                        </a>
                        <a href="https://github.com/Tommy15101" target="_blank" rel="noreferrer">
                            <GitHub><FontAwesomeIcon icon={faGithub}/></GitHub>
                        </a>
                        <a href="mailto:thomas.robert.atkins@gmail.com" target="_blank" rel="noreferrer">
                            <Email><FontAwesomeIcon icon={faEnvelope}/></Email>
                        </a>
                    </SocialLinks>
                </MyName>

                <NavLinks>
                    <ul>
                        <li onClick={() => navigate("./projects")}>Projects</li>
                        <li onClick={() => navigate("./skills")}>Skills</li>
                    </ul>
                    <MobileNavToggle onClick={() => {
                            setMobileNav((curr) => !curr)
                            }}>
                            { mobileNav ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faCaretLeft} /> }
                        </MobileNavToggle>
                </NavLinks>
                
                {mobileNav && 
                <MobileNavExtension>
                    
                    <NavLinksExtended>
                        <ul onClick={() => {
                            setMobileNav((curr) => !curr)
                            }}>
                            <li onClick={() => navigate("./projects")}>Projects</li>
                            <li onClick={() => navigate("./skills")}>Skills</li>
                        </ul>
                    </NavLinksExtended>

                    <SocialLinksExtended onClick={() => {
                            setMobileNav((curr) => !curr)
                            }}>
                        <a href="https://twitter.com/BlockchainVeins" target="_blank" rel="noreferrer">
                            <Twitter><FontAwesomeIcon icon={faTwitter}/></Twitter>
                        </a>
                        <a href="https://github.com/Tommy15101" target="_blank" rel="noreferrer">
                            <GitHub><FontAwesomeIcon icon={faGithub}/></GitHub>
                        </a>
                        <a href="mailto:thomas.robert.atkins@gmail.com" target="_blank" rel="noreferrer">
                            <Email><FontAwesomeIcon icon={faEnvelope}/></Email>
                        </a>
                    </SocialLinksExtended>

                </MobileNavExtension>}
            </NavContainer>
        </>
  )};

export default Nav;
