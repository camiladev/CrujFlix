import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

//import styled, {css} from 'styled-components';

import categoriasRepository from '../../../repositories/categorias';
import {WrapperLineForm, WrapperThead, 
WrapperTrThead, WrapperDiv, WrapperTbody, 
WrapperTbodyTr, WrapperContent, BackColor} from '../../../components/Table';


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
    categoriasRepository.getAll()
    .then((categoriasLista) => {
        console.log(categoriasLista[0]);
        setCategorias(categoriasLista);
    })
    .catch((err) => {
        console.log(err.message);
    });
}, []);


  return (
    <PageDefault widthForm = {50} buttonMenuW = {50} buttonMenuL = {'auto'} >
      <h1>
        Cadastro Categoria: {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        
        //Cadastra categoria
        categoriasRepository.create({
          titulo: values.nome,
          cor: values.cor,
          link_extra: {
            text: values.descricao,
            url:"",
            
          }
          
        });
        
        clearForm();
        //atualiza lista
        categoriasRepository.getAll()
          .then((categoriasLista) => {
              setCategorias(categoriasLista);
              //console.log("Apos cadastrar",...categorias);
          })
          .catch((err) => {
              console.log(err.message);
          });
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

        <Button buttonTwo ={50}>
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
            <th></th>
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
                          <WrapperContent>
                              <BackColor backItem={categorias.cor}></BackColor>
                          </WrapperContent>
                          <WrapperContent>Excluir</WrapperContent>
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
