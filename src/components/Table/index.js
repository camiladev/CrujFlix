//import React from 'react';
import styled, {css} from 'styled-components';

const WrapperLineForm = styled.table`
  /* wrapper-line-form */
  position: relative;
  width: 100%;
  height: auto;  
  padding: 16px 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  /*top: 10px;*/

  /* --color-primary-medium */
  border: 4px solid #2A7AE4;
  box-sizing: border-box;

`;

const WrapperThead = styled.thead`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 41px;
    background: #2A7AE4;
    /* border: 4px solid #2A7AE4; */ 


`;

const WrapperTrThead = styled.tr`
     /* Nome cabeçalho*/

  position: absolute;
  width: 100%;
  height: 41px;



    /* identical to box height */

    display:grid;
    grid-template-columns: 20% 50% 15% 15%;
    align-items: center;

/* --color-gray-light */

color: #F5F5F5;


`;



const WrapperDiv = styled.div`     
    
    padding-top: 30px;
`;
const WrapperTbody = styled.tbody`  

    padding-top: 50px;
`;
const WrapperTbodyTr = styled.tr`
     /* Nome cabeçalho*/

  width: 100%;
  height: auto;
  top: 25px;

    /* identical to box height */

    display:grid;
    grid-template-columns: 20% 55% 15% 15%;
    align-items: center;
`;



const WrapperContent = styled.td`

/* titulo das colunas */

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 5px;


`;

const BackColor = styled.div`
  width: 30px;
  height: 20px;
  

  ${({ backItem }) => css `
      background: ${backItem};
    `}

`;


function Table (){
  console.log('Tabela categoria')

    return
    };

  export {
    WrapperLineForm,
    WrapperThead,
    WrapperTrThead,
    WrapperDiv,
    WrapperTbody, 
    WrapperTbodyTr,
    WrapperContent,
    BackColor

  }
