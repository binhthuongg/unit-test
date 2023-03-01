import { useEffect, useState } from "react";
import { getPostsService } from "services/post.services";
import { PostModel } from "../../models/post.model";

function Posts() {
  const [posts, setPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    getPostsService().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <div>
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.id}>
            <span className="id">{post.id}</span>
            <span>: </span>
            <span className="title">{post.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
