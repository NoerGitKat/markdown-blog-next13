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
      <h1>{post.data.title}</h1>
      <Markdown>{post.content}</Markdown>
    </main>
  );
}
