import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const WrapperLineForm = styled.Table`
/* wrapper-line-form */
position: absolute;
width: 1360px;
height: 425px;
left: 40px;
top: 966px;

/* --color-primary-medium */
border: 4px solid #2A7AE4;
box-sizing: border-box;

`;

function Table (){

    return (
        <>
        <WrapperLineForm>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Cor</th>
            </tr>
          </thead>
          <tbody>
            {
              categorias.map( function(categorias) {
                return (
                  <tr key={categorias.id}>
                    <td>{categorias.titulo}</td>
                    <td>{categorias.descricao}</td>
                    <td>{categorias.cor}</td>
                  </tr>
                );
              } )
            }
          </tbody>
        </WrapperLineForm>
      </>

    )
}

export default Table;
