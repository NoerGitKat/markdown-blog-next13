import Link from "next/link";
import { getPostsMarkdowns } from "../app/utils";

export default function Posts() {
  const posts = getPostsMarkdowns();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <h3>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </h3>
          <h5>
            {post.subtitle} &ndash; <i>{post.date}</i>
          </h5>
        </li>
      ))}
    </ul>
  );
}
