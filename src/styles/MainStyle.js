import styled, { keyframes } from 'styled-components';
import background from '../images/mainbackground.jpg';

const dropDown = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-100px)
    }
    70% {
        opacity: 0.2;
    }
    100% {
        opacity: 1;
        transform: translateY(0px)
    }
`
const fromLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100px)
    }
    70% {
        opacity: 0.2;
    }
    100% {
        opacity: 1;
        transform: translateX(0px)
    }
`
const fromRight = keyframes`
    0% {
        opacity: 0;
        transform: translateX(100px)
    }
    70% {
        opacity: 0.2;
    }
    100% {
        opacity: 1;
        transform: translateX(0px)
    }
`
const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

export const HomeMainContainer = styled.div`
    max-height: 100vh;
    max-width: 100vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 3fr;
    background-image: url(${background});
    background-size: cover;
`
export const WelcomeHeader = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    animation: ${dropDown} 1s ease-in;
    h1 {
        font-size: 50px;
    }
    @media (max-width: 1200px) {
        h1 {
            font-size: 35px;
        }
    }
    @media (max-width: 576px) {
        h1 {
            font-size: 25px;
        }
    }
`
export const WelcomeText = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
`
export const WelcomeLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 100px;
    animation: ${fromLeft} 1.5s ease-in;
    h3 {
        font-size: 30px;
    }
    @media (max-width: 1200px) {
        h3 {
            font-size: 25px;
        }
    }
    @media (max-width: 768px) {
        margin-top: 50px;
    }
    @media (max-width: 576px) {
        h3 {
            font-size: 15px;
        }
    }
`
export const WelcomeRight = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    margin-top: 100px;
    animation: ${fromRight} 1.5s ease-in;
    h3 {
        font-size: 30px;
    }
    @media (max-width: 1200px) {
        h3 {
            font-size: 25px;
        }
    }
    @media (max-width: 768px) {
        margin-top: 30px;
    }
    @media (max-width: 576px) {
        h3 {
            font-size: 15px;
        }
    }
`

// Small / Landscape / Phones - @media (max-width: 576px)
// Medium / Tabets - @media (max-width: 768px)
// Large / Laptops - @media (max-width: 992px)
// XL / Dektops - @media (max-width: 1200px)
// XXL / Monitors - @media (max-width: 1400px)