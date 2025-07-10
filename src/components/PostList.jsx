import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Посты не найдены
      </h2>
    );
  }

  return (
    <div>
      <h1>{title}</h1>

      {posts.map((post, index) => (
        <PostItem key={post.id} number={index + 1} post={post} remove={remove} />
      ))}
    </div>
  );
};

export default PostList;
