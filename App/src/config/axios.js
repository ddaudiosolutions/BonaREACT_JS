import axios from "axios";

const clienteAxios = axios.create({
  /* baseURL: "https://www.dermathosmallorca.com/wp-json/wp/v2/posts", */
  baseURL: "https://www.produciendomimusica.com/wp-json/wp/v2/posts",
});

export default clienteAxios;
