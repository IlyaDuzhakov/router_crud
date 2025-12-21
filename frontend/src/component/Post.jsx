import { Link } from "react-router-dom";
import { FaThumbsUp, FaRegComment } from "react-icons/fa";
import TimeAgo from "./TimeAgo";

const Post = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className="post">
        <div className="name_time-wrapper">
          <p className="post-name">
            <span className="label">Имя:</span>{" "}
            <span className="author">{post.author || "Аноним"}</span>
          </p>
          <p className="post-time">
            <TimeAgo timestamp={post.created} />
          </p>
        </div>
        <div>
          <h3 className="text-post">{post.content}</h3>
        </div>
        <div className="button-wrapper">
          <div className="button-left">
            <FaThumbsUp className="like-icon" /> <span>Нравится</span>
          </div>
          <div className="button-right">
            <FaRegComment className="comment" /> <span>Комментировать</span>
          </div>
        </div>
        <div className="text-input">
          <input
            className="text-comment"
            type="text"
            placeholder="Напишите комментарий"
          />
        </div>
      </div>
    </Link>
  );
};

export default Post;
