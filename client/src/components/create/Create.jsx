import { useNavigate } from "react-router-dom";

import * as postService from "../../services/postService";
import Cookies from 'js-cookie';

const Create = () => {
  const navigate = useNavigate();

  const createPostSubmitHandler = async (e) => {
    e.preventDefault();

    const postData = Object.fromEntries(new FormData(e.currentTarget));
    postData.token = Cookies.get('token')

    try {
      postService.create(postData);

      navigate("/posts");
    } catch (err) {

      console.log(err);
    }
  };

  return (
    <main>
      <section id="create-page">
        <div className="createSection">
          <form className="createForm" onSubmit={createPostSubmitHandler}>
            <h2>Create Post</h2>
            <ul className="noBullet">
              <li>
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  className="inputFields"
                  id="title"
                  name="title"
                />
              </li>
              <li>
                <label htmlFor="key-word">Topic:</label>
                <input
                  type="text"
                  className="inputFields"
                  id="topic"
                  name="topic"
                />
              </li>
              <li>
                <label htmlFor="description">Text:</label>
                <textarea
                  id="text"
                  className="inputFields"
                  name="text"
                ></textarea>
              </li>
              <li id="center-btn">
                <button id="create-btn" type="submit">
                  Create
                </button>
              </li>
            </ul>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Create;
