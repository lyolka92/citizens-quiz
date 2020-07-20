import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  margin: 20px 10px;

  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    color: white;
    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg, #2c9299, #62cb4a)"
        : !correct && userClicked
        ? "linear-gradient(90deg, #c16899, #ff5656)"
        : "linear-gradient(90deg, rgb(0, 141, 192), rgb(89, 253, 224))"};
    border: 1px solid white;
    box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
  }
`;
