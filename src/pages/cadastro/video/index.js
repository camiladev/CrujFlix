import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    categoria: 'Front End',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault widthForm={50}>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Video Cadastrado com sucesso!!!1!');
        var verifica = null;
        const categoriaEscolhida = categorias.find((categoria) => {
          console.log('Categoria escolhida',values.categoria );
          verifica = categoria.titulo === values.categoria;
          console.log('Categoria selecionada existe?',verifica)

          return verifica;
        });

        console.log('Verifica!', verifica);
        if (verifica === true){
              videosRepository.create({
                titulo: values.titulo,
                url: values.url,
                categoriaId: categoriaEscolhida.id,
              })
                .then(() => {
                  console.log('Cadastrou com sucesso!');
                  history.push('/');
                })
                .catch((err) => {
                  console.log('Não cadastrou');
                  console.log(err.message);
              });

        }else{
          console.log('Categoria não cadastrada');
          alert('Vídeo não cadastrado, pois categoria não existe!');
        };
          
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit" className="ButtonLink">
          Cadastrar
        </Button>
      </form>

      <br />
      <br />

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;