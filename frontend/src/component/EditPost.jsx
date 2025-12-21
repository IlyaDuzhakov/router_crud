import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = ({posts, URL, getPosts}) => {
    const { id } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");

   useEffect(() => {
    const postToEdit = posts.find((p) => String(p.id) === id);
    if (postToEdit) {
      setText(postToEdit.content);
    }
  }, [id, posts]);

  const handleSave = async () => {
    try {
      const response = await fetch(`${URL}/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: text }),
      });

      if (!response.ok) {
        throw new Error("Ошибка при сохранении");
      }

      navigate("/");
    } catch (error) {
      console.error("Ошибка:", error.message);
    }
  }

  return (
    <div className='edit-wrapper'>
        <div className='edit'>
        <h1 className='edit-title'>Редактировать</h1>
        <textarea
  className="textarea"
  value={text}
  onChange={(e) => setText(e.target.value)}
/>
        <button className="save-change" onClick={handleSave}>Coхранить</button>
        </div>
    </div>
  )
}

export default EditPost