import "./App.css";
import { useEffect, useState } from "react";
import PostsPage from "./component/PostsPage";
import { Routes, Route } from "react-router-dom";
import AddPostPage from "./component/AddPostPage";
import ShowPost from "./component/ShowPost";
import EditPost from "./component/EditPost";

function App() {
  const URL = "http://localhost:7070";
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch(`${URL}/posts`);
    const data = await response.json();
    setPosts(data);
  };
  useEffect(() => {
    getPosts();
  }, []); 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PostsPage posts={posts} getPosts={getPosts} />} />
        <Route path="/posts/new" element={<AddPostPage URL={URL} />} />
        <Route
          path="/posts/:id"
          element={<ShowPost URL={URL} posts={posts} />}
        />
        <Route
          path="/posts/edit/:id"
          element={<EditPost posts={posts} URL={URL} getPosts={getPosts} setPosts={setPosts}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
