import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as postService from "../../services/postService";

const Details = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    postService
      .getOne(postId)
      .then(setPost)
      .catch((err) => {
        console.log(err);
      });
  }, [postId]);

  return (
    <main>
      <h1>{post.title}</h1>
      <h2>{post.topic}</h2>
      <p>{post.text}</p>
    </main>
  );
};

export default Details;
