import Markdown from "markdown-to-jsx";
import { getPostContent, getPostsMarkdowns } from "../../utils";

type TPostPageProps = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = async () => {
  const posts = getPostsMarkdowns();
  const slugsPaths = posts.map((post) => ({ slug: post.slug }));
  return slugsPaths;
};

export default function PostPage({ params }: TPostPageProps) {
  const post = getPostContent(params.slug);
  return (
    <main>
      <h6 className="text-md text-slate-400">{post.data.date}</h6>
      <h1 className="font-bold text-3xl text-violet-600">{post.data.title}</h1>
      <article className="prose lg:prose-xl">
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
}
