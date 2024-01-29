import { getPostById } from "@/lib/getPostById";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const PostDetails = async ({ params }) => {
  const post = await getPostById(params.id);
  return (
    <main className="py-8 px-5 md:px-10 2xl:px-32 flex min-h-screen flex-col text-center items-center">
      <h2 className="m-8 xl:px-40 font-paytone text-4xl md:text-5xl lg:text-6xl ">
        {post.title}
      </h2>
      <Image
        width={"1000"}
        height={"1000"}
        src={post.image}
        alt=""
        className="rounded my-5 drop-shadow-lg"
      />
      <div className="flex items-center justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mx-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          />
        </svg>

        <p className="font-cutive font-xl">
          Published: {post.publishedAt.slice(0, 10)}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mx-2 ml-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <p className="font-cutive font-xl">
          Updated: {post.updatedAt.slice(0, 10)}
        </p>
      </div>
      <p className="py-10 px-4 lg:px-24 xl:px-48 leading-10 font-poppins text-justify">
        {post.content}
      </p>
      <Link
        className="font-semibold text-lg text-blue-500  hover:text-sky-400"
        href="/posts"
      >{`View All Posts`}</Link>
    </main>
  );
};

export default PostDetails;
