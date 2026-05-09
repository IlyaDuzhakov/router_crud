import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaThumbsUp, FaRegComment } from "react-icons/fa";
import TimeAgo from "./TimeAgo";

const ShowPost = ({ posts, URL, getPosts }) => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [created, setCreated] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${URL}/posts/${id}`);
        if (!response.ok) throw new Error("Пост не найден");
        const data = await response.json();
        console.log("Что пришло с сервера:", data);
        setText(data.post.content);
        setAuthor(data.post.author || "Аноним");
        setCreated(data.post.created);
      } catch (error) {
        console.error("Ошибка загрузки поста:", error);
        setText("Ошибка загрузки");
      }
    };

    fetchPost();
  }, [id, URL]);

  const deletePost = async () => {
    try {
      await fetch(`${URL}/posts/${id}`, { method: "DELETE" });
      getPosts?.();
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="post-wrapper">
      <div>
        <p>
          <b>Имя:</b> {author}
        </p>
        <p>
          <i>ID поста:</i> {id}
        </p>
        <p>
          <b>{text}</b>
        </p>
        {created && <TimeAgo timestamp={created} />}
      </div>
      <div className="button-wrapper">
        <div className="button-left">
          <FaThumbsUp className="like-icon" /> <span>Нравится</span>
        </div>
        <div className="button-right">
          <FaRegComment className="comment" /> <span>Комментировать</span>
        </div>
      </div>
      <div className="change_delete-wrapper">
        <button
          className="change"
          onClick={() => {
            navigate(`/posts/edit/${id}`);
          }}
        >
          Изменить
        </button>
        <button className="delete" onClick={deletePost}>
          Удалить
        </button>
      </div>
    </div>
  );
};

export default ShowPost;
