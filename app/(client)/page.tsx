import { post } from "@/sanity/schemas/post";
import { client } from "../../sanity/lib/client";
import Header from "../components/Header";
import { Post } from "../utils/interface";
import PostComponent from "../components/PostComponent";

async function getPosts() {
  const query = `
  *[_type == "post"] {
    title,
    slug,
    publishedAt,
    excerpt, 
    tags[]-> {
      id,
      slug,
      name
    }
  }
  `;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

export default async function Home() {
  const posts: Post[] = await getPosts();
  console.log(posts, "posts");

  return (
    <div>
      <Header title="Articles" />
      <div>
        {posts?.length > 0 &&
          posts.map((post) =>
            ((post) => <PostComponent key={post?._id} post={post} />)(post)
          )}{" "}
      </div>
    </div>
  );
}
