import Post from './Post'


const PostList = ({posts}) => {
  return (
    posts.length === 0 ? (
        <h1 className='title'>Список пуст</h1>
      ) : (
        <div className="postsList"> 
          {posts.map((post, index) => {
            return <Post post={post} key={index}/>; 
          })}
        </div>
      )
  )
}

export default PostList