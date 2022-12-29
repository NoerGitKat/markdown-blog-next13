import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { TPostMetadata } from "../../types";

const getFrontMatter = (markdowns: string[]): TPostMetadata[] => {
  const posts = markdowns.map((filename) => {
    const fileContents = readFileSync(`assets/markdowns/${filename}`);
    const frontMatter = matter(fileContents);

    return {
      ...frontMatter.data,
      slug: filename.replace(".md", ""),
    };
  });

  return posts;
};

const getPostsMarkdowns = (): TPostMetadata[] => {
  const folder = "assets/markdowns/";
  const files = readdirSync(folder);
  const markdowns = files.filter((file) => file.endsWith(".md"));
  const posts = getFrontMatter(markdowns);
  return posts;
};

export default getPostsMarkdowns;
