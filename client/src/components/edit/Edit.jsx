import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as postService from "../../services/postService";
import Cookies from 'js-cookie';

const Edit = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [post, setPost] = useState({
    title: "",
    topic: "",
    text: "",
  });

  useEffect(() => {
    postService.getOne(postId).then((result) => {
      setPost(result);
    });
  }, [postId]);

  const editPostSubmitHandler = async (e) => {
    e.preventDefault();

    const postData = Object.fromEntries(new FormData(e.currentTarget));
    postData.token = Cookies.get('token')

    try {
      await postService.edit(postId, postData).then(navigate("/posts"));
    } catch (err) {

      console.log(err);
    }
  };

  const onChange = (e) => {
    setPost((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main>
      <section id="create-page">
        <div className="createSection">
          <form className="createForm" onSubmit={editPostSubmitHandler}>
            <h2>Edit Post</h2>
            <ul className="noBullet">
              <li>
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  className="inputFields"
                  id="title"
                  name="title"
                  onChange={onChange}
                  value={post.title}
                />
              </li>
              <li>
                <label htmlFor="key-word">Topic:</label>
                <input
                  type="text"
                  className="inputFields"
                  id="topic"
                  name="topic"
                  onChange={onChange}
                  value={post.topic}
                />
              </li>
              <li>
                <label htmlFor="description">Text:</label>
                <textarea
                  id="text"
                  className="inputFields"
                  name="text"
                  onChange={onChange}
                  value={post.text}
                ></textarea>
              </li>
              <li id="center-btn">
                <button id="create-btn" type="submit">
                  Edit
                </button>
              </li>
            </ul>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Edit;
