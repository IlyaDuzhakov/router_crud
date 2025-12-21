import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPen, FaCamera, FaRegStickyNote } from "react-icons/fa";


const AddPostPage = ({ URL }) => {
  const [textPost, setTextPost] = useState("");
  const [author, setAuthor] = useState(""); // имя автора
  const navigate = useNavigate();

  const addPost = async () => {
    const newPost = {
      content: textPost,
      author: author || "Аноним",  // если имя не введено
      created: Date.now()
    };
   try {
    await fetch(`${URL}/posts`, {
     method: "POST",
     body: JSON.stringify(newPost),
     headers: {'Content-Type': 'application/json'}
    })
  } catch(error) {
    console.log(error.message)
  }
};

    
 

  return (
    <div className="add-post">
      <div className="menu">
        <div><FaPen  className="menu-item"/><span>Публикация</span></div>
    <div className="divider">|</div>
    <div><FaCamera className="menu-item"/><span>Фото/Видео</span></div>
    <div className="divider">|</div>
    <div><FaRegStickyNote className="menu-item"/><span>Прямой эфир</span></div>
    <div className="divider">|</div>
    <div className="#"><span>Ещё</span></div>
    <button className="btn-close" onClick={() => navigate('/')}>&times;</button>
      </div>
      <div className="author-wrapper">
      <input
  type="text"
  placeholder="Ваше имя"
  className="input-author"
  value={author}
  onChange={(e) => setAuthor(e.target.value)}
/>
      <div className="post-body">
      <textarea className="textarea"
        name=""
        id=""
        value={textPost}
        onChange={(event) => {
          setTextPost(event.target.value);
        }}
      >Текст поста</textarea>
      </div>
      </div>
      <div className="form-footer">
      <button className="btn-publish"
        onClick={() => {
          addPost();
          navigate('/')
        }}
      >
        Опубликовать
      </button>
      </div>
    </div>
  );
};

export default AddPostPage;
