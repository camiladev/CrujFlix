import styled, {css} from "styled-components";

const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    background-color: black;
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
        opacity: .5; 
    }

    @media (max-width: 800px) {    
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--primary);
      border-radius: 0;
      border: 0;
      text-align: center;
    }

    ${({disabletag}) => css`
        display: ${disabletag};
    `};

    ${({buttonTwo})=> css`
        @media (max-width: 800px){
            width: ${buttonTwo}%;
        }
    
    `};

    ${({buttonMenuW, buttonMenuL}) => css`
        @media (max-width: 800px){
            left: ${buttonMenuL};
            width: ${buttonMenuW}%;
        }
    
    `};
    
`;

export default Button;