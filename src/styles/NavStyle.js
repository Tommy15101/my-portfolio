import styled, { keyframes } from 'styled-components';

const dropDown = keyframes`
    from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`

// The container of the Nav Bar
export const NavContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(0,0,0,0.6);
    z-index: 100;
`
// The left side of the Nav Bar
export const MyName = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    color: white;
    h1 {
        font-size: 30px;
        margin: 0 30px 0 40px;
        @media (max-width: 1200px) {
            font-size: 25px;
            margin: 0 20px 0 30px;
        }
        @media (max-width: 992px) {
            font-size: 20px;
        }
        @media (max-width: 768px) {
            font-size: 18px;
        }
        @media (max-width: 576px) {
            font-size: 15px;
        }
    }
`
export const SocialLinks = styled.div`
    width: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    font-size: 20px;
    @media (max-width: 1200px) {
        font-size: 18px;
    }
    @media (max-width: 992px) {
        font-size: 15px;
    }
    @media (max-width: 768px) {
        display: none;
    }
    a {}
`
export const Twitter = styled.div`
    color: lightblue;
    cursor: pointer;
    transition: all .2s ease-in-out;
    &:hover {
        transform: scale(1.2);
    }
`
export const GitHub = styled.div`
    color: white;
    cursor: pointer;
    transition: all .2s ease-in-out;
    &:hover {
        transform: scale(1.2);
    }
`
export const Email = styled.div`
    color: red;
    cursor: pointer;
    transition: all .2s ease-in-out;
    &:hover {
        transform: scale(1.2);
    }
`


// The right side of the Nav Bar
export const NavLinks = styled.div`
    width: 300px;
    margin-right: 100px;
    cursor: pointer;
    color: white;
    @media (max-width: 1200px) {
        width: 250px;
        margin-right: 80px;
    }
    @media (max-width: 992px) {
        width: 180px;
        margin-right: 60px;
    }
    ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
            li {
                transition: all .3s ease-in-out;
                &:hover {
                    transform: scale(1.2);
                    color: white;
                }
            }
        @media (max-width: 768px) {
        display: none;
        }
    }
`

// MOBILE NAVBAR TOGGLE MENU //
export const MobileNavToggle = styled.div`
    display: none;
    color: white;
    font-size: 30px;
    position: absolute;
    right: 0;
    top: 12px;
    margin-right: 30px;
    @media (max-width: 768px) {
        display: block;
    }
`
export const MobileNavExtension = styled.div`
    position: absolute;
    width: 100%;
    max-height: 100vh;
    top: 0;
    background-color: rgba(0,0,0,0.9);
    display: grid;
    grid-template-rows: 1fr 1.25fr;
    animation: ${dropDown} 1s ease-in-out;
    z-index: -1;
    @media (min-width: 768px) {
        display: none;
    }
`
export const NavLinksExtended = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    li {
        margin: 60px 0 60px 0;
        font-size: 25px;
        cursor: pointer;
    }
`
export const SocialLinksExtended = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-size: 40px;
    a {
        cursor: pointer;
    }
`

// Small / Landscape / Phones - @media (max-width: 576px)
// Medium / Tabets - @media (max-width: 768px)
// Large / Laptops - @media (max-width: 992px)
// XL / Dektops - @media (max-width: 1200px)
// XXL / Monitors - @media (max-width: 1400px)