const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://mamaflix.herokuapp.com';
    //'https://mamaflix.herokuapp.com/categorias'; 
      //ou http://localhost:8080/categorias maquina local

export default {
  URL_BACKEND_TOP,
};