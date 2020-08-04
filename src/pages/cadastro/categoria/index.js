import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

import styled from 'styled-components';

import categoriasRepository from '../../../repositories/categorias';

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
    grid-template-columns: 20% 50% 15%;
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
    grid-template-columns: 20% 55% 15%;
    align-items: center;
`;

const WrapperLineThead = styled.th`

/* titulo das colunas */
  width: 185px;
  height: 41px;
 
  /* @title-small */

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5em;
  line-height: 41px;


`;

const WrapperContent = styled.td`

/* titulo das colunas */


 
  /* @title-small */

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 5px;

`;


function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm} = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);


  // ============

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
    .then((categoriasLista) => {
        console.log(categoriasLista[0]);
        setCategorias(categoriasLista);
    })
    .catch((err) => {
        console.log(err.message);
    });
}, []);


  return (
    <PageDefault>
      <h1>
        Cadastro Categoria: {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >
        <FormField
          label="Nome da Categoria "
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição "
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>





      <>
      
        <WrapperLineForm> 
          <WrapperThead>
            <WrapperTrThead>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Cor</th>
            </WrapperTrThead>
          </WrapperThead>
            <WrapperTbody>
          
          <WrapperDiv>
              {
                categorias.map( function(categorias) {
                  return (
                    
                      <WrapperTbodyTr key={categorias.id}>
                        <WrapperContent>{categorias.titulo}</WrapperContent>
                        <WrapperContent>{categorias.descricao}</WrapperContent>
                        <WrapperContent>{categorias.cor}</WrapperContent>
                      </WrapperTbodyTr>

                   
                  );
                } )
              }
            
          </WrapperDiv>

            </WrapperTbody>
        </WrapperLineForm>
      </>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
