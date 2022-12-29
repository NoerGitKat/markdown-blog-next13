import Link from "next/link";
import { getPostsMarkdowns } from "../app/utils";

export default function Posts() {
  const posts = getPostsMarkdowns();
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {posts.map((post) => (
        <li key={post.slug} className="shadow-md rounded-md p-4">
          <Link href={`/posts/${post.slug}`}>
            <h3 className="font-bold text-violet-600 hover:underline">
              {post.title}
            </h3>
            <h6 className="text-sm text-slate-400">{post.date}</h6>
            <h5>{post.subtitle}</h5>
          </Link>
        </li>
      ))}
    </ul>
  );
}
