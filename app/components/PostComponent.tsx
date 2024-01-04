import Link from "next/link";
import React from "react";
import { Post } from "../utils/interface";

interface Props {
  post: Post;
}

const PostComponent = ({ post }: Props) => {
  return (
    <div>
      <Link href={"/posts/"}></Link>
    </div>
  );
};

export default PostComponent;
