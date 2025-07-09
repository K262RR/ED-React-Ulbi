import "./App.css";
import "./styles/App.css";
import { useState } from "react";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "Javascript is a programming language" },
    { id: 2, title: "Python", body: "Python is a programming language" },
    { id: 3, title: "Java", body: "Java is a programming language" },
    { id: 4, title: "C++", body: "C++ is a programming language" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MySelect
          defaultValue="Сортировка по"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>
      {posts.length !== 0 ? (
        <PostList posts={posts} remove={removePost} title="Список постов " />
      ) : (
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          Посты не найдены
        </h2>
      )}
    </div>
  );
}

export default App;
