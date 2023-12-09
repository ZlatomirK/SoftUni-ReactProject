import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import * as authService from "../../services/authService";
import * as postService from "../../services/postService";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [decodedToken, setDecodedToken] = useState({});
  const [isOwner, setIsOwner] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    postService
      .getOne(postId)
      .then((postData) => {
        setPost(postData);

        const token = Cookies.get("token");
        if (token) {
          authService
            .decodeToken(token)
            .then((data) => {
              setDecodedToken(data);

              // Check if the post owner is the same as the decoded token's ID
              if (postData.owner._id === data._id) {
                setIsOwner(true);
              }
            })
            .catch((error) => {
              console.error("Error decoding token:", error);
            });
        } else {
          console.log("Token not present");
        }
      })
      .catch((err) => {
        console.error("Error fetching post:", err);
      });
  }, [postId]);

  const deleteHandler = async () => {
    const hasConfirmed = confirm(
      `Are you sure you want to delete ${post.title}?`
    );

    if (hasConfirmed) {
      await postService.remove(post._id).then(navigate("/posts"));
    }
  };

  return (
    <main>
      <h1>{post.title}</h1>
      <h2>{post.topic}</h2>
      <p>{post.text}</p>
      {isOwner && (
        <div>
          <button>Edit</button>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      )}
    </main>
  );
};

export default Details;
