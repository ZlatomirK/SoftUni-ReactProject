const Create = () => {
  return (
    <main>
      <section id="create-page">
        <div className="createSection">
          <form method="POST" className="createForm">
            <h2>Create Post</h2>
            <ul className="noBullet">
              <li>
                <label htmlFor="title">Name:</label>
                <input
                  type="text"
                  className="inputFields"
                  id="name"
                  placeholder="Delphini"
                  name="name"
                  value=""
                />
              </li>
              <li>
                <label htmlFor="key-word">Species:</label>
                <input
                  type="text"
                  className="inputFields"
                  id="species"
                  placeholder="Human"
                  name="species"
                  value=""
                />
              </li>
              <li>
                <label htmlFor="skin">Skin Colour:</label>
                <input
                  type="text"
                  className="inputFields"
                  id="skin"
                  placeholder="Black"
                  name="skinColor"
                  value=""
                />
              </li>
              <li>
                <label htmlFor="date">Eye Colour:</label>
                <input
                  type="text"
                  className="inputFields"
                  id="eyeColor"
                  placeholder="Black"
                  name="eyeColor"
                  value=""
                />
              </li>
              <li>
                <label htmlFor="image">Creature Image:</label>
                <input
                  type="text"
                  className="inputFields"
                  id="image"
                  placeholder="http:/..."
                  name="image"
                  value=""
                />
              </li>
              <li>
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  className="inputFields"
                  name="description"
                  placeholder="Creature..."
                ></textarea>
              </li>
              <li id="center-btn">
                <button id="create-btn">Create</button>
              </li>
            </ul>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Create;
