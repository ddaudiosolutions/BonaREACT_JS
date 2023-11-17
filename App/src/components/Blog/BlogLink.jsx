import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllPostsBlog } from "../../slices/blogPostsSlice";

function BlogLink({ setImagePosts }) {
  const dispatch = useDispatch();
  const blogPosts = useSelector((state) => state.postsBlog);

  useEffect(() => {
    // Llamada a la acción para obtener todas las publicaciones del blog
    dispatch(getAllPostsBlog());
  }, []);

  useEffect(() => {
    // Lógica para obtener las URLs de las imágenes
    if (blogPosts.posts && blogPosts.posts.length > 0) {
      const updatedPosts = blogPosts.posts.map(async (post) => {
        if (post._links && post._links["wp:featuredmedia"]) {
          const postImages = post._links["wp:featuredmedia"][0].href;
          try {
            const response = await fetch(postImages);
            const data = await response.json();
            const thumbnailUrl = data.media_details.sizes.full.source_url;

            return {
              ...post,
              imagen: [thumbnailUrl],
            };
          } catch (error) {
            console.error("Error al obtener la imagen:", error);
            return post;
          }
        } else {
          return post;
        }
      });

      Promise.all(updatedPosts)
        .then((updatedPostsData) => {
          updatedPostsData.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
          }, {});
        })
        .catch((error) => {
          console.error("Error al obtener las imágenes de las publicaciones:", error);
        });
    }
  }, [blogPosts]);

  return (
    <div className="d-flex aligns-items-center">
      <div className="links">
        <Link className="links-items" to="/blog">
          <div className="links-items align-self-center">
            <btn href="#" className="btn btn-lg btn-link ">
              Blog
            </btn>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BlogLink;
