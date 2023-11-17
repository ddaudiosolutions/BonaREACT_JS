import clienteAxios from "../config/axios";
const data = {
  headers: {},
  // body: {imagenData},
};

const getAllPostsBlog = () => {
  return clienteAxios.get("?_embed", data);
};

const getSinglePostBlog = (slug) => {
  return clienteAxios.get(`?slug=${slug}`, data);
};

const BlogServices = {
  getAllPostsBlog,
  getSinglePostBlog,
};

export default BlogServices;
