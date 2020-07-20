import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/quiz_BG.001.jpeg";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    
    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
    }
    
    * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 14px;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: black;
  }

  .score {
    color: black;
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
  }

  h1 {
    color: black;
    filter: drop-shadow(2px 2px rgb(255, 255, 255));
    font-family: "GUERRILLA", "Comic Sans MS", sans-serif;
    font-size: 80px;
    font-weight: 700;
    text-align: center;
    margin: 20px 0;
  }

  @media screen and (max-width: 450px) {
    h1 {
      font-size: 60px;
    }
  }

  @media screen and (max-width: 350px) {
    h1 {
      font-size: 50px;
    }
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, white, #ddd);
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
