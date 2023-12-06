import { useEffect, useState } from "react";

import * as postService from "../../services/postService";
import Card1 from "./card/Card";
import "./posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService
      .getAll()
      .then((result) => setPosts(result))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="postsMain container">
      {Array.isArray(posts) && posts.length > 0 ? (
        posts.map((post) => (
          <Card1 className="component" key={post._id} {...post} />
        ))
      ) : (
        <h3 className="no-articles">No posts yet</h3>
      )}
    </div>
  );
};

export default Posts;
