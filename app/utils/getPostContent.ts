import { readFileSync } from "fs";
import matter from "gray-matter";

const getPostContent = (slug: string) => {
  const folder = "assets/markdowns/";
  const file = `${folder}${slug}.md`;
  const content = readFileSync(file, "utf-8");
  const frontMatterResult = matter(content);
  return frontMatterResult;
};

export default getPostContent;
