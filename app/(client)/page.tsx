import { post } from "@/sanity/schemas/post";
import { client } from "../../sanity/lib/client";
import Header from "../components/Header";
import { Post } from "../utils/interface";

async function getPosts() {
  const query = `
  *[_type == "post"] {
    title,
    slug,
    publishedAt,
    excerpt, 
  }
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const posts: Post[] = await getPosts();
  console.log(posts, "posts");

  return (
    <div>
      <Header title="Articles" />
      <div>
        {posts?.length > 0 &&
          posts.map((post) => <p key={post._id}>{post.title}</p>)}{" "}
      </div>
    </div>
  );
}
